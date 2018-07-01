using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using BonniesDiner.Data;
using BonniesDiner.Domain.Entity;
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

        public OrderController(DinerContext dinerContext)
        {
            _dinerContext = dinerContext;
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
        [HttpGet("[action]/{orderId}")]
        public bool CreateOrder(CreateOrderEntity order)
        {
            List<OrderLineItemEntity> items = new List<OrderLineItemEntity>();

            UserEntity currentUser = _dinerContext.User.FirstOrDefault(x => x.Email == User.Identity.Name);

            decimal total = 0m;

            foreach (CreateOrderMenuItem item in order.MenuItems)
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