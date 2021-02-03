namespace apiAbelDeJesus.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class usuarios
    {
        public int id { get; set; }

        [Required]
        [StringLength(50)]
        public string nombres { get; set; }

        [Required]
        [StringLength(50)]
        public string apellidos { get; set; }

        [Required]
        [StringLength(11)]
        public string cedula { get; set; }

        [Required]
        [StringLength(1)]
        public string genero { get; set; }

        [Column(TypeName = "date")]
        public DateTime fecha_nacimiento { get; set; }

        [Required]
        [StringLength(5)]
        public string departamento { get; set; }

        [Required]
        [StringLength(100)]
        public string cargo { get; set; }

        [Required]
        [StringLength(100)]
        public string supervisor_inmediato { get; set; }
    }
}
