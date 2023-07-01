import { RouterModule, Routes } from "@angular/router";
import { CartScreenComponent } from "./cart-screen.component";
import { NgModule } from "@angular/core";

const routes:Routes = [
    {path:"", component:CartScreenComponent}
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CartScreenRoutingModule {}