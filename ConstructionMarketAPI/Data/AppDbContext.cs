using Microsoft.EntityFrameworkCore;



public class AppDbContext : DbContext
{
    public DbSet<User> Users { get; set; }
    public DbSet<Professional> Professionals { get; set; }
    public DbSet<Service> Services { get; set; }
    public DbSet<Category> Categories { get; set; }
    public DbSet<ProfessionalService> ProfessionalServices { get; set; }
    public DbSet<Booking> Bookings { get; set; }
    public DbSet<Review> Reviews { get; set; }

    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) {}

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
    // Professional -> User
        modelBuilder.Entity<Professional>()
        .HasOne(p => p.User)
        .WithMany(u => u.Professionals)
        .HasForeignKey(p => p.UserId)
        .OnDelete(DeleteBehavior.Restrict);

    // Service -> Category
        modelBuilder.Entity<Service>()
        .HasOne(s => s.Category)
        .WithMany()
        .HasForeignKey(s => s.CategoryId)
        .OnDelete(DeleteBehavior.Cascade);

    // ProfessionalService -> Professional
        modelBuilder.Entity<ProfessionalService>()
        .HasOne(ps => ps.Professional)
        .WithMany(p => p.Services)
        .HasForeignKey(ps => ps.ProfessionalId);
    // ProfessionalService -> Service
        modelBuilder.Entity<ProfessionalService>()
        .HasOne(ps => ps.Service)
        .WithMany(s => s.ProfessionalServices)
        .HasForeignKey(ps => ps.ServiceId);

    // Booking -> User
        modelBuilder.Entity<Booking>()
        .HasOne(b => b.User)
        .WithMany()
        .HasForeignKey(b => b.UserId)
        .OnDelete(DeleteBehavior.Cascade);

    // Booking -> ProfessionalService
        modelBuilder.Entity<Booking>()
        .HasOne(b => b.ProfessionalService)
        .WithMany(ps => ps.Bookings)
        .HasForeignKey(b => b.ProfessionalServiceId)
        .OnDelete(DeleteBehavior.Cascade);

    // Review -> User
        modelBuilder.Entity<Review>()
        .HasOne(r => r.User)
        .WithMany()
        .HasForeignKey(r => r.UserId)
        .OnDelete(DeleteBehavior.Cascade);

    // Review -> Professional
        modelBuilder.Entity<Review>()
        .HasOne(r => r.Professional)
        .WithMany()
        .HasForeignKey(r => r.ProfessionalId)
        .OnDelete(DeleteBehavior.Cascade);

    // Review -> Booking (opcional 1:1)
        modelBuilder.Entity<Review>()
        .HasOne(r => r.Booking)
        .WithOne(b => b.Review)
        .HasForeignKey<Review>(r => r.BookingId)
        .IsRequired(false)
        .OnDelete(DeleteBehavior.SetNull);

    // ProfesionalService Price -> evitar truncamiento
        modelBuilder.Entity<ProfessionalService>()
        .Property(p => p.Price)
        .HasPrecision(10, 2); // ajustá si necesitás otra precisión

        base.OnModelCreating(modelBuilder);
    }
}