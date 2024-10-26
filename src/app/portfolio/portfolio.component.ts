import { Component, HostListener, OnInit, ElementRef } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  projects = [
    {
      title: 'LouhaneMakeupArt',
      description: 'Site Vitre d`une maquilleuse professionnelle.',
      imageUrl: 'assets/images/louhaneMakeupArt.png',
      link: 'https://www.louhanemakeupart.fr/',
    },
    {
      title: 'ElèganceEnRime',
      description: 'Blog Mode et Musique.',
      imageUrl: 'assets/images/eleganceEnRime.png',
      link: 'https://elegance-en-rime.fr/',
    },
    {
      title: 'AstroPhysicoPédie',
      description: 'Un site statique pour les passionnés d`astro-physique.',
      imageUrl: 'assets/images/astroPhysicoPedie.png',
      link: 'https://dampess.github.io/astrophysicopedie/',
    },
    {
      title: 'Vacation-Booking',
      description: 'Projet d`un site de reservation en ligne.',
      imageUrl: 'assets/images/vacationBooking.png',
      link: 'https://dampess.github.io/vacation-booking-app/',
    },
    {
      title: 'Cook&Me',
      description: 'Projet d`un site de recette de cuisine.',
      imageUrl: 'assets/images/cookMe.png',
      link: 'https://dampess.github.io/Cook-Me/',
    },
    {
      title: 'Kandian',
      description: 'Clone d`un site de streaming.',
      imageUrl: 'assets/images/kandian.png',
      link: 'https://dampess.github.io/Kandian-projet-Vue.js-/',
    },
  ];

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.handleScroll(); // Vérifie la visibilité lors de l'initialisation
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.handleScroll(); // Écouteur de défilement
  }

  private handleScroll(): void {
    const portfolioSection = this.el.nativeElement.querySelector('.portfolio');
    const sectionTop = portfolioSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Vérifiez si la section est visible
    if (sectionTop < windowHeight * 0.55) {
      portfolioSection.classList.add('visible'); // Rendre visible
    } else {
      portfolioSection.classList.remove('visible'); // Masquer
    }
  }
}
