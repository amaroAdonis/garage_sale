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
        },
        {
          path:"carrinho",
          loadChildren: () => import("./cart-screen/cart-screen.module").then(m => m.CartScreenModule)
        },
        {
          path:"novo-usuario",
          loadChildren: () => import("./create-user/create-user.module").then(m => m.CreateUserModule)
        },
        {
          path: "admin",
          loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule)
        },
        {
          path: "garagem",
          loadChildren: () => import("./garage-screen/garage-screen.module").then(m => m.GarageScreenModule)
        },
        {
          path: "produto",
          loadChildren: () => import("./product-page/product-page.module").then(m => m.ProductPageModule)
        },
        {
          path: "chat",
          loadChildren: () => import("./chat-screen/chat-screen.module").then(m => m.ChatScreenModule)
        },
        {
          path: "novo-produto",
          loadChildren: () => import("./admin/new-product/new-product.module").then(m => m.NewProductModule)
        },
        {
          path: "dashboard",
          loadChildren: () => import("./admin/dashboard/dashboard.module").then(m => m.DashboardModule)
        },
        {
          path: "garagem-nova",
          loadChildren: () => import("./admin/new-garage/new-garage.module").then(m => m.NewGarageModule)
        }
      ]
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
