using LDB.Web.Models;
using LDB.Web.Render;
using System.Collections.Generic;
using System.Web.Mvc;
using System;
using System.Linq;
using CommonServiceLocator;
using LDB.Core.Interfaces;
using LDB.Core.Entities;

namespace LDB.Web.Controllers
{
    public class MVCTutorialController : BaseController
    {
       
        public ActionResult SubPage()
        {
            return View();
        }

    //comment line 0
        public ActionResult Index()
        {
            IPersonService personService = ServiceLocator.Current.GetInstance<IPersonService>();
            List<PersonDTO> res = personService.GetPersons();
            //var list = personService.GetPersons();

            //TODO: map from DTO to Model
            //TODO: foreach accross personDTO list, map and add to personModel list

            List<PersonModel> personList = new List<PersonModel>();
            foreach (PersonDTO person in res)
            {
                personList.Add(MapDBEntityModel(person));
               
            }

            return View(personList);
        }

        private PersonModel MapDBEntityModel(PersonDTO person)
        {
            PersonModel personModel = new PersonModel();
            personModel.Id = person.Id;
            personModel.FirstName = person.FirstName;
            personModel.LastName = person.LastName;
            personModel.BirthDate = (DateTime)person.BirthDate;

            return personModel;
        }

        [HttpPost]
        public JsonResult Edited(PersonModel personModel)
        {
            //TODO: map from PersonModel to PersonDTO
            //TODO: call personService.Update funtion

            PersonDTO personDTO = new PersonDTO();
            personDTO.Id = personModel.Id;
            personDTO.FirstName = personModel.FirstName;
            personDTO.LastName = personModel.LastName;
            personDTO.BirthDate = personModel.BirthDate;

            IPersonService personService = ServiceLocator.Current.GetInstance<IPersonService>();
            personService.Update(personDTO);

            return Json(personModel, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Add(PersonModel personModel)
        {
          
            IPersonService personService = ServiceLocator.Current.GetInstance<IPersonService>();
            personService.Create(MapModelToDB(personModel));
            return Json(personModel, JsonRequestBehavior.AllowGet);
        }

        private PersonDTO MapModelToDB(PersonModel personModel)
        {
            PersonDTO personDTO = new PersonDTO();

            personDTO.Id = personModel.Id;
            personDTO.FirstName = personModel.FirstName;
            personDTO.LastName = personModel.LastName;
            personDTO.BirthDate = personModel.BirthDate;

            return personDTO;
        }

        [HttpPost]
        public JsonResult Delete(PersonModel personModel) 
        {

            IPersonService personService = ServiceLocator.Current.GetInstance<IPersonService>();
            personService.Delete(personModel.Id);
            return Json(personModel, JsonRequestBehavior.AllowGet);
        }

       

    }
       


 }