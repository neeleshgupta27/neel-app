import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { map }                from 'rxjs/operators';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  private idVal;
  constructor(private route: ActivatedRoute,
    private router: Router) {
    
   }

  ngOnInit() {

    //this.idVal = this.route.snapshot.params['id'];

    //this.route.params.subscribe(params => this._onRouteGetParams(params));
    //let id = this.route.snapshot.paramMap.get('id');
    console.log("id value:"+this.idVal);

    /*this.idVal = this.route
      .queryParamMap
      .pipe(map(params => params.get('id') || 'None'));

      console.log("id value:"+this.idVal);
    */
  }

}
