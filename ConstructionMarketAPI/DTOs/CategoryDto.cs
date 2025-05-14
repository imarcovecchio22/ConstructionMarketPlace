namespace ConstructionMarketAPI.DTOs
{
    public class CategoryDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
    }

    public class CategoryWithServicesDto : CategoryDto
    {
        public List<ServiceDto> Services { get; set; }
    }
}