using BonniesDiner.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace BonniesDiner.Migrations
{
    public class IdentityContextDesignTimeDbContextFactory : IDesignTimeDbContextFactory<IdentityContext>
    {
        public IdentityContext CreateDbContext(string[] args)
        {
            DbContextOptionsBuilder<IdentityContext> opts = new DbContextOptionsBuilder<IdentityContext>()
                .UseSqlServer("Data Source=localhost\\sqlexpress;Initial Catalog=Bonnies_Diner;Integrated Security=SSPI",
                    x => x.MigrationsAssembly(typeof(IdentityContextDesignTimeDbContextFactory).Assembly.FullName));
            return new IdentityContext(opts.Options);
        }
    }
}
