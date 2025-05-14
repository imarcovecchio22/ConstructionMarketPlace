using System.Globalization;
using Microsoft.EntityFrameworkCore;
using ContructionMarketAPI.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.Configure<RequestLocalizationOptions>(options =>
{
    options.DefaultRequestCulture = new Microsoft.AspNetCore.Localization.RequestCulture("en-US");
    options.SupportedCultures = new List<CultureInfo> { new CultureInfo("en-US") };
    options.SupportedUICultures = new List<CultureInfo> { new CultureInfo("en-US") };
});

// 🔧 Registro del DbContext
builder.Services.AddDbContext<ApplicationDbContext>(options =>
        options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));


    builder.Services.AddCors(options =>
    {
        options.AddPolicy("AllowReactApp",
            policy =>
            {
                policy.WithOrigins("http://localhost:5173")
                    .AllowAnyHeader()
                    .AllowAnyMethod();
            });
    }); 

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("AllowReactApp");
app.UseAuthorization();
app.MapControllers();

app.Run();


