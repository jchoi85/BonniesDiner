using System;
using System.Collections.Generic;

namespace BonniesDiner.Domain.Entity
{
    public class OrderEntity
    {
        public int Id { get; protected set; }
        public List<OrderLineItemEntity> LineItems { get; protected set; }
        public decimal OrderTotal { get; protected set; }
        public DateTime StatusNew { get; protected set; }
        public Nullable<DateTime>  StatusFulfilled { get; protected set; }  
        public Nullable<DateTime> StatusCancelled { get; protected set; }

        public OrderEntity(DateTime statusNew)
        {
            if (statusNew == null)
                throw new ArgumentException($"{nameof(StatusNew)} required");

            StatusNew = statusNew;

            OrderTotal = 0;
        }

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