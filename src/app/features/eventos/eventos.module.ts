import { NgModule } from "@angular/core";
import { EventosComponent } from "./eventos.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        EventosComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        EventosComponent
    ]
})
export class EventosModule { }
