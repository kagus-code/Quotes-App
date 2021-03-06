import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Quote} from '../quote'

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  newQuote = new Quote("", "", "", new Date(), 0, 0)
  @Output() addQuote = new EventEmitter<Quote>();
  @Output() emitNewQuote = new EventEmitter<any>();
  quotes: Quote [] = [];
  submitQuote(){
    this.emitNewQuote.emit(this.newQuote);
    this.addQuote.emit(this.newQuote);
    this.newQuote = new Quote("", "", "", new Date(), 0, 0);
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
