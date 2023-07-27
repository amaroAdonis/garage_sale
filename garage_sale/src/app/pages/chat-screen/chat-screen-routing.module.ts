import { RouterModule, Routes } from "@angular/router";
import { ChatScreenComponent } from "./chat-screen.component";
import { NgModule } from "@angular/core";

const routes:Routes = [
    {path: "", component: ChatScreenComponent}
]

@NgModule ({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChatScreenRoutingModule {}