using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend_helpdesk.Controllers
{
    [Route("ticket")]
    [ApiController]
    public class TicketController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<Ticket> GetAll()
        {
            return DAL.GetAllTickets();
        }

        [HttpPost]
        public Ticket Add(Ticket ticket)
        {
            return DAL.AddTicket(ticket);
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            DAL.Delete(id);
        }

        [HttpPut]
        public void Update(Ticket ticket)
        {
            DAL.Update(ticket);
        }

    }
}
