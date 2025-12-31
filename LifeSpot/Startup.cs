using System.IO;
using System.Text;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace LifeSpot
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            string sideBarHtml = File.ReadAllText(Path.Combine(Directory.GetCurrentDirectory(), "views", "shared", "sidebar.html"));

            string imgSlideBarHtml = File.ReadAllText(Path.Combine(Directory.GetCurrentDirectory(), "views", "shared", "imgslidebar.html"));

            string footerHtml = File.ReadAllText(Path.Combine(Directory.GetCurrentDirectory(), "views", "shared", "footer.html"));


            app.UseEndpoints(endpoints =>
            {
                //Index
                endpoints.MapGet("/", async context =>
                {
                    var viewPath = Path.Combine(Directory.GetCurrentDirectory(), "Views", "index.html");

                    var html = new StringBuilder(await File.ReadAllTextAsync(viewPath))
                        .Replace("<!--SIDEBAR-->", sideBarHtml)
                        .Replace("<!--FOOTER-->", footerHtml);

                    await context.Response.WriteAsync(html.ToString());
                });


                //About
                endpoints.MapGet("/about", async context =>
                {
                    var viewPath = Path.Combine(Directory.GetCurrentDirectory(), "Views", "about.html");
                    var html = new StringBuilder(await File.ReadAllTextAsync(viewPath))
                        .Replace("<!--SIDEBAR-->", sideBarHtml)
                        .Replace("<!--IMGSLIDEBAR-->", imgSlideBarHtml)
                        .Replace("<!--FOOTER-->", footerHtml);
                    await context.Response.WriteAsync(html.ToString());
                });

                endpoints.MapGet("/testing", async context =>
                {
                    var viewPath = Path.Combine(Directory.GetCurrentDirectory(), "Views", "testing.html");

                    var html = new StringBuilder(await File.ReadAllTextAsync(viewPath))
                        .Replace("<!--SIDEBAR-->", sideBarHtml)
                        .Replace("<!--FOOTER-->", footerHtml);
                    
                    await context.Response.WriteAsync(html.ToString());
                });

                endpoints.MapGet("/static/css/main.css", async context =>
                {
                    var cssPath = Path.Combine(Directory.GetCurrentDirectory(), "static", "css", "main.css");
                    var css = await File.ReadAllTextAsync(cssPath);
                    await context.Response.WriteAsync(css);
                });

                endpoints.MapGet("/static/scripts/main.js", async context =>
                {
                    var jsPath = Path.Combine(Directory.GetCurrentDirectory(), "static", "scripts", "main.js");
                    var js = await File.ReadAllTextAsync(jsPath);
                    await context.Response.WriteAsync(js);
                });

                endpoints.MapGet("/static/scripts/testing.js", async context =>
                {
                    var jsPath = Path.Combine(Directory.GetCurrentDirectory(), "static", "scripts", "testing.js");
                    var js = await File.ReadAllTextAsync(jsPath);
                    await context.Response.WriteAsync(js);
                });
                
                endpoints.MapGet("/static/scripts/comment.js", async context =>
                {
                    var jsPath = Path.Combine(Directory.GetCurrentDirectory(), "static", "scripts", "comment.js");
                    var js = await File.ReadAllTextAsync(jsPath);
                    await context.Response.WriteAsync(js);
                });

                endpoints.MapGet("/static/scripts/imgslider.js", async context =>
                {
                    var jsPath = Path.Combine(Directory.GetCurrentDirectory(), "static", "scripts", "imgslider.js");
                    var js = await File.ReadAllTextAsync(jsPath);
                    await context.Response.WriteAsync(js);
                });

                var imgPath = Path.Combine(Directory.GetCurrentDirectory(), "static", "pictures");
                string[] imgFiles = Directory.GetFiles(imgPath);

                foreach (var img in imgFiles)
                {
                    var imgFile = new FileInfo(img);
                    string endpointImg = $"/pictures/{imgFile.Name}";
                    endpoints.MapGet(endpointImg, async () =>
                    {
                        var fileBytes = await File.ReadAllBytesAsync(imgFile.FullName);
                        return Results.File(fileBytes, "image/jpg");
                    });
                }
            });
        }
    }
}