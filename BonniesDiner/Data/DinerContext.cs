using System.Reflection;
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

            var user = modelBuilder.Entity<UserEntity>();
            user
                .HasKey(x => x.Id);
            user
                .Property(x => x.Email)
                .HasColumnType("varchar(64)")
                .IsRequired();
            user
                .Property(x => x.PasswordHash)
                .HasColumnType("varchar(128)")
                .IsRequired();
            user
                .Property(x => x.PasswordSalt)
                .HasColumnType("varchar(128)")
                .IsRequired();
            user
                .Property(x => x.Username)
                .HasColumnType("varchar(32)")
                .IsRequired();

            var menu = modelBuilder.Entity<MenuEntity>();
            menu
                .HasKey(x => x.Id);
            menu
                .Property(x => x.ItemName)
                .HasColumnType("varchar(32)")
                .IsRequired();
            menu
                .Property(x => x.Description)
                .HasColumnType("varchar(200)");
            menu
                .Property(x => x.Price)
                .HasColumnType("money")
                .IsRequired();

            var order = modelBuilder.Entity<OrderEntity>();
            order
                .HasKey(x => x.Id);
            order
                .Property(x => x.StatusNew)
                .HasColumnType("datetime2(7)")
                .IsRequired();
            order
                .Property(x => x.StatusCancelled)
                .HasColumnType("datetime2(7)")
                .IsRequired();
            order
                .Property(x => x.StatusFulfilled)
                .HasColumnType("datetime2(7)")
                .IsRequired();

            var orderLine = modelBuilder.Entity<OrderLineItemEntity>();
            orderLine
                .HasKey(x => x.Id);
            orderLine
                .Property(x => x.Quantity)
                .HasColumnType("int")
                .IsRequired();
        }

        public DbSet<UserEntity> User { get; set; }
        public DbSet<MenuEntity> Menu { get; set; }
        public DbSet<OrderLineItemEntity> OrderLineItem { get; set; }
        public DbSet<OrderEntity> Order { get; set; }
    }
}