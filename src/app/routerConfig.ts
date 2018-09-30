// routerConfig.ts

import { Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { IndexComponent } from './components/index/index.component';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { DirectiveDemoComponent } from './components/directive-demo/directive-demo.component';
import { DataBindingDemoComponent } from './components/data-binding-demo/data-binding-demo.component';
import { EventBindingDemoComponent } from './components/event-binding-demo/event-binding-demo.component';
import { NgTemplateDemoComponent } from './components/ng-template-demo/ng-template-demo.component';
import { MatDatatableDemoComponent } from './components/mat-datatable-demo/mat-datatable-demo.component';
import { MatDatePickerDemoComponent } from './components/mat-date-picker-demo/mat-date-picker-demo.component';

export const appRoutes: Routes = [
  { path: 'create', 
    component: CreateComponent 
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  { path: 'index',
    component: IndexComponent
  },
  { path: 'pipe-demo',
    component: PipeDemoComponent
  },
  { path: 'directive-demo',
    component: DirectiveDemoComponent
  },
  { path: 'data-binding-demo',
    component: DataBindingDemoComponent
  },
  { path: 'event-binding-demo',
    component: EventBindingDemoComponent
  },
  { path: 'ng-template-demo',
    component: NgTemplateDemoComponent
  },
  { path: 'mat-datatable-demo',
    component: MatDatatableDemoComponent
  },
  { path: 'mat-date-picker-demo',
    component: MatDatePickerDemoComponent
  }
];