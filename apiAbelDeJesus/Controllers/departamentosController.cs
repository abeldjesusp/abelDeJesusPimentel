using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using apiAbelDeJesus.Models;

namespace apiAbelDeJesus.Controllers
{
    public class departamentosController : ApiController
    {
        private Model1 db = new Model1();

        // GET: api/departamentos
        public IQueryable<departamentos> Getdepartamentos()
        {
            return db.departamentos;
        }

        // GET: api/departamentos/5
        [ResponseType(typeof(departamentos))]
        public IHttpActionResult Getdepartamentos(string id)
        {
            departamentos departamentos = db.departamentos.Find(id);
            if (departamentos == null)
            {
                return NotFound();
            }

            return Ok(departamentos);
        }

        // PUT: api/departamentos/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putdepartamentos(string id, departamentos departamentos)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != departamentos.codigo)
            {
                return BadRequest();
            }

            db.Entry(departamentos).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!departamentosExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/departamentos
        [ResponseType(typeof(departamentos))]
        public IHttpActionResult Postdepartamentos(departamentos departamentos)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.departamentos.Add(departamentos);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (departamentosExists(departamentos.codigo))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = departamentos.codigo }, departamentos);
        }

        // DELETE: api/departamentos/5
        [ResponseType(typeof(departamentos))]
        public IHttpActionResult Deletedepartamentos(string id)
        {
            departamentos departamentos = db.departamentos.Find(id);
            if (departamentos == null)
            {
                return NotFound();
            }

            db.departamentos.Remove(departamentos);
            db.SaveChanges();

            return Ok(departamentos);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool departamentosExists(string id)
        {
            return db.departamentos.Count(e => e.codigo == id) > 0;
        }
    }
}