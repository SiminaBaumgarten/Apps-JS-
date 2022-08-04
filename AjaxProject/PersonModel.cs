using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LDB.Web.Models
{
    public class PersonModel
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string FullName { get { 

                return FirstName + " " + LastName;
            }
        }


        public int Age { get; set; }
        //public DateTime DateOfBirth { get; set; }
    }
}