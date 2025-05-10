public class Review
{
    public int Id { get; set; }

    public int UserId { get; set; }
    public User User { get; set; } = null!;

    public int ProfessionalId { get; set; }
    public Professional Professional { get; set; } = null!;

    public int? BookingId { get; set; } // Opcional, si viene de una contratación
    public Booking? Booking { get; set; }

    public int Rating { get; set; }
    public string Comment { get; set; } = null!;
    public string? Project { get; set; }
    public DateTime Date { get; set; }
}