import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote ('Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.','Martin Luther King, Jr.','Jane Faith',  new Date(2021,3,26),   0,  0),
    new Quote ('Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.','Martin Luther King, Jr.','Jane Faith',  new Date(2021,3,26),   0,  0),
    new Quote ('Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.','Martin Luther King, Jr.','Jane Faith',  new Date(2021,3,26),   0,  0),
    new Quote ('Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.','Martin Luther King, Jr.','Jane Faith',  new Date(2021,3,26),   0,  0),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
