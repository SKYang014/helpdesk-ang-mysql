using MySql.Data.MySqlClient;
using Dapper;
using Dapper.Contrib.Extensions;

namespace backend_helpdesk
{
    [Table("Ticket")]
    public class Ticket
    {
        [Key]
        public int id { get; set; }
        public string title { get; set; }
        public string description { get; set; }
        public string submittedBy { get; set; }
        public bool bookmarked { get; set; }
        public bool resolved { get; set; }
        public string? resolvedInfo { get; set; }
        public string? resolvedBy  { get; set;}

       
    }
}
