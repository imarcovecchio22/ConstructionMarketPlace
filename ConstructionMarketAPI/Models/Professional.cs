public class Professional
{
    public int Id { get; set; }
     public int UserId { get; set; }  // Clave foránea explícita
    public User User { get; set; } = null!;
    public string FullName { get; set; } = null!;
    public string Bio { get; set; } = null!;
    public string? Location { get; set; }
    public double Rating { get; set; }

    public ICollection<ProfessionalService> Services { get; set; } = new List<ProfessionalService>();
    public ICollection<Review> Reviews { get; set; } = new List<Review>();
}