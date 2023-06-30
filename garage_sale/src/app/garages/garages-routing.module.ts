import { RouterModule, Routes } from "@angular/router";
import { GaragesComponent } from "./garages.component";
import { NgModule } from "@angular/core";


const routes: Routes = [
    {path:"", component:GaragesComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GaragesRoutingModule{}