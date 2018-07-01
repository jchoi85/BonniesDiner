using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BonniesDiner.Data;
using BonniesDiner.Domain.Entity;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BonniesDiner.Controllers
{
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
        [HttpPost("[action]")]
        public bool FulfillOrder(int orderId)
        {
            OrderEntity openOrder = _dinerContext.Order.FirstOrDefault(x => x.Id == orderId);

            if (openOrder == null) return false;

            openOrder.CompleteOrder(DateTime.Now);
            _dinerContext.Order.Update(openOrder);
            _dinerContext.SaveChanges();

            return true;
        }
        [HttpPost("[action]")]
        public bool CancelOrder(int orderId)
        {
            OrderEntity openOrder = _dinerContext.Order.FirstOrDefault(x => x.Id == orderId);

            if (openOrder == null) return false;

            openOrder.CancelOrder(DateTime.Now);
            _dinerContext.Order.Update(openOrder);
            _dinerContext.SaveChanges();

            return true;
        }
    }
}