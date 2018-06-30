using BonniesDiner.Domain.Entity;
using Microsoft.EntityFrameworkCore;

namespace BonniesDiner.Data
{
    public class DinerContext : DbContext
    {
        public DinerContext(DbContextOptions<DinerContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            var login = modelBuilder.Entity<LoginEntity>();
            login
                .HasKey(x => x.Id);
            login
                .Property(x => x.PutWallId)
                .HasColumnType("varchar(32)")
                .IsRequired();
            login
                .Property(x => x.Username)
                .HasColumnType("varchar(32)")
                .IsRequired();
        }

        public DbSet<LoginEntity> Login { get; set; }
    }
}
