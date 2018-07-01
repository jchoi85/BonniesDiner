using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;
using BonniesDiner.Data;
using BonniesDiner.Domain.Entity;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
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
        [HttpPost("[action]")]
        public void Register([FromBody]RegisterEntity register)
        {
            // generate a 128-bit salt using a secure PRNG
            byte[] salt = new byte[128 / 8];
            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(salt);
            }

            // derive a 256-bit subkey (use HMACSHA1 with 10,000 iterations)
            string hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: register.Password,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA1,
                iterationCount: 10000,
                numBytesRequested: 256 / 8));

            UserEntity user = new UserEntity(register.Email, salt.ToString(), hashed, register.Username);

            _dinerContext.Add(user);
            _dinerContext.SaveChanges();
        }
    }
}