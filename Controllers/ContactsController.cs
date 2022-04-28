using ContactBackEnd.Data;
using ContactBackEnd.Data.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ContactBackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactsController : ControllerBase
    {
        // Add a readonly for DbContext Entities
        private readonly ApplicationDbContext _context;
        public ContactsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/<ContactsController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Contact>>> GetAll()
        {
            return await _context.Contacts.ToListAsync();
        }

        // GET api/<ContactsController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<ContactsController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<ContactsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ContactsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
