import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuOpen: boolean = false;
  isScreenSmall: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) { 
    this.checkScreenSize();
    window.onresize = () => {
      this.checkScreenSize();
    }
  }

  toggleMenu() : void{
    this.menuOpen = !this.menuOpen;
  }
  checkScreenSize() {
    this.isScreenSmall = window.innerWidth < 768; // Example breakpoint
    if (!this.isScreenSmall) {
      this.menuOpen = true;
    }

  }
  redirectToGoogleForm() : void{
    this.document.location.href = 'https://forms.gle/kyhNqZyo6XbTaZUZ8';
  }
}
