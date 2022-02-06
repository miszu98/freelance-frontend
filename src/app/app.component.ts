import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Freelance';

  popularServicesImages = [
    {path: '../assets/images/logo-design-2x.jpg', text: 'testowy'},
    {path: '../assets/images/social-2x.jpg'},
    {path: '../assets/images/voiceover-2x.jpg'},
    {path: '../assets/images/wordpress-2x.jpg'},
    {path: '../assets/images/animated-explainer-2x.jpg'}
  ];

}
