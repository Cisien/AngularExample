using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularExample.Controllers
{
  public class HomeController : Controller
  {
    public IActionResult Index()
    {
      return File("index.html", "text/html");
    }
  }
}
