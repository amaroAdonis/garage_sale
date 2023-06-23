import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderTemplateComponent } from './shared/header-template/header-template.component';

const routes: Routes = [
    {
        path: "",
        component: HeaderTemplateComponent,
        children: [
            {
              path:"", pathMatch: 'full', redirectTo: "/home"
            },
            {
              path: "home",
              loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
            }



      ]
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
