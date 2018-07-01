using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using BonniesDiner.Data;
using BonniesDiner.Domain.Entity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Primitives;
using Microsoft.IdentityModel.Tokens;

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
        public IActionResult Login([FromBody]LoginEntity login)
        {
            UserEntity user = _dinerContext.User.FirstOrDefault(x => x.Email == login.Email);

            if (user == null) return BadRequest();

            // derive a 256-bit subkey (use HMACSHA1 with 10,000 iterations)
            string hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: login.Password,
                salt: Convert.FromBase64String(user.PasswordSalt),
                prf: KeyDerivationPrf.HMACSHA1,
                iterationCount: 10000,
                numBytesRequested: 256 / 8));

            if (hashed == user.PasswordHash)
            {
                var claims = new[]
                {
                    new Claim(ClaimTypes.Name, login.Email),
                    new Claim("IsAdmin", user.IsAdmin.ToString())
                };

                var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("secretkeysecretkeysecretkeysecretkey"));
                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                var token = new JwtSecurityToken(
                    issuer: "localhost",
                    audience: "localhost",
                    claims: claims,
                    expires: DateTime.Now.AddMinutes(30),
                    signingCredentials: creds);

                var returnToken = new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token)
                };

                return Json(returnToken);

            }

            return BadRequest();
        }
    }
}