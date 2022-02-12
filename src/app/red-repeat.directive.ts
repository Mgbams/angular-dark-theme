import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRedRepeat]',
})
export class RedRepeatDirective {
  constructor(elem: ElementRef, renderer: Renderer2) {
    renderer.setStyle(elem.nativeElement, 'color', 'orange');
  }
}
