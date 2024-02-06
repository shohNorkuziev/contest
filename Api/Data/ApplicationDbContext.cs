
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    public DbSet<TaskItem> Tasks { get; set; }
    public DbSet<ThemeTask> ThemeTasks { get; set; }
    public DbSet<Users> Users { get; set; }
    public DbSet<IdentityUserClaim<int>> UserClaims { get; set; }
}
