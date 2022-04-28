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
        public async Task<ActionResult<Contact>> GetById(int id)
        {
            var contact = await _context.Contacts.FindAsync(id);
            if (contact == null)
                return NotFound();
            return Ok(contact);
        }

        // POST api/<ContactsController>
        [HttpPost]
        public async Task<ActionResult<Contact>> Post([FromBody] Contact contact)
        {
            _context.Contacts.Add(contact);
            await _context.SaveChangesAsync();
            //return Ok();
            return CreatedAtAction(nameof(GetById), new { id = contact.ContactId }, contact);
        }

        // PUT api/<ContactsController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Contact contact)
        {
            try
            {
                var contactToUpdate = _context.Contacts.FirstOrDefault(c => c.ContactId == id);
                if (contactToUpdate == null)
                    return NotFound();
                else
                {
                    contactToUpdate.Name = contact.Name;
                    contactToUpdate.BirthDay = contact.BirthDay;
                    contactToUpdate.Email = contact.Email;
                    contactToUpdate.PhoneNumber = contact.PhoneNumber;

                    await _context.SaveChangesAsync();

                    return Ok(contactToUpdate);

                }

            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        // DELETE api/<ContactsController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var contact = await _context.Contacts.FindAsync(id);
            if(contact == null)
                return NotFound();

            _context.Contacts.Remove(contact);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
