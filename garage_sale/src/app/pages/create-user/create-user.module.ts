import { NgModule } from "@angular/core";
import { CreateUserComponent } from "./create-user.component";
import { CommonModule } from "@angular/common";
import { CreateUserRoutingModule } from "./create-user-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { LoadCreateUserComponent } from "./load-create-user.component";
import { LoadEditUserComponent } from "./load-edit-user.component";
import { CreateUserRootComponent } from "./create-user-root.component";

@NgModule({
    declarations: [
        CreateUserRootComponent, CreateUserComponent, LoadCreateUserComponent, LoadEditUserComponent
    ],
    imports: [
        CommonModule,
        CreateUserRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
    ],
    exports:[CreateUserComponent]
}) export class CreateUserModule {}