import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-fullpage',
  templateUrl: './fullpage.template.html',
  styleUrls: ['./fullpage.template.scss']
})
export class FullPageComponent implements OnInit {
  
  constructor() {
    
  }

  ngOnInit(): void {
   
    //const authenticated$ = this.store.select(isUserAuthorized).pipe(share());
  }

  

}
