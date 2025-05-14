using System.Collections.Generic;

namespace ContructionMarketAPI.Models
{
    public class User
    {
    public int Id { get; set; }
    public string FullName { get; set; } = null!;
    public string Email { get; set; } = null!;
    public string PasswordHash { get; set; } = null!;
    public string? Location { get; set; }

     // Relaciones
    public virtual ICollection<Booking> Bookings { get; set; }
    public virtual ICollection<Review> Reviews { get; set; }

    public User()
    {
        Bookings = new HashSet<Booking>();
        Reviews = new HashSet<Review>();
    }

    }
}