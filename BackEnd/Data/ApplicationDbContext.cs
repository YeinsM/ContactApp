using ContactBackEnd.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace ContactBackEnd.Data
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Contact> Contacts { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
    }
}
