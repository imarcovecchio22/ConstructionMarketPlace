using ConstructionMarketAPI.Data;
using ConstructionMarketAPI.DTOs;
using ConstructionMarketAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ConstructionMarketAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public BookingsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Bookings
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BookingDto>>> GetBookings()
        {
            var bookings = await _context.Bookings
                .Include(b => b.User)
                .Include(b => b.ProfessionalService)
                .ThenInclude(ps => ps.Professional)
                .Include(b => b.ProfessionalService)
                .ThenInclude(ps => ps.Service)
                .Select(b => new BookingDto
                {
                    Id = b.Id,
                    UserId = b.UserId,
                    UserName = b.User.FullName,
                    ProfessionalServiceId = b.ProfessionalServiceId,
                    ServiceName = b.ProfessionalService.Service.Name,
                    ProfessionalName = b.ProfessionalService.Professional.FullName,
                    RequestedDate = b.RequestedDate,
                    ScheduledDate = b.ScheduledDate,
                    Status = b.Status,
                    Notes = b.Notes
                })
                .ToListAsync();

            return Ok(bookings);
        }

        // GET: api/Bookings/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BookingDto>> GetBooking(int id)
        {
            var booking = await _context.Bookings
                .Include(b => b.User)
                .Include(b => b.ProfessionalService)
                .ThenInclude(ps => ps.Professional)
                .Include(b => b.ProfessionalService)
                .ThenInclude(ps => ps.Service)
                .Where(b => b.Id == id)
                .Select(b => new BookingDto
                {
                    Id = b.Id,
                    UserId = b.UserId,
                    UserName = b.User.FullName,
                    ProfessionalServiceId = b.ProfessionalServiceId,
                    ServiceName = b.ProfessionalService.Service.Name,
                    ProfessionalName = b.ProfessionalService.Professional.FullName,
                    RequestedDate = b.RequestedDate,
                    ScheduledDate = b.ScheduledDate,
                    Status = b.Status,
                    Notes = b.Notes
                })
                .FirstOrDefaultAsync();

            if (booking == null)
            {
                return NotFound();
            }

            return Ok(booking);
        }

        // GET: api/Bookings/User/5
        [HttpGet("User/{userId}")]
        public async Task<ActionResult<IEnumerable<BookingDto>>> GetBookingsByUser(int userId)
        {
            var bookings = await _context.Bookings
                .Include(b => b.User)
                .Include(b => b.ProfessionalService)
                .ThenInclude(ps => ps.Professional)
                .Include(b => b.ProfessionalService)
                .ThenInclude(ps => ps.Service)
                .Where(b => b.UserId == userId)
                .Select(b => new BookingDto
                {
                    Id = b.Id,
                    UserId = b.UserId,
                    UserName = b.User.FullName,
                    ProfessionalServiceId = b.ProfessionalServiceId,
                    ServiceName = b.ProfessionalService.Service.Name,
                    ProfessionalName = b.ProfessionalService.Professional.FullName,
                    RequestedDate = b.RequestedDate,
                    ScheduledDate = b.ScheduledDate,
                    Status = b.Status,
                    Notes = b.Notes
                })
                .ToListAsync();

            return Ok(bookings);
        }

        // POST: api/Bookings
        [HttpPost]
        public async Task<ActionResult<BookingDto>> CreateBooking(BookingCreateDto bookingDto)
        {
            var professionalService = await _context.ProfessionalServices.FindAsync(bookingDto.ProfessionalServiceId);
            if (professionalService == null)
            {
                return BadRequest("El servicio profesional no existe");
            }

            var user = await _context.Users.FindAsync(bookingDto.UserId);
            if (user == null)
            {
                return BadRequest("El usuario no existe");
            }

            var booking = new Booking
            {
                UserId = bookingDto.UserId,
                ProfessionalServiceId = bookingDto.ProfessionalServiceId,
                RequestedDate = bookingDto.RequestedDate,
                ScheduledDate = bookingDto.RequestedDate.AddDays(2), // Por defecto, programamos 2 días después
                Status = "Pendiente",
                Notes = bookingDto.Notes
            };

            _context.Bookings.Add(booking);
            await _context.SaveChangesAsync();

            // Cargar las relaciones para devolver el DTO completo
            await _context.Entry(booking).Reference(b => b.User).LoadAsync();
            await _context.Entry(booking).Reference(b => b.ProfessionalService).LoadAsync();
            await _context.Entry(booking.ProfessionalService).Reference(ps => ps.Professional).LoadAsync();
            await _context.Entry(booking.ProfessionalService).Reference(ps => ps.Service).LoadAsync();

            var createdBookingDto = new BookingDto
            {
                Id = booking.Id,
                UserId = booking.UserId,
                UserName = booking.User.FullName,
                ProfessionalServiceId = booking.ProfessionalServiceId,
                ServiceName = booking.ProfessionalService.Service.Name,
                ProfessionalName = booking.ProfessionalService.Professional.FullName,
                RequestedDate = booking.RequestedDate,
                ScheduledDate = booking.ScheduledDate,
                Status = booking.Status,
                Notes = booking.Notes
            };

            return CreatedAtAction(nameof(GetBooking), new { id = booking.Id }, createdBookingDto);
        }

        // PUT: api/Bookings/5/status
        [HttpPut("{id}/status")]
        public async Task<IActionResult> UpdateBookingStatus(int id, [FromBody] string status)
        {
            var booking = await _context.Bookings.FindAsync(id);
            if (booking == null)
            {
                return NotFound();
            }

            booking.Status = status;
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}