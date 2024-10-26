import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contacts = {
    email: 'descamps.florian2@gmail.com',
    phone: '+33 6 64 49 86 05',
    address: 'Lille Metropolitan Area',
    social: {
      linkedin: 'https://www.linkedin.com/in/florian-descamps-4729b418a/',
      github: 'https://github.com/Dampess',
    },
  };
}
