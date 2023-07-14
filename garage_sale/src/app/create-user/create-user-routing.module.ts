import { RouterModule, Routes } from "@angular/router";
import { CreateUserComponent } from "./create-user.component";
import { NgModule } from "@angular/core";


const routes: Routes = [
    {path:"", component:CreateUserComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreateUserRoutingModule{}