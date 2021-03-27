import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  quotes:Quote[] = [
    new Quote ('Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.','MARTIN LUTHER KING (JR.)','Jane Faith',  new Date(2021,3,26),   0,  0),
    new Quote ('Some cause happiness wherever they go; others, whenever they go.','OSCAR WILDE.','Gregory James',  new Date(2021,3,26),   0,  0),
    new Quote ('Victory has a thousand fathers, but defeat is an orphan.','JOHN F. KENNEDY.','Jim Harper',  new Date(2021,3,10),   0,  0),
    new Quote ('If you are  walking down the right path and you are willing to keep walking, eventually you will make progress..','BARRACK OBAMA.','Dwight Schruit',  new Date(2021,3,10),   0,  0),
  ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
 
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    this.quotes.push(quote)
  }

  deleteQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1)
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
