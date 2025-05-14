namespace ConstructionMarketAPI.DTOs
{
    public class ProfessionalDto
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public string Bio { get; set; }
        public string Location { get; set; }
        public decimal Rating { get; set; }
    }

    public class ProfessionalDetailDto : ProfessionalDto
    {
        public List<ProfessionalServiceDto> Services { get; set; }
        public List<ReviewDto> Reviews { get; set; }
    }
}