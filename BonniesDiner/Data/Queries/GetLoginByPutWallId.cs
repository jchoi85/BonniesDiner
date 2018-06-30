using System;
using System.Threading;
using System.Threading.Tasks;
using BonniesDiner.Domain.Entity;
using BonniesDiner.Domain.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace BonniesDiner.Data.Queries
{
    public class GetLoginByPutWallId : IQuery<LoginEntity, DinerContext>
    {
        private string WallId { get; }
        public GetLoginByPutWallId(string wallId)
        {
            if (string.IsNullOrEmpty(wallId)) throw new ArgumentException($"{nameof(WallId)} required");
            WallId = wallId;
        }
        public Task<LoginEntity> Execute(DinerContext context, CancellationToken cancellationToken)
        {
            return context.Login.FirstOrDefaultAsync(x => x.PutWallId == WallId, cancellationToken);
        }
    }
}