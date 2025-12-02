import { NgModule } from "@angular/core";
import { AcademiaPageComponent } from "./pages/academia-page/academia-page.component";
import { UbicacionComponent } from "./components/ubicacion/ubicacion.component";
import { InstructoresComponent } from "./components/instructores/instructores.component";
import { HorariosComponent } from "./components/horarios/horarios.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        AcademiaPageComponent,
        UbicacionComponent,
        InstructoresComponent,
        HorariosComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        AcademiaPageComponent
    ]
})
export class AcademiaModule { }