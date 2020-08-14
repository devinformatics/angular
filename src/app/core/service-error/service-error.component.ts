import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-service-error',
  templateUrl: './service-error.component.html',
  styleUrls: ['./service-error.component.scss']
})
export class ServiceErrorComponent implements OnInit {
  constructor(private route: Router) { }

  ngOnInit() {
    this.route.navigateByUrl('/login');
  }

}
