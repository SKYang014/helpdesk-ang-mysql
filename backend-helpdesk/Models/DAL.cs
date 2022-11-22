using Dapper.Contrib.Extensions;
using MySql.Data.MySqlClient;

namespace backend_helpdesk
{
    public class DAL
    {
        // Connection stuff

        public static MySqlConnection DB;

        // Drink table methods

        public static IEnumerable<Ticket> GetAllTickets()
        {
            // For practice: We don't actually need to have it return a list.
            return DB.GetAll<Ticket>();
        }

        public static Ticket AddTicket(Ticket ticket)
        {
            // Insert just returns the ID...
            DB.Insert(ticket);
            // So let's return the whole object. Insert fills in the object's id for us.
            return ticket;
        }

        // For this example, we'll have Delete and Update just return nothing.

        public static void Delete(int id)
        {
            DB.Delete(new Ticket() { id = id });
        }

        public static void Update(Ticket ticket)
        {
            DB.Update(ticket);
        }
    }
}
