import { Directive, ElementRef, Renderer } from '@angular/core';

enum CardType { VISA = 'visa', 
      MASTERCARD = 'mastercard', 
      AMERICAN_EXPRESS = 'american-express', 
      UNKNOWN = 'unknown'}


@Directive({
  selector: '[appBigText]'
})
export class BigTextDirective{

  constructor(elem: ElementRef, renderer: Renderer) {
    renderer.setElementStyle(elem.nativeElement, 'color', '#EEBA33');
 }



}
