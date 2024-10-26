import { Component, HostListener, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.handleScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.handleScroll();
  }

  private handleScroll(): void {
    const aboutSection = this.el.nativeElement.querySelector('.about');
    const sectionTop = aboutSection.getBoundingClientRect().top;
    const sectionBottom = aboutSection.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    // Effet d'apparition
    if (sectionTop < windowHeight / 2) {
      aboutSection.classList.add('visible');
      aboutSection.classList.remove('disappearing');
    }

    // Effet de disparition progressif quand la section dépasse la fenêtre
    if (sectionBottom < windowHeight / 2 || sectionTop > windowHeight) {
      aboutSection.classList.remove('visible');
      aboutSection.classList.add('disappearing');
    }
  }
}
