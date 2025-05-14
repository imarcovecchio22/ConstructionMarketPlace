using System.Collections.Generic;

namespace ContructionMarketAPI.Models
{
public class Booking
{
        public int Id { get; set; }
        public int UserId { get; set; }
        public int ProfessionalServiceId { get; set; }
        public DateTime RequestedDate { get; set; }
        public DateTime ScheduledDate { get; set; }
        public string Status { get; set; } // Podría ser un enum
        public string Notes { get; set; }

        // Relaciones
        public virtual User User { get; set; }
        public virtual ProfessionalService ProfessionalService { get; set; }
        public virtual Review Review { get; set; } // Relación opcional 1:1
}
}