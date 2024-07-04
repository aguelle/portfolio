import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgClass],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  // Variable pour stocker l'index de l'élément actif
  activeIndex: number = 0;

  // Fonction pour définir l'élément actif
  setActive(index: number) {
      // Réinitialisez la classe "active" de l'ancien élément
      const prevActiveElement = document.querySelector('.active');
      if (prevActiveElement) {
          prevActiveElement.classList.remove('active');
      }

      // Définissez la classe "active" sur le nouvel élément
      const newActiveElement = document.querySelectorAll('li')[index];
      newActiveElement.classList.add('active');

      // Mettez à jour l'index actif
      this.activeIndex = index;
  }
}