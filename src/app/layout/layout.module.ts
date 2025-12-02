import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { NgbCarouselModule } from "@ng-bootstrap/ng-bootstrap";
import { CarouselComponent } from "./carousel/carousel.component";

@NgModule({
    declarations: [
        NavbarComponent,
        CarouselComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        NgbCarouselModule
    ],
    exports: [
        NavbarComponent,
        CarouselComponent,
        FooterComponent
    ]
})
export class LayoutModule { }