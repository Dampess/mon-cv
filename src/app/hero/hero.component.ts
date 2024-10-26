import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  scrollY: number = 0;

  ngOnInit() {
    this.updateHeroOpacity();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.updateHeroOpacity();
  }

  private updateHeroOpacity() {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const heroHeight = heroSection.offsetHeight;

      // Réduisez l'opacité et appliquez la translation vers le haut en fonction du défilement
      const opacity = Math.max(0, 1 - scrollTop / (heroHeight * 0.5));
      const translateY = Math.min(100, scrollTop / 4);

      heroSection.style.opacity = opacity.toString();
      heroSection.style.transform = `translateY(-${translateY}px)`;
    }
  }
}
