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
        //testing CsvHelper
    //    [Route("csvfile"), HttpGet]
    //    public string GetCsv()
    //    {
    //        try
    //        {
    //            //if (!ModelState.IsValid) { return BadRequest(ModelState); }

    //            string newfilename = "BonniesDinerOrderDetails.csv";
    //            //result = WriteRecords();

    //            List<OrderEntity> allrows = GetAllOrders();

    //            using (var memoryStream = new MemoryStream())
    //            using (var streamWriter = new StreamWriter(memoryStream))
    //            using (var csv = new CsvWriter(streamWriter))
    //            {

    //                csv.WriteRecords(allrows);
    //                streamWriter.Flush();

    //                MemoryStream ms = new MemoryStream(memoryStream.ToArray());

    //                HttpContext.Response.Clear();
    //               // HttpContext.Response.BufferOutput = true;
    //                HttpContext.Response.ContentType = "text/csv";
    //                HttpContext.Response.AddHeader("content-disposition", "attachment; filename=" + newfilename);
    //                ms.WriteTo(HttpContext.Response.OutputStream);
    //                HttpContext.Response.Flush();
    //                HttpContext.Response.End();

    //                return Ok(new SuccessResponse());
    //            }

    //        }
    //        catch (Exception ex)
    //        {
    //            return BadRequest(ex.Message);
    //        }
    //    }
    }


}