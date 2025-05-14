using ConstructionMarketAPI.Data;
using ConstructionMarketAPI.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ConstructionMarketAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProfessionalsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ProfessionalsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Professionals
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProfessionalDto>>> GetProfessionals()
        {
            var professionals = await _context.Professionals
                .Select(p => new ProfessionalDto
                {
                    Id = p.Id,
                    FullName = p.FullName,
                    Bio = p.Bio,
                    Location = p.Location,
                    Rating = p.Rating
                })
                .ToListAsync();

            return Ok(professionals);
        }

        // GET: api/Professionals/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ProfessionalDetailDto>> GetProfessional(int id)
        {
            var professional = await _context.Professionals
                .Where(p => p.Id == id)
                .Select(p => new ProfessionalDetailDto
                {
                    Id = p.Id,
                    FullName = p.FullName,
                    Bio = p.Bio,
                    Location = p.Location,
                    Rating = p.Rating,
                    Services = p.ProfessionalServices.Select(ps => new ProfessionalServiceDto
                    {
                        Id = ps.Id,
                        ProfessionalId = ps.ProfessionalId,
                        ProfessionalName = p.FullName,
                        ServiceId = ps.ServiceId,
                        ServiceName = ps.Service.Name,
                        Price = ps.Price,
                        Duration = ps.Duration
                    }).ToList(),
                    Reviews = p.Reviews.Select(r => new ReviewDto
                    {
                        Id = r.Id,
                        UserId = r.UserId,
                        UserName = r.User.FullName,
                        ProfessionalId = r.ProfessionalId,
                        ProfessionalName = p.FullName,
                        BookingId = r.BookingId,
                        Rating = r.Rating,
                        Comment = r.Comment,
                        Project = r.Project,
                        Date = r.Date
                    }).ToList()
                })
                .FirstOrDefaultAsync();

            if (professional == null)
            {
                return NotFound();
            }

            return Ok(professional);
        }

        // GET: api/Professionals/Service/5
        [HttpGet("Service/{serviceId}")]
        public async Task<ActionResult<IEnumerable<ProfessionalDto>>> GetProfessionalsByService(int serviceId)
        {
            var professionals = await _context.ProfessionalServices
                .Where(ps => ps.ServiceId == serviceId)
                .Select(ps => new ProfessionalDto
                {
                    Id = ps.Professional.Id,
                    FullName = ps.Professional.FullName,
                    Bio = ps.Professional.Bio,
                    Location = ps.Professional.Location,
                    Rating = ps.Professional.Rating
                })
                .Distinct()
                .ToListAsync();

            return Ok(professionals);
        }
    }
}