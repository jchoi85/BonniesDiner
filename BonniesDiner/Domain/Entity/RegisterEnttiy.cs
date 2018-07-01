using System;
using System.Collections.Generic;

namespace BonniesDiner.Domain.Entity
{
    public class RegisterEntity
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string Username { get; set; }

        public RegisterEntity(string email, string password, string username)
        {
            Email = email;
            Password = password;
            Username = username;
        }
    }
}