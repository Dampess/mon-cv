import { Component, HostListener, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.handleScroll(); // Vérifie la visibilité lors de l'initialisation
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.handleScroll(); // Écouteur de défilement
  }

  private handleScroll(): void {
    const timelineItems =
      this.el.nativeElement.querySelectorAll('.timeline-content');
    const windowHeight = window.innerHeight;

    timelineItems.forEach((item: HTMLElement) => {
      const itemTop = item.getBoundingClientRect().top;

      // Vérifiez si l'élément est dans la fenêtre
      if (itemTop < windowHeight * 0.8 && itemTop > 0) {
        item.classList.add('visible'); // Rendre visible
        item.classList.remove('disappearing'); // Retirer la classe de disparition
      } else {
        item.classList.remove('visible'); // Retirer la classe de visibilité
        item.classList.add('disappearing'); // Ajouter la classe de disparition
      }
    });

    // Vérifiez la visibilité de la section d'expérience elle-même
    const experienceSection =
      this.el.nativeElement.querySelector('.experience');
    const sectionTop = experienceSection.getBoundingClientRect().top;

    if (sectionTop < windowHeight * 0.8) {
      experienceSection.classList.add('visible'); // Rendre visible
    } else {
      experienceSection.classList.remove('visible'); // Masquer
    }
  }
}
