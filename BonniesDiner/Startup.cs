using System;
using System.Linq;
using BonniesDiner.Data;
using BonniesDiner.Domain.Entity;
using BonniesDiner.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace BonniesDiner
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

            // In production, the React files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/build";
            });
            services.AddDbContext<DinerContext>(
                x =>
                {
                    x.UseSqlServer(Configuration.GetConnectionString("localDb"));
                });

            //services.AddDbContext<IdentityContext>(options =>
            //    options.UseSqlServer(Configuration.GetConnectionString("localDb"),
            //        b => b.MigrationsAssembly("BonniesDiner")));


            services.AddSingleton<CreateMenuService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, DinerContext db, CreateMenuService menuService)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                db.Database.Migrate();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                app.UseHsts();
            }

            try
            {
                MenuEntity item = db.Menu.FirstOrDefault(x => x.ItemName != null);
                if (item == null) menuService.Load(db);
            }
            catch
            {
                throw new Exception("Error creating menu");
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer(npmScript: "start");
                }
            });
        }
    }
}
