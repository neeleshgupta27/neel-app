import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-template-demo',
  templateUrl: './ng-template-demo.component.html',
  styleUrls: ['./ng-template-demo.component.css']
})
export class NgTemplateDemoComponent implements OnInit {

  isavailable = false;
  
  constructor() { }

  ngOnInit() {
  }

}
