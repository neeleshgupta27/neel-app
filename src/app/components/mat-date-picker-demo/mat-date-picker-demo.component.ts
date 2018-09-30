import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
//import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.

//import * as moment from 'moment';
//console.log('version', moment.version);

// tslint:disable-next-line:no-duplicate-imports
//import {default as _rollupMoment} from 'moment';

//const moment = _rollupMoment || _moment;

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
/*export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
*/

@Component({
  selector: 'app-mat-date-picker-demo',
  templateUrl: './mat-date-picker-demo.component.html',
  styleUrls: ['./mat-date-picker-demo.component.css'],
  providers: [
        // The locale would typically be provided on the root module of your application. We do it at
        // the component level here, due to limitations of our example generation script.
        
        //{provide: MAT_DATE_LOCALE, useValue: 'en-EN'},
    
        // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
        // `MatMomentDateModule` in your applications root module. We provide it at the component level
        // here, due to limitations of our example generation script.
        
        //{provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
        //{provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
        // MY_FORMATS
      ],
})
export class MatDatePickerDemoComponent implements OnInit {

  date = new FormControl(new Date());
  //momentDate = new FormControl(moment());
  serializedDate = new FormControl((new Date()).toISOString());

  startDate = new Date(2018,3,1); // 3 indicate month (0=jan, 3=apr)

  minDate = new Date(2018,8, 4);
  maxDate = new Date(2018, 8, 21);

  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  //picker6
  events: string[] = [];

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }

  constructor(private adapter: DateAdapter<any>) { }

  ngOnInit() {
  }

  //picker9
  french() {
    this.adapter.setLocale('fr');
  }

  english() {
    this.adapter.setLocale('en');
  }
  hindi() {
    this.adapter.setLocale('hi');
  }

}
