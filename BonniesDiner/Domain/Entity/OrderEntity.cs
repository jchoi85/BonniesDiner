using System;
using System.Collections.Generic;

namespace BonniesDiner.Domain.Entity
{
    public class OrderEntity
    {
        public int Id { get; set; }
        public List<OrderLineItemEntity> LineItems { get; set; }
        public decimal OrderTotal { get; set; }
        public DateTime StatusNew { get; set; }
        public Nullable<DateTime>  StatusFulfilled { get; protected set; }  
        public Nullable<DateTime> StatusCancelled { get; protected set; }

        public void CompleteOrder(DateTime time)
        {
            StatusFulfilled = time;
        }

        public void CancelOrder(DateTime time)
        {
            StatusCancelled = time;
        }
        
    }
}