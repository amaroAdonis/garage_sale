import { RouterModule, Routes } from "@angular/router";
import { NewProductComponent } from "./new-product.component";
import { NgModule } from "@angular/core";

const routes:Routes = [
    {path: "", component: NewProductComponent}
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NewProductRoutingModule {}