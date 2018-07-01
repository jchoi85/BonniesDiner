using System;
using System.Collections.Generic;

namespace BonniesDiner.Domain.Entity
{
    public class RegisterEntity
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string Username { get; set; }
        public bool IsAdmin { get; set; }

    }
}