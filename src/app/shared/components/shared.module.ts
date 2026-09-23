import { NgModule } from "@angular/core";
import { NotFoundComponent } from "./not-found/not-found.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [NotFoundComponent],
    imports: [CommonModule, RouterModule],
    exports: [NotFoundComponent]
})
export class SharedModule { }