import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Card {
  id: number;
  imageUrl: string;
  title: string;
  details: string;
  buttonText: string;
  icon: string;
}

@Component({
  selector: 'app-capsulas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './capsulas.component.html',
  styleUrls: ['./capsulas.component.css']
})
export class CapsulasComponent implements OnInit {

  activeCard: number | null = null;
  hoveredCard: number | null = null;

  cards: Card[] = [
    {
      id: 1,
      imageUrl: 'https://res.cloudinary.com/dz1vsm25f/image/upload/f_auto,q_auto/poster_wt5nqw.jpg',
      title: '¿Qué es el taekwondo?',
      details: 'El Taekwondo es un arte marcial coreano que, a lo largo de los siglos, evolucionó hasta convertirse en un reconocido deporte olímpico. Su práctica combina técnica, disciplina y cultura, lo que lo convierte en una de las artes marciales más completas del mundo. <br> Como arte–deporte, el Taekwondo no solo fortalece el cuerpo, sino también la mente y los valores personales. A nivel físico, mejora la fuerza, la elasticidad, la coordinación, la resistencia y la agilidad, contribuyendo a un desarrollo corporal armónico y funcional. <br> En el ámbito mental y emocional, fomenta la disciplina, el respeto, la perseverancia y el autocontrol. Además, enseña a asumir responsabilidades con valentía y a desarrollar un espíritu de compañerismo que se refleja tanto dentro como fuera del dojang. Practicar Taekwondo no solo te ayuda a mejorar tu condición física, sino también a formar un carácter más fuerte, seguro y equilibrado.',
      buttonText: 'Atrévete a conocerlo',
      icon: 'fa-info'
    },
    {
      id: 2,
      imageUrl: 'https://res.cloudinary.com/dz1vsm25f/image/upload/f_auto,q_auto/bandera_fqjbx0.jpg',
      title: 'Historia del taekwondo',
      details: 'Según la tradición coreana, los orígenes del Taekwondo se remontan aproximadamente al año 50 a.C., con la práctica del Taekkyon, un antiguo arte marcial que enfatizaba el uso de patadas y movimientos fluidos. <br> La consolidación del Taekwondo como disciplina moderna ocurrió el 11 de abril de 1955, cuando el general Choi Hong Hi oficializó su nombre y estructura en Seúl, Corea del Sur. Años después, en 1973, se creó la World Taekwondo Federation (hoy conocida como World Taekwondo (WT)) con el propósito de unificar estilos, reglamentos y promover el crecimiento del deporte a nivel global. <br> El Taekwondo debutó como deporte de exhibición en los Juegos Olímpicos de Seúl 1988, con la participación de 183 atletas (120 hombres y 63 mujeres) de 34 países, distribuidos en 8 divisiones de peso para cada género. Su reconocimiento definitivo llegó en los Juegos Olímpicos de Sídney 2000, donde fue incluido oficialmente como deporte olímpico.',
      buttonText: 'Aprende',
      icon: 'fa-feather'
    },
    {
      id: 3,
      imageUrl: 'https://res.cloudinary.com/dz1vsm25f/image/upload/f_auto,q_auto/Col_qwgdld.webp',
      title: 'Historia del taekwondo en Colombia',
      details: 'El Taekwondo llegó a Colombia en 1964, iniciando su práctica en las ciudades de Bogotá y Medellín bajo la guía del profesor coreano Sahn Young Han. En Medellín, su enseñanza comenzó formalmente en 1966, a cargo del maestro coreano Huan Su Sohn. <br> Para 1967, el Taekwondo fue institucionalizado y oficializado en el país, gracias a un convenio entre la Universidad de América (en Bogotá) y el gobierno de Corea, acompañado de la llegada del maestro Kyong Deuk Lee, quien fortaleció la formación técnica en esta disciplina. En 1969, otro maestro coreano, Woo Young Lee, conocido también como "Carlos Lee", aportó significativamente al crecimiento del Taekwondo colombiano, enriqueciendo su desarrollo con experiencia y conocimiento técnico. <br> La Federación Colombiana de Taekwondo fue fundada el 9 de diciembre de 1978 durante una asamblea realizada por las ligas de Atlántico, Bolívar y Sucre en la ciudad de Barranquilla. Un año después, en 1979, recibió su reconocimiento oficial por parte de Coldeportes Nacional, consolidando así la organización y proyección del Taekwondo en el país.',
      buttonText: 'Edúcate',
      icon: 'fa-magnifying-glass'
    },
    {
      id: 4,
      imageUrl: 'https://res.cloudinary.com/dz1vsm25f/image/upload/f_auto,q_auto/equipo_ryhced.jpg',
      title: '¿Quiénes pueden practicarlo?',
      details: 'Este noble deporte puede ser practicado por hombres, mujeres y niños, sin distinción de edad ni condiciones especiales. Algunos lo eligen por su enfoque deportivo y competitivo, mientras que otros encuentran en él una herramienta para fortalecer su carácter, mejorar su bienestar y adoptarlo como una forma de vida. <br> El Taekwondo se adapta a las capacidades de cada practicante, ofreciendo un camino de crecimiento físico, mental y emocional para todos.',
      buttonText: 'Anímate',
      icon: 'fa-universal-access'
    },
    {
      id: 5,
      imageUrl: 'https://res.cloudinary.com/dz1vsm25f/image/upload/f_auto,q_auto/calentamiento_zaxzld.jpg',
      title: '¿Por qué entrenar taekwondo?',
      details: 'Más que lanzar patadas, el Taekwondo ofrece beneficios profundos para el cuerpo y la mente. Este arte marcial no solo fortalece el desarrollo físico, sino que también mejora la organización personal, amplía la visión y fomenta una mayor conciencia mental. <br> Su propósito es impulsar la autoestima, el conocimiento de la autodefensa y un mayor bienestar integral, tanto físico como emocional. Además, contribuye al desarrollo de la fuerza, los reflejos, la concentración y la seguridad en uno mismo, brindando una filosofía de vida más disciplinada, equilibrada y saludable.',
      buttonText: 'Descúbrelo',
      icon: 'fa-wand-magic-sparkles'
    },
    {
      id: 6,
      imageUrl: 'https://res.cloudinary.com/dz1vsm25f/image/upload/f_auto,q_auto/entrenamiento_oq5evd.jpg',
      title: 'Beneficios del entrenamiento',
      details: 'Entrenar Taekwondo ofrece una amplia gama de beneficios físicos y mentales. A nivel físico, mejora la flexibilidad, fuerza, coordinación, resistencia y reflejos; además, fortalece el sistema cardiovascular y aumenta la capacidad pulmonar. <br> En el aspecto mental, fomenta la disciplina, el respeto, la autoconfianza y ayuda a reducir el estrés. También contribuye a mejorar la concentración, la autoestima y las habilidades de liderazgo, fortaleciendo así tanto el cuerpo como la mente.',
      buttonText: 'Descúbrelos',
      icon: 'fa-seedling'
    },
    {
      id: 7,
      imageUrl: 'https://res.cloudinary.com/dz1vsm25f/image/upload/f_auto,q_auto/coach_eo2v5r.jpg',
      title: 'Objetivos del entrenamiento',
      details: `<p>El Taekwondo no se enfoca solo en formar atletas, sino en formar mejores personas. Por eso, nuestros objetivos específicos buscan impulsar el crecimiento integral de cada practicante:</p>
        <ul>
          <li>Fomentar una formación integral basada en el deporte, los valores y la convivencia, permitiendo que cada estudiante se destaque tanto en el dojang como en su vida diaria.</li>
          <li>Desarrollar la constancia, la paciencia y la concentración, fortaleciendo el carácter, la disciplina y la capacidad de superación personal.</li>
          <li>Impulsar el avance progresivo a través de pruebas de ascenso de cinturón, reflejando el crecimiento físico, técnico y mental de cada estudiante.</li>
          <li>Combatir el estrés mediante la práctica disciplinada del Taekwondo, promoviendo el autocontrol, el manejo de las emociones y la resiliencia.</li>
          <li>Crear alternativas sanas para la juventud, incentivando la práctica del Taekwondo tanto a nivel recreativo como competitivo y alejando a los jóvenes del ocio improductivo y los malos hábitos.</li>
        </ul>`,
      buttonText: 'Averígualos',
      icon: 'fa-bullseye'
    },
    {
      id: 8,
      imageUrl: 'https://res.cloudinary.com/dz1vsm25f/image/upload/f_auto,q_auto/entrenar_iydenz.jpg',
      title: 'Importancia de entrenar en grupo',
      details: 'El Taekwondo también es convivencia, apoyo y comunidad. Entrenar en grupo fortalece el espíritu de equipo: el compañero deja de ser un adversario y se convierte en alguien que te motiva, te corrige y te impulsa a mejorar. Los practicantes más avanzados comparten sus conocimientos con quienes están comenzando, guiándolos en el aprendizaje de posiciones, patadas, defensas y formas. <br> Este ambiente de colaboración crea una base sólida tanto en lo deportivo como en lo personal, favoreciendo la construcción de lazos de amistad, el desarrollo de habilidades sociales y la formación de un carácter más maduro, seguro y respetuoso.',
      buttonText: 'Conócela',
      icon: 'fa-question-circle'
    },
    {
      id: 9,
      imageUrl: 'https://res.cloudinary.com/dz1vsm25f/image/upload/f_auto,q_auto/leon_q3fdlj.png',
      title: '¿Por qué elegir Mundo Marcial?',
      details: 'Mundo Marcial cuenta con entrenadores altamente calificados y un ambiente diseñado para potenciar tus habilidades en las artes marciales. Más que una academia donde perfeccionas tu dominio del Taekwondo, somos una familia que te acompaña en cada etapa de tu crecimiento deportivo y personal.',
      buttonText: 'Elígenos',
      icon: 'fa-fire'
    }
  ];

  constructor() { }

  ngOnInit(): void { }

  toggleCard(cardId: number): void {
    this.activeCard = this.activeCard === cardId ? null : cardId;
  }

  setHoveredCard(cardId: number | null): void {
    this.hoveredCard = cardId;
  }
}