using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication1.Models;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using System.Web;

namespace WebApplication1.Controllers
{
    public class ItemController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"
                    select ItemNumber,ItemName,ItemAmount
                    from
                    dbo.Item
                    ";
            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.
                ConnectionStrings["ItemAppDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);


        }

        public string Post(Item item)

        {
            try
            {
                string query = @"
                    insert into dbo.Item values
                    (
                    
                    '" + item.ItemName + @"'
                    ,'" + item.ItemAmount + @"'
                    )
                    ";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["ItemAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Added Successfully!!";
            }
            catch (Exception e)
            {

                return "Failed to Add!!"+ e;
            }
        }


        public string Put(Item item)
        {
            try
            {
                string query = @"
                    update dbo.Item set 
                    ItemNumber='" + item.ItemNumber + @"'
                    ,ItemName='" + item.ItemName + @"'
                    ,ItemAmount='" + item.ItemAmount + @"'
                    ";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["ItemAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Updated Successfully!!";
            }
            catch (Exception)
            {

                return "Failed to Update!!";
            }
        }


        public string Delete(int id)
        {
            try
            {
                string query = @"
                    delete from dbo.Item
                    where ItemNumber=" + id + @"
                    ";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["ItemAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Deleted Successfully!!";
            }
            catch (Exception )
            {

                return "Failed to Delete!!";
            }
        }






    }
}