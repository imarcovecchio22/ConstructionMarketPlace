using Microsoft.EntityFrameworkCore;
using ConstructionMarketAPI.Models;


namespace ConstructionMarketAPI.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Professional> Professionals { get; set; }
        public DbSet<Service> Services { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<ProfessionalService> ProfessionalServices { get; set; }
        public DbSet<Booking> Bookings { get; set; }
        public DbSet<Review> Reviews { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configuración de relaciones

            // Configuración de propiedades decimales
            modelBuilder.Entity<Professional>()
                .Property(p => p.Rating)
                .HasPrecision(3, 2); // Por ejemplo: 4.85 (3 dígitos en total, 2 decimales)

            modelBuilder.Entity<ProfessionalService>()
                .Property(ps => ps.Price)
                .HasPrecision(10, 2); // Por ejemplo: 1234567.89 (10 dígitos en total, 2 decimales)

            modelBuilder.Entity<Review>()
                .Property(r => r.Rating)
                .HasPrecision(3, 2); // Por ejemplo: 4.85 (3 dígitos en total, 2 decimales)

            // User - Booking (1:N)
            modelBuilder.Entity<Booking>()
                .HasOne(b => b.User)
                .WithMany(u => u.Bookings)
                .HasForeignKey(b => b.UserId)
                .OnDelete(DeleteBehavior.Restrict);

            // User - Review (1:N)
            modelBuilder.Entity<Review>()
                .HasOne(r => r.User)
                .WithMany(u => u.Reviews)
                .HasForeignKey(r => r.UserId)
                .OnDelete(DeleteBehavior.Restrict);

            // Professional - ProfessionalService (1:N)
            modelBuilder.Entity<ProfessionalService>()
                .HasOne(ps => ps.Professional)
                .WithMany(p => p.ProfessionalServices)
                .HasForeignKey(ps => ps.ProfessionalId)
                .OnDelete(DeleteBehavior.Cascade);

            // Professional - Review (1:N)
            modelBuilder.Entity<Review>()
                .HasOne(r => r.Professional)
                .WithMany(p => p.Reviews)
                .HasForeignKey(r => r.ProfessionalId)
                .OnDelete(DeleteBehavior.Restrict);

            // Service - ProfessionalService (1:N)
            modelBuilder.Entity<ProfessionalService>()
                .HasOne(ps => ps.Service)
                .WithMany(s => s.ProfessionalServices)
                .HasForeignKey(ps => ps.ServiceId)
                .OnDelete(DeleteBehavior.Cascade);

            // Category - Service (1:N)
            modelBuilder.Entity<Service>()
                .HasOne(s => s.Category)
                .WithMany(c => c.Services)
                .HasForeignKey(s => s.CategoryId)
                .OnDelete(DeleteBehavior.Cascade);

            // ProfessionalService - Booking (1:N)
            modelBuilder.Entity<Booking>()
                .HasOne(b => b.ProfessionalService)
                .WithMany(ps => ps.Bookings)
                .HasForeignKey(b => b.ProfessionalServiceId)
                .OnDelete(DeleteBehavior.Cascade);

            // Booking - Review (1:1 opcional)
            modelBuilder.Entity<Review>()
                .HasOne(r => r.Booking)
                .WithOne(b => b.Review)
                .HasForeignKey<Review>(r => r.BookingId)
                .IsRequired(false)
                .OnDelete(DeleteBehavior.SetNull);
        }
    }
}