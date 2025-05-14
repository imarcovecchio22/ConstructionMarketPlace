using System.Collections.Generic;

namespace ConstructionMarketAPI.Models
{

public class Service
{
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public string? Description { get; set; }
    public int CategoryId { get; set; }

        // Relaciones
        public virtual Category Category { get; set; }
        public virtual ICollection<ProfessionalService> ProfessionalServices { get; set; }

        public Service()
        {
            ProfessionalServices = new HashSet<ProfessionalService>();
        }
}
}