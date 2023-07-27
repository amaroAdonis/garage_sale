import { NgModule } from "@angular/core";
import { ChatScreenComponent } from "./chat-screen.component";
import { CommonModule } from "@angular/common";
import { ChatScreenRoutingModule } from "./chat-screen-routing.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [ChatScreenComponent],
    imports: [
        CommonModule,
        ChatScreenRoutingModule,
        HttpClientModule
    ]
})
export class ChatScreenModule {}