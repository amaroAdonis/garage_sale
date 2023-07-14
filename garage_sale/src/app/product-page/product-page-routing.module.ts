import { RouterModule, Routes } from "@angular/router";
import { ProductPageComponent } from "./product-page.component";
import { NgModule } from "@angular/core";

const routes:Routes = [
    {path: "", component: ProductPageComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductPageRoutingModule {}