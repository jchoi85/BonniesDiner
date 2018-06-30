using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace BonniesDiner.Domain.Interfaces
{
    public interface ICommand<in T> where T : DbContext
    {
        Task Execute(T context, CancellationToken cancellationToken);
    }
}