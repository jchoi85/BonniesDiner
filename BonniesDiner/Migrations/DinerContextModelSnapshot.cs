﻿// <auto-generated />
using System;
using BonniesDiner.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace BonniesDiner.Migrations
{
    [DbContext(typeof(DinerContext))]
    partial class DinerContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.1-rtm-30846")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("BonniesDiner.Domain.Entity.MenuEntity", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Category");

                    b.Property<string>("Description")
                        .HasColumnType("varchar(64)");

                    b.Property<string>("ItemName")
                        .IsRequired()
                        .HasColumnType("varchar(32)");

                    b.Property<decimal>("Price")
                        .HasColumnType("money");

                    b.Property<int>("TimesOrdered");

                    b.HasKey("Id");

                    b.ToTable("Menu");
                });

            modelBuilder.Entity("BonniesDiner.Domain.Entity.OrderEntity", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<decimal>("OrderTotal");

                    b.Property<DateTime>("StatusCancelled");

                    b.Property<DateTime>("StatusFulfilled");

                    b.Property<DateTime>("StatusNew");

                    b.Property<int?>("UserEntityId");

                    b.HasKey("Id");

                    b.HasIndex("UserEntityId");

                    b.ToTable("OrderEntity");
                });

            modelBuilder.Entity("BonniesDiner.Domain.Entity.OrderLineItemEntity", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("ItemId");

                    b.Property<int?>("OrderEntityId");

                    b.Property<int>("Quantity")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("ItemId");

                    b.HasIndex("OrderEntityId");

                    b.ToTable("OrderLineItem");
                });

            modelBuilder.Entity("BonniesDiner.Domain.Entity.UserEntity", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("varchar(64)");

                    b.Property<string>("PasswordHash")
                        .IsRequired()
                        .HasColumnType("varchar(128)");

                    b.Property<string>("PasswordSalt")
                        .IsRequired()
                        .HasColumnType("varchar(128)");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasColumnType("varchar(32)");

                    b.HasKey("Id");

                    b.ToTable("User");
                });

            modelBuilder.Entity("BonniesDiner.Domain.Entity.OrderEntity", b =>
                {
                    b.HasOne("BonniesDiner.Domain.Entity.UserEntity")
                        .WithMany("Orders")
                        .HasForeignKey("UserEntityId");
                });

            modelBuilder.Entity("BonniesDiner.Domain.Entity.OrderLineItemEntity", b =>
                {
                    b.HasOne("BonniesDiner.Domain.Entity.MenuEntity", "Item")
                        .WithMany()
                        .HasForeignKey("ItemId");

                    b.HasOne("BonniesDiner.Domain.Entity.OrderEntity")
                        .WithMany("LineItems")
                        .HasForeignKey("OrderEntityId");
                });
#pragma warning restore 612, 618
        }
    }
}
