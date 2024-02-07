using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using System.Linq;
using System;

[Route("api/[controller]")]
[ApiController]
public class UsersController : ControllerBase
{
    private readonly UserManager<Users> _userManager;
    private readonly SignInManager<Users> _signInManager;

    public UsersController(UserManager<Users> userManager, SignInManager<Users> signInManager)
    {
        _userManager = userManager;
        _signInManager = signInManager;
    }

    [HttpGet]
    public ActionResult<IEnumerable<Users>> GetUsers()
    {
        return _userManager.Users.ToList();
    }


    [HttpGet("{id}")]
    public async Task<ActionResult<Users>> GetUser(int id)
    {
        var user = await _userManager.FindByIdAsync(id.ToString());

        if (user == null)
        {
            return NotFound();
        }
        return user;
    }
    
[HttpPost("register")]
public async Task<IActionResult> Register([FromBody] Users model)
{
    var user = new Users
    {
        UserName = model.Email,
        Email = model.Email,
        FirstName = model.FirstName,
        LastName = model.LastName,
    };

    var result = await _userManager.CreateAsync(user, model.Password);

    if (result.Succeeded)
    {
        await _signInManager.SignInAsync(user, isPersistent: false);
        return Ok();
    }

    return BadRequest(result.Errors);
}




   [HttpPut("{id}")]
public async Task<IActionResult> PutUser(int id, Users users)
{
    if (id != Convert.ToInt32(users.Id))
    {
        return BadRequest();
    }

    var existingUser = await _userManager.FindByIdAsync(id.ToString());

    if (existingUser == null)
    {
        return NotFound();
    }

    existingUser.Email = users.Email;

    var result = await _userManager.UpdateAsync(existingUser);

    if (result.Succeeded)
    {
        return NoContent();
    }

    return BadRequest(result.Errors);
}

[HttpDelete("{id}")]
public async Task<IActionResult> DeleteUser(int id)
{
    var user = await _userManager.FindByIdAsync(id.ToString());

    if (user == null)
    {
        return NotFound();
    }

    var result = await _userManager.DeleteAsync(user);

    if (result.Succeeded)
    {
        return NoContent();
    }

    return BadRequest(result.Errors);
}


}
