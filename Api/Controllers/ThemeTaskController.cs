using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

[Route("api/[controller]")]
[ApiController]
public class ThemeTasksController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public ThemeTasksController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<ThemeTask>>> GetThemeTasks()
    {
        return await _context.ThemeTasks.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<ThemeTask>> GetThemeTask(int id)
    {
        var themeTask = await _context.ThemeTasks.FindAsync(id);

        if (themeTask == null)
        {
            return NotFound();
        }

        return themeTask;
    }

    [HttpPost]
    public async Task<ActionResult<ThemeTask>> PostThemeTask(ThemeTask themeTask)
    {
        _context.ThemeTasks.Add(themeTask);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetThemeTask), new { id = themeTask.Id }, themeTask);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> PutThemeTask(int id, ThemeTask themeTask)
    {
        if (id != themeTask.Id)
        {
            return BadRequest();
        }

        _context.Entry(themeTask).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!ThemeTaskExists(id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteThemeTask(int id)
    {
        var themeTask = await _context.ThemeTasks.FindAsync(id);

        if (themeTask == null)
        {
            return NotFound();
        }

        _context.ThemeTasks.Remove(themeTask);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool ThemeTaskExists(int id)
    {
        return _context.ThemeTasks.Any(e => e.Id == id);
    }
}
