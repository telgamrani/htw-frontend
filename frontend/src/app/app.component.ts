import { Component } from '@angular/core';

@Component({
  selector: 'app-htw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  onActivate(event) {
    window.scroll(0,0);
  }
}
