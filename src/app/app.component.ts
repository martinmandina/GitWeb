import { Component } from '@angular/core';
import { WebComponent } from './web/web.component'
import { WebService } from './web-service/web.service'  
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GitWeb';
}
