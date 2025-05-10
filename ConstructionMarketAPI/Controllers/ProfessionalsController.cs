using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


[ApiController]
[Route("api/[controller]")]
public class ProfessionalsController : ControllerBase
{
    private readonly AppDbContext _context;

    public ProfessionalsController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var profesionales = await _context.Professionals.ToListAsync();
        return Ok(profesionales);
    }

    // Agregás más endpoints acá (POST, PUT, DELETE, etc.)
}
