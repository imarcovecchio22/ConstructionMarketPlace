public class Booking
{
    public int Id { get; set; }

    public int UserId { get; set; }
    public User User { get; set; } = null!;

    public int ProfessionalServiceId { get; set; }
    public ProfessionalService ProfessionalService { get; set; } = null!;

    public DateTime RequestedDate { get; set; }
    public DateTime? ScheduledDate { get; set; }
    public string Status { get; set; } = "Pendiente"; // Pendiente, Aceptado, Cancelado, Completado

    public string? Notes { get; set; }

    public Review? Review { get; set; } // Opcional
}