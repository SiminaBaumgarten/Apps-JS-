using System.Web.Mvc;

namespace LDB.Web.Controllers
{
    public class MVCTutorialController : BaseController
    {
        // GET: MVCTutorial
        // Check on inspector -> network -> HTML to see how the server returned the view
        public ActionResult Index()
        {
            return View();
        }

        // GET: MVCTutorial/SubPage
        public ActionResult SubPage()
        {
            return View();
        }
    }
}