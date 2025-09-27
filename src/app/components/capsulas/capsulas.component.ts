import { Component } from '@angular/core';

@Component({
  selector: 'app-capsulas',
  templateUrl: './capsulas.component.html',
  styleUrls: ['./capsulas.component.scss']
})
export class CapsulasComponent {
  activeCard: number | null = null;
  hoveredCard: number | null = null;

  toggleCard(cardId: number): void {
    this.activeCard = this.activeCard === cardId ? null : cardId;
  }

  setHoveredCard(cardId: number | null): void {
    this.hoveredCard = cardId;
  }
}