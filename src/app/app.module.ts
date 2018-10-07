import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
  MatSortModule, MatTableModule, MatRippleModule   } from "@angular/material";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

  
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { appRoutes } from './routerConfig';
import { BigTextDirective } from './directives/big-text.directive';
import { FbDecimalFormatDirective } from './fb-decimal-format.directive';
import { NumberOnlyDirective } from './directives/number-only.directive';
import { ChangeTextDirective } from './change-text.directive';
import { SqrtPipe } from './pipes/app.sqrt';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { DirectiveDemoComponent } from './components/directive-demo/directive-demo.component';
import { DataBindingDemoComponent } from './components/data-binding-demo/data-binding-demo.component';
import { EventBindingDemoComponent } from './components/event-binding-demo/event-binding-demo.component';
import { NgTemplateDemoComponent } from './components/ng-template-demo/ng-template-demo.component';
import { MatDatatableDemoComponent } from './components/mat-datatable-demo/mat-datatable-demo.component';
import { MatSort } from '@angular/material';
import { MatDatePickerDemoComponent } from './components/mat-date-picker-demo/mat-date-picker-demo.component';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {NativeDateModule} from '@angular/material';
import {MAT_DATE_FORMATS} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { ModalDemoComponent } from './components/modal-demo/modal-demo.component';
import { ModalComponent } from './components/modal-demo/_directive';
import { ModalService } from './components/modal-demo/_service';
import { MatIconModule} from '@angular/material';
import { MatButtonModule } from '@angular/material/button';


//import {FormsModule, ReactiveFormsModule} from '@angular/forms';

export const MY_FORMATS = {
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

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CreateComponent,
    EditComponent,
    BigTextDirective,
    FbDecimalFormatDirective,
    NumberOnlyDirective,
    ChangeTextDirective,
    SqrtPipe,
    PipeDemoComponent,
    DirectiveDemoComponent,
    DataBindingDemoComponent,
    EventBindingDemoComponent,
    NgTemplateDemoComponent,
    MatDatatableDemoComponent,
    MatDatePickerDemoComponent,
    ModalDemoComponent,
    ModalComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule, 
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
		BrowserAnimationsModule,
    MatDatepickerModule,
    NativeDateModule,
    MatButtonModule, MatIconModule
  ],
  providers: [
    ModalService,
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

