using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace config_logger.Controllers
{
    public class UserController : Controller
    {
        private ILogger<UserController> _logger;

        public UserController(ILogger<UserController> logger)
        {
            _logger = logger;
        }


        public IActionResult Index()
        {
            return View();
        }


        public IActionResult Login(string username, string password)
        {
            _logger.LogInformation($"username={username}, password={password}");

            /*
             * TODO: Check user and password
             */



            return View();
        }

        public IActionResult Register()
        {
            return View();
        }
    }
}