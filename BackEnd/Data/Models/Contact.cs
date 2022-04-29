using System.ComponentModel.DataAnnotations;

namespace ContactBackEnd.Data.Entities
{
    public class Contact
    {
        [Key]
        public int ContactId { get; set; }

        [Required(ErrorMessage = "The name is required")]
        [StringLength(15, ErrorMessage = "{0} The name must be {2} and {1} chars", MinimumLength = 2)]
        public string Name { get; set; }

        [Required(ErrorMessage = "The last name is required")]
        [StringLength(15, ErrorMessage = "{0} The last name must be {2} and {1} chars ", MinimumLength = 2)]
        public string LastName { get; set; }

        [Required(ErrorMessage = "The email is required")]
        [EmailAddress]
        public string Email { get; set; }

        public string Phone { get; set; }

        [DataType(DataType.Date)]
        [Display(Name = "Creation Date")]
        public DateTime CreatedDate { get; set; } = DateTime.Now;

    }
}
