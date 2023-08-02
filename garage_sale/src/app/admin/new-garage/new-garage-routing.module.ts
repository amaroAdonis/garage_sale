import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { NewGarageRootComponent } from "./new-garage-root.component";
import { LoadNewGarageComponent } from "./load-new-garage.component";
import { LoadEditGarageComponent } from "./load-edit-garage.component";


const routes:Routes = [
    {path:"", component: NewGarageRootComponent,
    children: [
        {path:"", component: LoadNewGarageComponent},
        {path:"garage/:id", component: LoadEditGarageComponent}
    ]
}
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NewGarageRoutingModule {}