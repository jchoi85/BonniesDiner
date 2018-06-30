using BonniesDiner.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace BonniesDiner.Migrations
{
    public class DinerContextDesignTimeDbContextFactory : IDesignTimeDbContextFactory<DinerContext>
    {
        public DinerContext CreateDbContext(string[] args)
        {
            DbContextOptionsBuilder<DinerContext> opts = new DbContextOptionsBuilder<DinerContext>()
                .UseSqlServer("Data Source=localhost\\sqlexpress;Initial Catalog=Bonnies_Diner;Integrated Security=SSPI",
                    x => x.MigrationsAssembly(typeof(DinerContextDesignTimeDbContextFactory).Assembly.FullName));
            return new DinerContext(opts.Options);
        }
    }
}
