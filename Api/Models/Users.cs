using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;
public class Users : IdentityUser
{
    public int Id {get;set;}

    [Required]
    public string FirstName{get;set;}
    public string LastName{get;set;}

    [Required]

    [EmailAddress]
    public string Email{get;set;}

    [Required]
    public string Password{get;set;}
}