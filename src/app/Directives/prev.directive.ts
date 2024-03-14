import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrev]'
})
export class PrevDirective {

  constructor(private el:ElementRef) { }
  @HostListener('click')
  nextfunction(){
    var element = this.el.nativeElement.parentElement.parentElement.children[1]
    let cards = element.getElementsByClassName("trending-products")
    element.prepend(cards[cards.length-1])
    console.log(element); 
    
  }
}
