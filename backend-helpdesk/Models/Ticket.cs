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

       
    }
}
