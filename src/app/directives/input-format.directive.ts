import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('format') format: string;

  @HostListener('blur') onBlur() {
    const value: string = this.x.nativeElement.value;
    if (this.format === 'uppercase') {
      this.x.nativeElement.value = value.toUpperCase();
    } else if (this.format === 'lowercase') {
      this.x.nativeElement.value = value.toLowerCase();
    }
    console.log('On Blur...');
  }

  constructor(private x: ElementRef) { }

}
