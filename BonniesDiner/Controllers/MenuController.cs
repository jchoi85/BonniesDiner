using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BonniesDiner.Data;
using BonniesDiner.Domain.Entity;
using Microsoft.AspNetCore.Mvc;

namespace BonniesDiner.Controllers
{
    [Route("api/[controller]")]
    public class MenuController : Controller
    {
        private readonly DinerContext _dinerContext;

        public MenuController(DinerContext dinerContext)
        {
            _dinerContext = dinerContext;
        }
        [HttpGet("[action]")]
        public IEnumerable<MenuEntity> GetMenuItems()
        {
            return _dinerContext.Menu.ToArray();
        }
    }
}