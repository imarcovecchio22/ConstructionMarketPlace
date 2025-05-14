using System;

namespace ConstructionMarketAPI.DTOs
{
    public class ReviewDto
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string UserName { get; set; }
        public int ProfessionalId { get; set; }
        public string ProfessionalName { get; set; }
        public int? BookingId { get; set; }
        public decimal Rating { get; set; }
        public string Comment { get; set; }
        public string Project { get; set; }
        public DateTime Date { get; set; }
    }

    public class ReviewCreateDto
    {
        public int UserId { get; set; }
        public int ProfessionalId { get; set; }
        public int? BookingId { get; set; }
        public decimal Rating { get; set; }
        public string Comment { get; set; }
        public string Project { get; set; }
    }
}