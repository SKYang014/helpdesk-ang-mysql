using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend_helpdesk.Controllers
{
    [Route("ticket")]
    [ApiController]
    public class TicketController : ControllerBase
    {
        [HttpGet]
        public List<Ticket> GetAll()
        {
            return Ticket.GetAll();
        }

        // (R)ead one

        [HttpGet("{id}")]
        public Ticket Get(string id)
        {
            return Ticket.Get(id);
        }

        // (C)reate
        [HttpPost]
        public Ticket Save(Ticket data)
        {
            return Ticket.Save(data);
        }

        [HttpDelete("{id}")]
        public ApiResponse Delete(int id)
        {
            Ticket.Delete(id);
            return new ApiResponse() { status = "ok" };
        }

        // (U)pdate
        [HttpPut]
        public ApiResponse Update(Ticket data)
        {
            Ticket.Update(data);
            return new ApiResponse() { status = "ok" };
        }

    }
}
