import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderTemplateComponent } from './components/header-template/header-template.component';
import { ErrorsPageComponent } from './pages/errors-page/errors-page.component';

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
          loadChildren: () => import("./pages/home/home.module").then(m => m.HomeModule)
        },
        {
          path: "categorias",
          loadChildren: () => import("./pages/categories/categories.module").then(m => m.CategoriesModule)
        },
        {
          path:"produtos",
          loadChildren: () => import("./pages/products/products.module").then(m => m.ProductModule)
        },
        {
          path:"garagens",
          loadChildren: () => import("./pages/garages/garages.module").then(m => m.GaragesModule)
        },
        {
          path:"login",
          loadChildren: () => import("./pages/login/login.module").then(m => m.LoginModule)
        },
        {
          path:"carrinho",
          loadChildren: () => import("./pages/cart-screen/cart-screen.module").then(m => m.CartScreenModule)
        },
        {
          path:"novo-usuario",
          loadChildren: () => import("./pages/create-user/create-user.module").then(m => m.CreateUserModule)
        },
        {
          path: "admin",
          loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule)
        },
        {
          path: "garagem",
          loadChildren: () => import("./pages/garage-screen/garage-screen.module").then(m => m.GarageScreenModule)
        },
        {
          path: "produto",
          loadChildren: () => import("./pages/product-page/product-page.module").then(m => m.ProductPageModule)
        },
        {
          path: "chat",
          loadChildren: () => import("./pages/chat-screen/chat-screen.module").then(m => m.ChatScreenModule)
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
