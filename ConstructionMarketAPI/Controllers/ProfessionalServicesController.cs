using ConstructionMarketAPI.Data;
using ConstructionMarketAPI.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ConstructionMarketAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProfessionalServicesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ProfessionalServicesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/ProfessionalServices
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProfessionalServiceDto>>> GetProfessionalServices()
        {
            var professionalServices = await _context.ProfessionalServices
                .Include(ps => ps.Professional)
                .Include(ps => ps.Service)
                .Select(ps => new ProfessionalServiceDto
                {
                    Id = ps.Id,
                    ProfessionalId = ps.ProfessionalId,
                    ProfessionalName = ps.Professional.FullName,
                    ServiceId = ps.ServiceId,
                    ServiceName = ps.Service.Name,
                    Price = ps.Price,
                    Duration = ps.Duration
                })
                .ToListAsync();

            return Ok(professionalServices);
        }

        // GET: api/ProfessionalServices/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ProfessionalServiceDto>> GetProfessionalService(int id)
        {
            var professionalService = await _context.ProfessionalServices
                .Include(ps => ps.Professional)
                .Include(ps => ps.Service)
                .Where(ps => ps.Id == id)
                .Select(ps => new ProfessionalServiceDto
                {
                    Id = ps.Id,
                    ProfessionalId = ps.ProfessionalId,
                    ProfessionalName = ps.Professional.FullName,
                    ServiceId = ps.ServiceId,
                    ServiceName = ps.Service.Name,
                    Price = ps.Price,
                    Duration = ps.Duration
                })
                .FirstOrDefaultAsync();

            if (professionalService == null)
            {
                return NotFound();
            }

            return Ok(professionalService);
        }

        // GET: api/ProfessionalServices/Professional/5
        [HttpGet("Professional/{professionalId}")]
        public async Task<ActionResult<IEnumerable<ProfessionalServiceDto>>> GetProfessionalServicesByProfessional(int professionalId)
        {
            var professionalServices = await _context.ProfessionalServices
                .Include(ps => ps.Professional)
                .Include(ps => ps.Service)
                .Where(ps => ps.ProfessionalId == professionalId)
                .Select(ps => new ProfessionalServiceDto
                {
                    Id = ps.Id,
                    ProfessionalId = ps.ProfessionalId,
                    ProfessionalName = ps.Professional.FullName,
                    ServiceId = ps.ServiceId,
                    ServiceName = ps.Service.Name,
                    Price = ps.Price,
                    Duration = ps.Duration
                })
                .ToListAsync();

            return Ok(professionalServices);
        }
    }
}