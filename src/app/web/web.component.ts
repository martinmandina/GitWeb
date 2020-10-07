import { Component, OnInit } from '@angular/core';
import { WebService } from '../web-service/web.service'  

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit {
  user:any;
  constructor(private webService:WebService) {
       this.webService.getUser().subscribe(user => {
          this.user = user;
          console.log(this.user);
       });
   }

     
  ngOnInit() {
  }

}
