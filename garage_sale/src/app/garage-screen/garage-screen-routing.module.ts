import { RouterModule, Routes } from "@angular/router";
import { GarageScreenComponent } from "./garage-screen.component";
import { NgModule } from "@angular/core";

const routes:Routes = [
    {path: ``, component: GarageScreenComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GarageScreenRoutingModule {}