using ContactBackEnd.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace ContactBackEnd.Data
{
    public class ApplicationDbContext : DbContext
    {
        // Give us set reference for non nullable DbContext .NET 6 case
        public DbSet<Contact> Contacts => Set<Contact>();
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
    }
}
