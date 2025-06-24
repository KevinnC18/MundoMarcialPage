import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: false,
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  slides = [
    {
      img: 'https://res.cloudinary.com/dz1vsm25f/image/upload/f_auto,q_auto/combate_1_pweuxx.jpg',
      alt: 'Combate Taekwondo',
      title: 'Entrena con los mejores',
      text: 'En Mundo Marcial puedes encontrar los mejores instructores',
      link: null
    },
    {
      img: 'https://res.cloudinary.com/dz1vsm25f/image/upload/f_auto,q_auto/examen_larq8q.jpg',
      alt: 'Competencias y exámenes',
      title: 'Vive nuevas experiencias',
      text: 'Conéctate con deportistas y participa en competencias reconocidas',
      link: null
    },
    {
      img: 'https://res.cloudinary.com/dz1vsm25f/image/upload/f_auto,q_auto/bogota_f5r2ma.jpg',
      alt: 'Sede Bogotá',
      title: 'Sede Bogotá',
      text: 'Contamos con dos sedes en la capital. ¡Únete a esta gran familia!',
      link: 'https://forms.gle/kRT7bjLXZo63kB3Z6'
    },
    {
      img: 'https://res.cloudinary.com/dz1vsm25f/image/upload/f_auto,q_auto/grupo_qjjhup.jpg',
      alt: 'Sede Villavicencio',
      title: 'Sede Villavicencio',
      text: 'También contamos con una sede en Villavicencio. ¡Haz parte de nuestra comunidad!',
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
      img: 'https://res.cloudinary.com/dz1vsm25f/image/upload/f_auto,q_auto/Ecole_bv7w0j.jpg',
      alt: 'Alianzas con colegios en Villavicencio',
      title: 'Alianza educativa',
      text: 'Con los colegios Espíritu Santo, Gimnasio Los Alcázares y José Antonio Páez en Villavicencio',
      link: null
    },
    {
      img: 'https://res.cloudinary.com/dz1vsm25f/image/upload/f_auto,q_auto/combate_oc2aw3.jpg',
      alt: 'Eventos deportivos y vacacionales',
      title: 'Eventos deportivos',
      text: 'Participa en torneos, campamentos y actividades vacacionales únicas',
      link: null
    }
  ];
}