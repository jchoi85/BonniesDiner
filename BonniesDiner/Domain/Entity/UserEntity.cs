using System;
using System.Collections.Generic;

namespace BonniesDiner.Domain.Entity
{
    public class UserEntity
    {
        public int Id { get; protected set; }
        public string Email  { get; protected set; }
        public List<OrderEntity> Orders { get; protected set; } = new List<OrderEntity>();
        public string PasswordSalt { get; protected set; }
        public string PasswordHash { get; protected set; }
        public string Username { get; protected set; }
        public bool IsAdmin { get; set; }

        public UserEntity(string email, string passwordSalt, string passwordHash, string username, bool isAdmin)
        {
            if (string.IsNullOrWhiteSpace(email))
                throw new ArgumentException($"{nameof(Email)} required");
            if (string.IsNullOrWhiteSpace(passwordSalt))
                throw new ArgumentException($"{nameof(PasswordSalt)} required");
            if (string.IsNullOrWhiteSpace(passwordHash))
                throw new ArgumentException($"{nameof(PasswordHash)} required");
            if (string.IsNullOrWhiteSpace(username))
                throw new ArgumentException($"{nameof(Username)} required");

            Email = email;
            PasswordSalt = passwordSalt;
            PasswordHash = passwordHash;
            Username = username;
            IsAdmin = isAdmin;
        }

        public void AddOrder(OrderEntity order)
        {
            Orders.Add(order);
        }
    }
}