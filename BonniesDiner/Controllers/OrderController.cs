using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using BonniesDiner.Data;
using BonniesDiner.Domain.Entity;
using BonniesDiner.Services;
using CsvHelper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BonniesDiner.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class OrderController : Controller
    {
        private readonly DinerContext _dinerContext;
        private readonly IEmailService _emailService;

        public OrderController(DinerContext dinerContext, IEmailService emailService)
        {
            _dinerContext = dinerContext;
            _emailService = emailService;
        }

        [HttpGet("[action]")]
        public IEnumerable<OrderEntity> GetOpenOrders()
        {
            return _dinerContext.Order.Where(x => x.StatusFulfilled == null && x.StatusCancelled == null).ToList();
        }
        [HttpGet("[action]")]
        public IEnumerable<OrderEntity> GetAllOrders()
        {
            return _dinerContext.Order.ToList();
        }
        [HttpGet("[action]/{orderId}")]
        public bool FulfillOrder(int orderId)
        {
            OrderEntity openOrder = _dinerContext.Order.FirstOrDefault(x => x.Id == orderId);

            if (openOrder == null) return false;

            openOrder.CompleteOrder(DateTime.Now);
            _dinerContext.Order.Update(openOrder);
            _dinerContext.SaveChanges();
            EmailMessage email = new EmailMessage();
            email.ToAddresses.Add(new EmailAddress { Address = "pssok88@gmail.com", Name = "Patric Sok" });
            email.Subject = "TEST";
            email.FromAddresses.Add(new EmailAddress { Address = "pssok88@gmail.com", Name = "Patric Sok" });
            
            _emailService.Send(email);
            return true;
        }
        [HttpGet("[action]")]
        public bool Test()
        {
            EmailMessage email = new EmailMessage();
            email.ToAddresses.Add(new EmailAddress { Address = "pssok88@gmail.com", Name = "Patric Sok" });
            email.Subject = "Order From Bonnie's Diner";
            email.Content = "Thank you for your Purchase! Items will be ready in 15 minutes.";
            email.FromAddresses.Add(new EmailAddress { Address = "pssok88@gmail.com", Name = "Patric Sok" });

            _emailService.Send(email);
            return true;
        }
        [HttpGet("[action]/{orderId}")]
        public bool CancelOrder(int orderId)
        {
            OrderEntity openOrder = _dinerContext.Order.FirstOrDefault(x => x.Id == orderId);

            if (openOrder == null) return false;

            openOrder.CancelOrder(DateTime.Now);
            _dinerContext.Order.Update(openOrder);
            _dinerContext.SaveChanges();

            return true;
        }
        [HttpPost("[action]")]
        public bool CreateOrder([FromBody]List<CreateOrderEntity> order)
        {
            List<OrderLineItemEntity> items = new List<OrderLineItemEntity>();

            UserEntity currentUser = _dinerContext.User.FirstOrDefault(x => x.Email == User.Identity.Name);

            decimal total = 0m;

            foreach (CreateOrderEntity item in order)
            {
                MenuEntity menuItem = _dinerContext.Menu.FirstOrDefault(x => x.Id == item.MenuId);
                items.Add(new OrderLineItemEntity {Item = menuItem, Quantity = item.Quantity});
                total += menuItem.Price;
            }

            OrderEntity newOrder = new OrderEntity
            {
                LineItems = items,
                StatusNew = DateTime.Now,
                OrderTotal = total
            };

            currentUser.AddOrder(newOrder);
            _dinerContext.SaveChanges();

            return true;
        }
    }
}