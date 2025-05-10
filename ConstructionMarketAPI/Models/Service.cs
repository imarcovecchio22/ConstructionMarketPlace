public class Service
{
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public string? Description { get; set; }

    public int CategoryId { get; set; }
    public Category Category { get; set; } = null!;

    public ICollection<ProfessionalService> ProfessionalServices { get; set; } = new List<ProfessionalService>();
}