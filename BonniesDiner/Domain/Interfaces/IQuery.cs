using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace BonniesDiner.Domain.Interfaces
{
    public interface IQuery<TEntity, in TContext> where TEntity : class where TContext : DbContext
    {
        Task<TEntity> Execute(TContext context, CancellationToken cancellationToken);
    }
}
