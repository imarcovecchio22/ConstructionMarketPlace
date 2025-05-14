using System.Collections.Generic;

namespace ContructionMarketAPI.Models
{

    public class Professional
    {
    public int Id { get; set; }
    public string FullName { get; set; }
        public string Bio { get; set; }
        public string Location { get; set; }
        public decimal Rating { get; set; }

        // Relaciones
        public virtual ICollection<ProfessionalService> ProfessionalServices { get; set; }
        public virtual ICollection<Review> Reviews { get; set; }

        public Professional()
        {
            ProfessionalServices = new HashSet<ProfessionalService>();
            Reviews = new HashSet<Review>();
        }
    }
}