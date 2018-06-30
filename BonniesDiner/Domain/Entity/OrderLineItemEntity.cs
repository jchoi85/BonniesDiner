using System;

namespace BonniesDiner.Domain.Entity
{
    public class OrderLineItemEntity
    {
        public int Id { get; protected set; }
        public MenuEntity Item { get; protected set; }
        public int Quantity { get; protected set; }

        public OrderLineItemEntity(int quantity)
        {
            if (quantity == 0)
                throw new ArgumentException($"{nameof(Quantity)} required");

            Quantity = quantity;
        }
    }
}