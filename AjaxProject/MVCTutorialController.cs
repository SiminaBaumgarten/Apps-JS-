using LDB.Web.Models;
using System.Collections.Generic;
using System.Web.Mvc;

namespace LDB.Web.Controllers
{
    public class MVCTutorialController : BaseController
    {
        // GET: MVCTutorial
        // Check on inspector -> network -> HTML to see how the server returned the view
       



        // GET: MVCTutorial/SubPage
        public ActionResult SubPage()
        {
            return View();
        }

        static IList<PersonModel> personModel = new List<PersonModel> {
           
            new PersonModel() { Id = 1, FirstName = "John", LastName = "Doe", Age = 18},
            new PersonModel() { Id = 2, FirstName = "Steve", LastName = "Jobs", Age = 65},
            new PersonModel() { Id = 3, FirstName = "Chris", LastName = "Evans", Age = 50 },
            new PersonModel() { Id = 4, FirstName = "Boby", LastName = "Larson", Age = 55},
            new PersonModel() { Id = 5, FirstName = "Robin", LastName = "Hood", Age = 35}
        };
        public ActionResult Index()
        {
            return View(personModel);
        }


        public JsonResult Convert(PersonModel personModel)
        {
            List<PersonModel> lst = new List<PersonModel>()
            {
                personModel
               
            };

            return Json(lst, JsonRequestBehavior.AllowGet);
        }

       

    }
 }