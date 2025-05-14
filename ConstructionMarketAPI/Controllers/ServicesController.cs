using ConstructionMarketAPI.Data;
using ConstructionMarketAPI.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ConstructionMarketAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServicesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ServicesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Services
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ServiceDto>>> GetServices()
        {
            var services = await _context.Services
                .Include(s => s.Category)
                .Select(s => new ServiceDto
                {
                    Id = s.Id,
                    Name = s.Name,
                    Description = s.Description,
                    CategoryId = s.CategoryId,
                    CategoryName = s.Category.Name
                })
                .ToListAsync();

            return Ok(services);
        }

        // GET: api/Services/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ServiceDto>> GetService(int id)
        {
            var service = await _context.Services
                .Include(s => s.Category)
                .Where(s => s.Id == id)
                .Select(s => new ServiceDto
                {
                    Id = s.Id,
                    Name = s.Name,
                    Description = s.Description,
                    CategoryId = s.CategoryId,
                    CategoryName = s.Category.Name
                })
                .FirstOrDefaultAsync();

            if (service == null)
            {
                return NotFound();
            }

            return Ok(service);
        }

        // GET: api/Services/Category/5
        [HttpGet("Category/{categoryId}")]
        public async Task<ActionResult<IEnumerable<ServiceDto>>> GetServicesByCategory(int categoryId)
        {
            var services = await _context.Services
                .Include(s => s.Category)
                .Where(s => s.CategoryId == categoryId)
                .Select(s => new ServiceDto
                {
                    Id = s.Id,
                    Name = s.Name,
                    Description = s.Description,
                    CategoryId = s.CategoryId,
                    CategoryName = s.Category.Name
                })
                .ToListAsync();

            return Ok(services);
        }
    }
}