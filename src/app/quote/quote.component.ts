import { Component, OnInit } from '@angular/core';
import { Quote } from "../quote";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  public quotes: Quote[] = [
    new Quote(1, "Daisy Arusey", "Humanity is acquiring all the right technology for all the wrong reasons.", "R. Buckminster Fuller", new Date(2018, 6, 7), 0, 0),
    new Quote(2, "Daisy Arusey", "Technology is a word that describes something that doesn’t work yet.", "Douglas Adams", new Date(2018, 1, 12), 0, 0),
    new Quote(3, "Daisy Arusey", "One machine can do the work of fifty ordinary men. No machine can do the work of one extraordinary man.", "Elbert Hubbard", new Date(2018, 11, 7), 0, 0),
    new Quote(4, "Daisy Arusey", "The art challenges the technology, and the technology inspires the art.", "John Lasseter", new Date(2018, 10, 7), 0, 0),
  ]

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.push(quote)
  }

  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  quoteDelete(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }

  numberOfLikes : number=0;
  numberOfDislikes =0;

  likeButtonClick(i) {
    this.quotes[i].numberOfLikes++;
  }

  

  dislikeButtonClick(i) {
    this.quotes[i].numberOfDislikes++;
  }

  preNum:number
  lastNum:number
  counter:number

  highestUpvote(){
    this.preNum = 0
    this.lastNum = 0

    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].numberOfLikes;
      if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }
    return  this.preNum
  }
  

  constructor() { }

  ngOnInit() { }

}
