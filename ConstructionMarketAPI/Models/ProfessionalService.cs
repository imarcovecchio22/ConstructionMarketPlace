public class ProfessionalService
{
    public int Id { get; set; }

    public int ProfessionalId { get; set; }
    public Professional Professional { get; set; } = null!;

    public int ServiceId { get; set; }
    public Service Service { get; set; } = null!;

    public decimal Price { get; set; }
    public string Duration { get; set; } = null!;

    public ICollection<Booking> Bookings { get; set; } = new List<Booking>();
}