import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderTemplateComponent } from './shared/header-template/header-template.component';
import { ErrorsPageComponent } from './errors-page/errors-page.component';

const routes: Routes = [
    {
        path: "",
        component: HeaderTemplateComponent,
        children: [
        {
          path: "", pathMatch: 'full', redirectTo: ""
        },
        {
          path: "",
          loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
        },
        {
          path: "categorias",
          loadChildren: () => import("./categories/categories.module").then(m => m.CategoriesModule)
        },
        {
          path:"produtos",
          loadChildren: () => import("./products/products.module").then(m => m.ProductModule)
        },
        {
          path:"garagens",
          loadChildren: () => import("./garages/garages.module").then(m => m.GaragesModule)
        },
        {
          path:"login",
          loadChildren: () => import("./login/login.module").then(m => m.LoginModule)
        }

      ]
    },
    {
      path: "admin",
      loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule)
    },
    {
      path:"404", component:ErrorsPageComponent
    },
    {
      path:"**", redirectTo:"/404"
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
