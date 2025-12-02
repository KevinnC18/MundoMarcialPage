import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  slides = [
    {
      img: 'https://res.cloudinary.com/dz1vsm25f/image/upload/f_auto,q_auto/patada_cvp2hp.jpg',
      alt: 'Combate Taekwondo',
      title: 'Entrena con los mejores',
      text: 'En Mundo Marcial puedes encontrar los mejores instructores',
      link: null
    },
    {
      img: 'https://res.cloudinary.com/dz1vsm25f/image/upload/f_auto,q_auto/entrenamiento_oq5evd.jpg',
      alt: 'Competencias y exámenes',
      title: 'Vive nuevas experiencias',
      text: 'Conéctate con deportistas y participa en torneos, campamentos y actividades vacacionales únicas',
      link: null
    },
    {
      img: 'https://res.cloudinary.com/dz1vsm25f/image/upload/f_auto,q_auto/bog_lmoyxl.jpg',
      alt: 'Sede Bogotá',
      title: 'Sede Bogotá',
      text: 'Contamos con dos sedes en la capital. ¡Únete a esta gran familia!',
      link: 'https://forms.gle/kRT7bjLXZo63kB3Z6'
    },
    {
      img: 'https://res.cloudinary.com/dz1vsm25f/image/upload/f_auto,q_auto/grupo_qjjhup.jpg',
      alt: 'Sede Villavicencio',
      title: 'Sede Villavicencio',
      text: 'También contamos con una sede en Villavicencio. ¡Haz parte de nuestra familia!',
      link: 'https://forms.gle/c46M68DiR9FAGtkQA'
    },
    {
      img: 'https://res.cloudinary.com/dz1vsm25f/image/upload/f_auto,q_auto/Ecole_bv7w0j.jpg',
      alt: 'Alianzas con colegios en Bogotá',
      title: 'Alianza con colegios',
      text: 'Trabajamos con \'Ecole Granandino\' y \'Chiquillos Creativos\' en Bogotá',
      link: null
    },
    {
      img: 'https://res.cloudinary.com/dz1vsm25f/image/upload/f_auto,q_auto/centauro_fi9tup.jpg',
      alt: 'Alianzas con colegios en Villavicencio',
      title: 'Alianza educativa',
      text: 'Con los colegios Espíritu Santo, Gimnasio Los Alcázares, José Antonio Páez en Villavicencio y Escuela de Vigilancia El Centauro en Villavicencio',
      link: null
    }
  ];
}