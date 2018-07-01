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
    public class UserController : Controller
    {
        private readonly DinerContext _dinerContext;

        public UserController(DinerContext dinerContext)
        {
            _dinerContext = dinerContext;
        }
        [HttpGet("[action]")]
        public void Register(UserEntity user)
        {
            _dinerContext.Add(user);
            _dinerContext.SaveChanges();
        }
    }
}