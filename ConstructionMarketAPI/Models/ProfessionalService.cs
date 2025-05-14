using System.Collections.Generic;

namespace ContructionMarketAPI.Models
{

public class ProfessionalService
{
        public int Id { get; set; }
        public int ProfessionalId { get; set; }
        public int ServiceId { get; set; }
        public decimal Price { get; set; }
        public int Duration { get; set; } // Asumiendo que es en minutos

        // Relaciones
        public virtual Professional Professional { get; set; }
        public virtual Service Service { get; set; }
        public virtual ICollection<Booking> Bookings { get; set; }

        public ProfessionalService()
        {
            Bookings = new HashSet<Booking>();
        }
}
}