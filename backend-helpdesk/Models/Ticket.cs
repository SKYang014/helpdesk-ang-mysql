using MySql.Data.MySqlClient;
using Dapper;
using Dapper.Contrib.Extensions;

namespace backend_helpdesk
{
    [Table("Ticket")]
    public class Ticket
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string SubmittedBy { get; set; }
        public bool Bookmarked { get; set; }
        public bool Resolved { get; set; }
        public string ResolvedInfo { get; set; }

        public string? ResolvedBy  { get; set;}

        public static MySqlConnection DB = new MySqlConnection("Server=127.0.0.1;Database=helpdesk;Uid=root;Pwd=asdf;");

        public static List<Ticket> GetAll()
        {
            return DB.GetAll<Ticket>().ToList();
        }
        public static Ticket Get(string id)
        {
            return DB.Get<Ticket>(id);
        }

        public static Ticket Save(Ticket data)
        {
            DB.Insert(data);
            return data;
        }

        public static void Delete(int id)
        {
            Ticket data = new Ticket() { Id = id };
            DB.Delete(data);
        }


        public static void Update(Ticket data)
        {
            DB.Update(data);
        }
    }
}
