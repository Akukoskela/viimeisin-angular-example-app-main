import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-example-app';
  toolbarText = 'Dev-ops-kurssin harjoitusprojekti';
  h3Text='Angular unit testing tutorials'
}
