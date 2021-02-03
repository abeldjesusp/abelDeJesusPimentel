namespace apiAbelDeJesus.Models
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class Model1 : DbContext
    {
        public Model1()
            : base("name=Model11")
        {
        }

        public virtual DbSet<departamentos> departamentos { get; set; }
        public virtual DbSet<usuarios> usuarios { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<departamentos>()
                .Property(e => e.codigo)
                .IsFixedLength();

            modelBuilder.Entity<usuarios>()
                .Property(e => e.cedula)
                .IsFixedLength();

            modelBuilder.Entity<usuarios>()
                .Property(e => e.genero)
                .IsFixedLength();

            modelBuilder.Entity<usuarios>()
                .Property(e => e.departamento)
                .IsFixedLength();
        }
    }
}
