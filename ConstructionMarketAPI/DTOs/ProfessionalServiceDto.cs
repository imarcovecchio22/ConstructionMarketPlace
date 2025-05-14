namespace ConstructionMarketAPI.DTOs
{
    public class ProfessionalServiceDto
    {
        public int Id { get; set; }
        public int ProfessionalId { get; set; }
        public string ProfessionalName { get; set; }
        public int ServiceId { get; set; }
        public string ServiceName { get; set; }
        public decimal Price { get; set; }
        public int Duration { get; set; }
    }
}