import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote ('They say a person needs just three things to be truly happy in this world: someone to love, something to do, and something to hope for.','Tom Bodett','Stl SuperG',  new Date(2019,8,14),   0,  0),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
