using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using User_Registration_API.Models;

namespace User_Registration_API.Controllers
{
    [RoutePrefix("api/user")]
    public class UserController : ApiController
    {
        UserResgistrationDBEntities DB=new UserResgistrationDBEntities();
        [Route("Login")]
        [HttpPost]
        public IHttpActionResult userLogin(Login login)
        {
            var log = DB.Users.Where(x => x.Email.Equals(login.Email) && x.Password.Equals(login.Password)).FirstOrDefault();

            if (log == null)
            {
                return Ok(new { status = 401, isSuccess = false, message = "Invalid User", });
            }
            else

                return Ok(new { status = 200, isSuccess = true, message = "User Login successfully", UserDetails = log });
        }
        [Route("InsertUser")]
        [HttpPost]
        public object InsertUser(Register Reg)
        {
            try
            {

                User user= new User();
                if (user.Id == 0)
                {
                    user.Name = Reg.Name;
                    user.Email = Reg.Email;
                    user.Password = Reg.Password;
                    DB.Users.Add(user);
                    DB.SaveChanges();
                    return new Response
                    { Status = "Success", Message = "Record SuccessFully Saved." };
                }
            }
            catch (Exception)
            {

                throw;
            }
            return new Response
            { Status = "Error", Message = "Invalid Data." };
        }
    }
}
