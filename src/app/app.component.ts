import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AboutComponent,
    SkillsComponent,
    ContactComponent,
    ExperienceComponent,
    PortfolioComponent,
    HeaderComponent,
    HeroComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Correction ici
})
export class AppComponent {
  title = 'mon-cv';
}
