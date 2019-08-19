import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { globalAgent } from 'http';
// import { Quote } from '@angular/compiler';
import { Quote} from '../quote';
// import { from } from 'rxjs';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote=new Quote(0,"","","",new Date(),0,0);

  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote(){
    this.addQuote.emit(this.newQuote);
    this.newQuote = new Quote(0,"","","",new Date(),0,0)
  }

  constructor() { }

  ngOnInit() {
  }

}
