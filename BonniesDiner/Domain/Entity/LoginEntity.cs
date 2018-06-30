using System;

namespace BonniesDiner.Domain.Entity
{
    public class LoginEntity
    {
        public int Id { get; protected set; }
        public string PutWallId { get; protected set; }
        public string Username { get; protected set; }

        public LoginEntity(string putWallId, string username)
        {
            if (string.IsNullOrWhiteSpace(putWallId))
                throw new ArgumentException($"{nameof(PutWallId)} required");
            if (string.IsNullOrWhiteSpace(username))
                throw new ArgumentException($"{nameof(Username)} required");
            PutWallId = putWallId;
            Username = username;
        }
        public void UpdateUserLoggedIn(string username)
        {
            if (string.IsNullOrWhiteSpace(username))
                throw new ArgumentException($"{nameof(Username)} required");

            Username = username;
        }
        public void Logout()
        {
            Username = "UNASSIGNED";
        }
    }
}