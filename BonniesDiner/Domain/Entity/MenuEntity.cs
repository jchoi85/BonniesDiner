using System;

namespace BonniesDiner.Domain.Entity
{
    public class MenuEntity
    {
        public int Id { get; protected set; }
        public string ItemName  { get; protected set; }
        public decimal Price { get; protected set; }
        public string Description { get; protected set; }
        public string Category { get; protected set; }
        public int TimesOrdered { get; protected set; }

        public MenuEntity(string itemName, decimal price, string description, string category)
        {
            if (string.IsNullOrWhiteSpace(itemName))
                throw new ArgumentException($"{nameof(ItemName)} required");
            if (price == 0)
                throw new ArgumentException($"{nameof(Price)} required");
            if (string.IsNullOrWhiteSpace(description))
                throw new ArgumentException($"{nameof(Description)} required");
            if (string.IsNullOrWhiteSpace(category))
                throw new ArgumentException($"{nameof(Category)} required");

            ItemName = itemName;
            Price = price;
            Description = description;
            Category = category;
        }
    }
}