import { NgModule } from "@angular/core";
import { AboutComponent } from "./about.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        AboutComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        AboutComponent
    ]
})
export class AboutModule { }