import { Component, OnInit, Input, AfterViewChecked, AfterContentInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, AfterViewChecked{
  navigateURL;
  constructor(private route: Router, private activatedRoute: ActivatedRoute) {
}
  //@Input() value;
  value;
  ngOnInit() {
    //this.value = localStorage.getItem("modelId");
    //console.log(this.value);
    //this.navigateURL = this.route.url.substring(0, this.route.url.indexOf("("));
  }
  ngAfterViewChecked(): void {
    //this.value = localStorage.getItem("modelId");
    //console.log(this.value);
   // this.navigateURL = this.route.url.substring(0, this.route.url.indexOf("("));
  }
  redirectComponent1() {
    $(".modal-backdrop").remove();
    $("#wnctyModal").css('display', 'none');
    //this.route.navigate([{ outlets: { modal: null } }], { relativeTo: this.activatedRoute.parent });
    //this.navigateURL = this.route.url.substring(0, this.route.url.indexOf("("));
    //this.route.navigateByUrl(`${this.navigateURL}`);
  }
}
