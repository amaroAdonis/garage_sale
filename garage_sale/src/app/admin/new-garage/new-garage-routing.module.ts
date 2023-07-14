import { RouterModule, Routes } from "@angular/router";
import { NewGarageComponent } from "./new-garage.component";
import { NgModule } from "@angular/core";


const routes:Routes = [
    {path:"", component: NewGarageComponent}
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NewGarageRoutingModule {}