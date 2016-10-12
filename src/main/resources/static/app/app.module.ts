import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }        from './app.component';
import { ChartsComponent }        from './charts.component';
import { TheoryComponent }        from './theory.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
     RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/charts',
        pathMatch: 'full'
      },
      {
        path: 'charts',
        component: ChartsComponent
      },
	  {
        path: 'theory',
        component: TheoryComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
	ChartsComponent,
	TheoryComponent
  ],
  
  
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

