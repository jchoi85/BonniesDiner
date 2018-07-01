using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using BonniesDiner.Data;
using BonniesDiner.Domain.Entity;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace BonniesDiner.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly DinerContext _dinerContext;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public UserController(DinerContext dinerContext, IHttpContextAccessor httpContextAccessor)
        {
            _dinerContext = dinerContext;
            _httpContextAccessor = httpContextAccessor;
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

            UserEntity user = new UserEntity(register.Email, Convert.ToBase64String(salt), hashed, register.Username, register.IsAdmin);

            _dinerContext.Add(user);
            _dinerContext.SaveChanges();
        }
        [HttpPost("[action]")]
        public bool Login([FromBody]LoginEntity login)
        {
            UserEntity user = _dinerContext.User.FirstOrDefault(x => x.Email == login.Email);

            if (user == null) return false;

            // derive a 256-bit subkey (use HMACSHA1 with 10,000 iterations)
            string hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: login.Password,
                salt: Convert.FromBase64String(user.PasswordSalt),
                prf: KeyDerivationPrf.HMACSHA1,
                iterationCount: 10000,
                numBytesRequested: 256 / 8));

            if (hashed == user.PasswordHash)
            {
                Set("LOGIN", "LOGGEDIN", 36000);
                return true;
            }

            return false;
        }
        /// <summary>  
        /// Get the cookie  
        /// </summary>  
        /// <param name="key">Key </param>  
        /// <returns>string value</returns>  
        public string Get(string key)
        {
            return Request.Cookies["Key"];
        }
        /// <summary>  
        /// set the cookie  
        /// </summary>  
        /// <param name="key">key (unique indentifier)</param>  
        /// <param name="value">value to store in cookie object</param>  
        /// <param name="expireTime">expiration time</param>  
        public void Set(string key, string value, int? expireTime)
        {
            CookieOptions option = new CookieOptions();
            if (expireTime.HasValue)
                option.Expires = DateTime.Now.AddMinutes(expireTime.Value);
            else
                option.Expires = DateTime.Now.AddMilliseconds(10);
            Response.Cookies.Append(key, value, option);
        }
        /// <summary>  
        /// Delete the key  
        /// </summary>  
        /// <param name="key">Key</param>  
        public void Remove(string key)
        {
            Response.Cookies.Delete(key);
        }

    }
}