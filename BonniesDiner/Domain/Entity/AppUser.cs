using Microsoft.AspNetCore.Identity;

namespace BonniesDiner.Domain.Entity
{
    public class AppUser : IdentityUser
    {
        // Extended Properties
        public int UserId { get; set; }
        public bool IsAdmin { get; set; }
    }
}