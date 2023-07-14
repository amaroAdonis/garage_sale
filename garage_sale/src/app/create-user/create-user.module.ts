import { NgModule } from "@angular/core";
import { CreateUserComponent } from "./create-user.component";
import { CommonModule } from "@angular/common";
import { CreateUserRoutingModule } from "./create-user-routing.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        CreateUserComponent
    ],
    imports: [
        CommonModule,
        CreateUserRoutingModule,
        HttpClientModule
    ]
}) export class CreateUserModule {}