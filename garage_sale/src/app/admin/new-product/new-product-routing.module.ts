import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { NewProductRootComponent } from "./new-product-root.component";
import { LoadNewProductComponent } from "./load-new-product.component";
import { LoadEditProductComponent } from "./load-edit-product.component";

const routes:Routes = [
    {
        path: "", component: NewProductRootComponent,
        children: [
            {path:"", component: LoadNewProductComponent},
            {path:"product/:id", component: LoadEditProductComponent}
        ]
}
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NewProductRoutingModule {}