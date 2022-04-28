using System.ComponentModel.DataAnnotations;

namespace ContactBackEnd.Data.Entities
{
    public class Contact
    {
        [Key]
        public int ContactId { get; set; }

        [Required(ErrorMessage = "The name is required")]
        [StringLength(20, ErrorMessage = "{0} The name must be {2} and {1} ", MinimumLength = 5)]
        public string Name { get; set; }
        public DateTime BirthDay { get; set; }
        [Required(ErrorMessage = "The email is required")]
        public string Email { get; set; }
        [Required(ErrorMessage = "The phone number is required")]
        public string PhoneNumber { get; set; }
        [DataType(DataType.Date)]
        [Display(Name = "Creation Date")]
        public DateTime CreatedDate { get; set; } = DateTime.Now;

    }
}
