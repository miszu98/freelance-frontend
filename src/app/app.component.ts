import { Component, HostListener, ViewChild } from '@angular/core';
import { CarouselComponent } from 'angular-responsive-carousel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Freelance';


  @ViewChild('carousel') declare carousel: CarouselComponent;

  popularServicesImages = [
    {path: '../assets/images/logo-design-2x.jpg'},
    {path: '../assets/images/social-2x.jpg'},
    {path: '../assets/images/voiceover-2x.jpg'},
    {path: '../assets/images/wordpress-2x.jpg'},
    {path: '../assets/images/animated-explainer-2x.jpg'}
  ];

  ngOnInit() {
    
  }

  @HostListener('window:resize', ['$event'])
  onWindoResize(event: any) {
    if (window.innerWidth <= 660) {
      this.carousel.cellsToShow = 1;
      return;
    }
    if (window.innerWidth <= 1150) {
      this.carousel.cellsToShow = 2;
      return;
    }
    if (window.innerWidth > 1800) {
      this.carousel.cellsToShow = 5;
      return;
    }
    if (window.innerWidth <= 1550) {
      this.carousel.cellsToShow = 3;
      return;
    } 
    if (window.innerWidth <= 1800) {
      this.carousel.cellsToShow = 4;
      return;
    }

    console.log(window.innerWidth);
 

    
  }

}
