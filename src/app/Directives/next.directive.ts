import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNext]'
})
export class NextDirective {

  constructor(private el:ElementRef) { }
  @HostListener('click')
  nextfunction(){
    var element = this.el.nativeElement.parentElement.parentElement.children[1]
    let cards = element.getElementsByClassName("trending-products")
    element.append(cards[0])
    console.log(element);
    
    
  }
}
