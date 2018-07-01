using BonniesDiner.Domain.Entity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace BonniesDiner.Data
{
    public class IdentityContext : IdentityDbContext<AppUser>
    {
        public IdentityContext(DbContextOptions options)
            : base(options)
        {
        }

        public DbSet<AppUser> AppUser { get; set; }
    }
}