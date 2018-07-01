using System;

namespace BonniesDiner.Domain.Entity
{
    public class OrderLineItemEntity
    {
        public int Id { get;  set; }
        public MenuEntity Item { get; set; }
        public int Quantity { get;  set; }

        public OrderLineItemEntity()
        {
        }

        public OrderLineItemEntity(int quantity)
        {
            if (quantity == 0)
                throw new ArgumentException($"{nameof(Quantity)} required");

            Quantity = quantity;
        }
    }
}