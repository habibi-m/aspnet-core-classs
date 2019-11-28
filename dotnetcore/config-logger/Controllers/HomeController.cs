using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using config_logger.Models;
using Newtonsoft.Json;

namespace config_logger.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public string Privacy()
        {
            var user = new User()
            {
                Fname = "Mohsen",
                Lname = "Ilanloo",
                Email = "mohsenrp@gmail.com"
            };

            var json = JsonConvert.SerializeObject(user);

            _logger.LogInformation(json);

            return json;
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
