
using Microsoft.EntityFrameworkCore;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    public DbSet<TaskItem> Tasks { get; set; }
    public DbSet<ThemeTask> ThemeTasks { get; set; }
    public DbSet<Users> Users { get; set; }
    public DbSet<IdentityUserClaim<string>> UserClaims { get; set; }
}
