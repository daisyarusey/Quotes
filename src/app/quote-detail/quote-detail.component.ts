import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote:Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
    
  }

  numberOfLikes : number=0;

  likeButtonClick() {
    this.numberOfLikes++;
  }

  

  dislikeButtonClick() {
    this.numberOfLikes--;
  }

  // upVotes = 0;
  // downVotes =0;
  
  // like() {
  //   this.upVotes++;
  // }

  // dislike() {
  //   this.downVotes++;
  // }
  constructor() { }

  ngOnInit() {
  }

}
