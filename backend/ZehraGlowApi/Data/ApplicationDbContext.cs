using Microsoft.EntityFrameworkCore;
using ZehraGlowApi.Models;

namespace ZehraGlowApi.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(
            DbContextOptions<ApplicationDbContext> options
        ) : base(options)
        {
        }

        public DbSet<Booking> Bookings { get; set; }
    }
}