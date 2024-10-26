import { Component, HostListener, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.handleScroll(); // Vérifie la visibilité lors de l'initialisation
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.handleScroll(); // Écouteur de défilement
  }

  private handleScroll(): void {
    const skillsSection = this.el.nativeElement.querySelector('.skills');
    const sectionTop = skillsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Vérifiez si la section est visible
    if (sectionTop < windowHeight * 0.55) {
      skillsSection.classList.add('visible'); // Rendre visible
    } else {
      skillsSection.classList.remove('visible'); // Masquer
    }
  }
}
