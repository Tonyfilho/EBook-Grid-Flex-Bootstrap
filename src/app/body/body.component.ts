import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ContentComponent, RouterOutlet],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
