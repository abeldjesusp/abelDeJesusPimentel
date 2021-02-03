namespace apiAbelDeJesus.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class departamentos
    {
        [Key]
        [StringLength(5)]
        public string codigo { get; set; }

        [Required]
        [StringLength(100)]
        public string nombre { get; set; }
    }
}
