using Microsoft.VisualBasic;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Agenda.Api.Models
{
    public class Contact
    {
        [Key]
        public int ContactId { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(30)")]
        public string FirstName { get; set; }
        [Column(TypeName = "nvarchar(30)")]
        public string LastName { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(30)")]
        public string Telephone { get; set; }
        [Column(TypeName = "datetime2")]
        public DateTime DateUpdate { get; set; }
    }
}
