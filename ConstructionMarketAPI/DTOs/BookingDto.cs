namespace ConstructionMarketAPI.DTOs
{
    public class BookingDto
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string UserName { get; set; }
        public int ProfessionalServiceId { get; set; }
        public string ServiceName { get; set; }
        public string ProfessionalName { get; set; }
        public DateTime RequestedDate { get; set; }
        public DateTime ScheduledDate { get; set; }
        public string Status { get; set; }
        public string Notes { get; set; }
    }

    public class BookingCreateDto
    {
        public int UserId { get; set; }
        public int ProfessionalServiceId { get; set; }
        public DateTime RequestedDate { get; set; }
        public string Notes { get; set; }
    }
}