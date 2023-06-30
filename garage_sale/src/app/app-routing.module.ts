import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderTemplateComponent } from './shared/header-template/header-template.component';

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
            }

          



      ]
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
