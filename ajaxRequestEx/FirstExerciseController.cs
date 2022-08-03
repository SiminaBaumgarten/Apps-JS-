using BulkyBookWeb2.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections;

namespace BulkyBookWeb2.Controllers
{
    public class FirstExerciseController : Controller
    {
        public IActionResult Index()
        {
            return View(new FirstExercise());
        }




        [HttpGet]
        public string StringsConcat(string str1, string str2)
        {
            return str1 + str2;
        }

        [HttpGet]
        public int Sum(int a, int b)
        { return a + b; }

        [HttpGet]
        public float SumFloat(float a, float b)
        {
            return a + b;
        }

        [HttpGet]
        public double DoubleFloat(double a, double b)
        {
            return a + b;
        }


        [HttpPost]
        public List<string> ArrayToList(ToList toList)
        {

            List<string> list = toList.ArrayForList.ToList();
            return list;
        }


        [HttpPost]
        public string[] ListToArray(ToArray toArray)
        {
            String[] arr = toArray.ListForArray.ToArray();
            return arr;
        }

        [HttpGet]
        public bool Bool(bool a)
        {
            return !a;
        }

    }
}
