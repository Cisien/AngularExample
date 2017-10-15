using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularExample.Controllers
{
  [Route("api/[controller]")]
  public class DataController : Controller
  {
    public static List<string> data; // don't ever do this

    public DataController()
    {
      data = new List<string> { "First", "Second", "Third" };
    }

    [HttpGet()]
    [Produces("application/json")]
    public IActionResult Get()
    {
      return Ok(data);
    }

    [HttpPost()]
    [Produces("application/json"), Consumes("application/json")]
    public IActionResult Post([FromBody] string item)
    {
      if (string.IsNullOrWhiteSpace(item))
      {
        return BadRequest(new { Message = "value is not valid" });
      }

      data.Add(item);
      return Ok(data);
    }

    [HttpDelete()]
    [Produces("application/json"), Consumes("application/json")]
    public IActionResult Delete([FromQuery] string item)
    {

      data.Remove(item);
      return Ok(data);
    }

  }
}
