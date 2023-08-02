import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { LoadCreateUserComponent } from "./load-create-user.component";
import { LoadEditUserComponent } from "./load-edit-user.component";
import { CreateUserRootComponent } from "./create-user-root.component";


const routes: Routes = [
    {
        path: "",
        component: CreateUserRootComponent,
        children: [
            {path: "", component: LoadCreateUserComponent},
            {path: "user/:id", component: LoadEditUserComponent}
        ]
}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreateUserRoutingModule{}