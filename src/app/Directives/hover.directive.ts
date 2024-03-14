import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
 
  constructor(private elem:ElementRef) { }
  @HostListener('mouseenter')
  hoverfun(){
    console.log('hover');
    
    var element = this.elem.nativeElement;
    element.style.opacity = 0
  }
  
  @HostListener('mouseout')
  hoveroutfun(){
    console.log('hover');
    
    var element = this.elem.nativeElement;
    element.style.opacity = 1
  }
}
