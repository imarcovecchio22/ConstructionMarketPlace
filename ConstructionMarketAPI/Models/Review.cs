using System.Collections.Generic;

namespace ContructionMarketAPI.Models
{
public class Review
{
    public int Id { get; set; }
        public int UserId { get; set; }
        public int ProfessionalId { get; set; }
        public int? BookingId { get; set; } // Opcional, puede ser nulo
        public decimal Rating { get; set; }
        public string Comment { get; set; }
        public string Project { get; set; }
        public DateTime Date { get; set; }

        // Relaciones
        public virtual User User { get; set; }
        public virtual Professional Professional { get; set; }
        public virtual Booking Booking { get; set; } // Opcional
}
}