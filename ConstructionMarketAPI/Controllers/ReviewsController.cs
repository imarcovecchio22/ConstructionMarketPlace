using ConstructionMarketAPI.Data;
using ConstructionMarketAPI.DTOs;
using ConstructionMarketAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ConstructionMarketAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ReviewsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Reviews
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ReviewDto>>> GetReviews()
        {
            var reviews = await _context.Reviews
                .Include(r => r.User)
                .Include(r => r.Professional)
                .Select(r => new ReviewDto
                {
                    Id = r.Id,
                    UserId = r.UserId,
                    UserName = r.User.FullName,
                    ProfessionalId = r.ProfessionalId,
                    ProfessionalName = r.Professional.FullName,
                    BookingId = r.BookingId,
                    Rating = r.Rating,
                    Comment = r.Comment,
                    Project = r.Project,
                    Date = r.Date
                })
                .ToListAsync();

            return Ok(reviews);
        }

        // GET: api/Reviews/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ReviewDto>> GetReview(int id)
        {
            var review = await _context.Reviews
                .Include(r => r.User)
                .Include(r => r.Professional)
                .Where(r => r.Id == id)
                .Select(r => new ReviewDto
                {
                    Id = r.Id,
                    UserId = r.UserId,
                    UserName = r.User.FullName,
                    ProfessionalId = r.ProfessionalId,
                    ProfessionalName = r.Professional.FullName,
                    BookingId = r.BookingId,
                    Rating = r.Rating,
                    Comment = r.Comment,
                    Project = r.Project,
                    Date = r.Date
                })
                .FirstOrDefaultAsync();

            if (review == null)
            {
                return NotFound();
            }

            return Ok(review);
        }

        // GET: api/Reviews/Professional/5
        [HttpGet("Professional/{professionalId}")]
        public async Task<ActionResult<IEnumerable<ReviewDto>>> GetReviewsByProfessional(int professionalId)
        {
            var reviews = await _context.Reviews
                .Include(r => r.User)
                .Include(r => r.Professional)
                .Where(r => r.ProfessionalId == professionalId)
                .Select(r => new ReviewDto
                {
                    Id = r.Id,
                    UserId = r.UserId,
                    UserName = r.User.FullName,
                    ProfessionalId = r.ProfessionalId,
                    ProfessionalName = r.Professional.FullName,
                    BookingId = r.BookingId,
                    Rating = r.Rating,
                    Comment = r.Comment,
                    Project = r.Project,
                    Date = r.Date
                })
                .ToListAsync();

            return Ok(reviews);
        }

        // POST: api/Reviews
        [HttpPost]
        public async Task<ActionResult<ReviewDto>> CreateReview(ReviewCreateDto reviewDto)
        {
            var professional = await _context.Professionals.FindAsync(reviewDto.ProfessionalId);
            if (professional == null)
            {
                return BadRequest("El profesional no existe");
            }

            var user = await _context.Users.FindAsync(reviewDto.UserId);
            if (user == null)
            {
                return BadRequest("El usuario no existe");
            }

            // Verificar si el BookingId existe si se proporciona
            if (reviewDto.BookingId.HasValue)
            {
                var booking = await _context.Bookings.FindAsync(reviewDto.BookingId.Value);
                if (booking == null)
                {
                    return BadRequest("La reserva no existe");
                }
            }

            var review = new Review
            {
                UserId = reviewDto.UserId,
                ProfessionalId = reviewDto.ProfessionalId,
                BookingId = reviewDto.BookingId,
                Rating = reviewDto.Rating,
                Comment = reviewDto.Comment,
                Project = reviewDto.Project,
                Date = DateTime.Now
            };

            _context.Reviews.Add(review);
            await _context.SaveChangesAsync();

            // Actualizar el rating promedio del profesional
            var professionalReviews = await _context.Reviews
                .Where(r => r.ProfessionalId == reviewDto.ProfessionalId)
                .ToListAsync();

            if (professionalReviews.Any())
            {
                professional.Rating = professionalReviews.Average(r => r.Rating);
                await _context.SaveChangesAsync();
            }

            // Cargar las relaciones para devolver el DTO completo
            await _context.Entry(review).Reference(r => r.User).LoadAsync();
            await _context.Entry(review).Reference(r => r.Professional).LoadAsync();

            var createdReviewDto = new ReviewDto
            {
                Id = review.Id,
                UserId = review.UserId,
                UserName = review.User.FullName,
                ProfessionalId = review.ProfessionalId,
                ProfessionalName = review.Professional.FullName,
                BookingId = review.BookingId,
                Rating = review.Rating,
                Comment = review.Comment,
                Project = review.Project,
                Date = review.Date
            };

            return CreatedAtAction(nameof(GetReview), new { id = review.Id }, createdReviewDto);
        }
    }
}