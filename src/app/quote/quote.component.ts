import { Component, OnInit } from '@angular/core';
import { Quote } from "../quote";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

 public quotes: Quote[] = [
    new Quote(1, "Daisy Arusey", "It’s supposed to be automatic, but actually you have to push this button.", "John Brunner"),
    new Quote(2, "Daisy Arusey", "Humanity is acquiring all the right technology for all the wrong reasons.", "R. Buckminster Fuller"),
    new Quote(3, "Daisy Arusey", "Technology is a word that describes something that doesn’t work yet.", "Douglas Adams"),
    new Quote(4, "Daisy Arusey", "One machine can do the work of fifty ordinary men. No machine can do the work of one extraordinary man.", "Elbert Hubbard"),
    new Quote(5,"Daisy Arusey","The art challenges the technology, and the technology inspires the art.", "John Lasseter")
  ]

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit() {}

}
