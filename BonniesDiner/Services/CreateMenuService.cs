using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BonniesDiner.Data;
using BonniesDiner.Domain.Entity;

namespace BonniesDiner.Services
{
    public class CreateMenuService
    {
        public void Load(DinerContext db)
        {
            db.Menu.Add(new MenuEntity("BBQ Drumsticks", 6.25m, "Vegan drumsticks drizzled in BBQ sauce", "Appetizers"));
            db.Menu.Add(new MenuEntity("French Fries", 4.25m, "Fresh never frozen golden fries", "Appetizers"));
            db.Menu.Add(new MenuEntity("Chick-un Nuggets", 5.95m, "Crispy chick-un nuggets served with a sweet chili dipping sauce", "Appetizers"));
            db.Menu.Add(new MenuEntity("Cauliflower Buffalo Wings", 6.95m, "Battered and fried cauliflower covered with buffalo sauce and served w/ ranch", "Appetizers"));

            db.Menu.Add(new MenuEntity("Chick-un Marinara Melt", 10.45m, "Chick-un with marinara sauce, melted vegan mozarella on a toasted French roll", "Entrees"));
            db.Menu.Add(new MenuEntity("Spinach Artichoke Pesto Pizza", 10.95m, "Garlic pesto sauce w/ oven roasted artichoke hearts, baby spinach, mushrooms, vegan mozarella, and wild oregano", "Entrees"));
            db.Menu.Add(new MenuEntity("Classic Veggie Burger", 9.45m, "Homemade patty served with house dressing, tomato, lettuce, onions, pickles, ketchup, and mustard on a wheat bun", "Entrees"));
            db.Menu.Add(new MenuEntity("Jackfruit Tacos", 9.45m, "Two corn tortillas topped w/ shredded jackfruit, cabbage, avocado, Sriracha mayo, homemade salsa fresca and cilantro", "Entrees"));
            db.Menu.Add(new MenuEntity("Southwestern Quinoa Salad", 9.45m, "Quinoa, black beans, red bell peppers, sweet corn, onions, cilantro, and lemon juice. Served on a bed of massaged kale with an Italian vinaigrette", "Entrees"));

            db.Menu.Add(new MenuEntity("Carrot Cake", 3.95m, "", "Dessert"));
            db.Menu.Add(new MenuEntity("Chocolate Cake", 4.50m, "", "Dessert"));
            db.Menu.Add(new MenuEntity("Coconut Cake", 3.95m, "", "Dessert"));
            db.Menu.Add(new MenuEntity("Ice Cream", 2.95m, "Choice of chocolate, vanilla, strawberry, or flavor of the month", "Dessert"));

            db.SaveChanges();
        }
    }
}
