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
    new Quote ('Some cause happiness wherever they go; others, whenever they go.','OSCAR WILDE.','Gregory James',  new Date(2021,3,26,15,10,3,500),   0,  0),
    new Quote ('If you are  walking down the right path and you are willing to keep walking, eventually you will make progress..','BARRACK OBAMA.','Dwight Schruit',  new Date(2021,3,10),   0,  0),
    new Quote ('Victory has a thousand fathers, but defeat is an orphan.','JOHN F. KENNEDY.','Jim Harper',  new Date(2021,3,10),   0,  0),
    
  ];


  
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
 
  

  deleteQuote(isComplete, index){
 if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete?`)
      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }
  addNewQuote(quote){
    quote.upvote = 0;
    quote.downvote = 0;
    quote.date = new Date;
    this.quotes.push(quote)
    console.log(quote.date)
    
  }
 

  downVote(quote){
    quote.downvote ++;
  

  }
  upVote(quote){
  quote.upvote ++;

    
 }

 
}
