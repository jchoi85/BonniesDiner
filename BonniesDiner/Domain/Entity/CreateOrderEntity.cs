using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BonniesDiner.Domain.Entity
{
    public class CreateOrderEntity
    {
        public int MenuId { get; set; }
        public int Quantity { get; set; }
    }
}
