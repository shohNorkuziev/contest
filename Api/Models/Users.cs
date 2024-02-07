using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

public class Users : IdentityUser<int>
{
    [Required]
    public string FirstName { get; set; }
    
    public string LastName { get; set; }

    [EmailAddress]
    [Required]
    public override string Email { get; set; }
    public string Password { get; set; }
}
