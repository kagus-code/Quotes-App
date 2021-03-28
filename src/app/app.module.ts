import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { LandingComponent } from './landing/landing.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { TimePassedPipe } from './time-passed.pipe';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';


@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    LandingComponent,
    QuoteDetailsComponent,
    TimePassedPipe,
    QuotesFormComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
