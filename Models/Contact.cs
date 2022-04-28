using System.ComponentModel.DataAnnotations;

namespace ContactBackEnd.Data.Entities
{
    public class Contact
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "The name is required")]
        [StringLength(10, ErrorMessage = "{0} The name must be {2} and {1} ", MinimumLength = 5)]
        public string? Name { get; set; }
        public byte Gender { get; set; }
        public DateTime BirthDay { get; set; }
        [DataType(DataType.Date)]
        [Display(Name = "Creation Date")]
        public DateTime CreatedDate { get; set; }

    }
}
