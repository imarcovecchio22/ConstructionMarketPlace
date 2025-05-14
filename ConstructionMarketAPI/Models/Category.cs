using System.Collections.Generic;

namespace ConstructionMarketAPI.Models
{
public class Category
{
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public string? Description { get; set; }

    // Relaciones
        public virtual ICollection<Service> Services { get; set; }

        public Category()
        {
            Services = new HashSet<Service>();
        }
}
}