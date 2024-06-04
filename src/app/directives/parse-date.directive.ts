import {
  Directive,
  HostListener,
  ElementRef,
  Renderer2,
  forwardRef,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  selector: '[appParseDate]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ParseDateDirective),
      multi: true,
    },
  ],
})
export class ParseDateDirective implements ControlValueAccessor {
  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  @HostListener('input', ['$event.target.value'])
  onInput(value: string): void {
    const parsedDate = this.parseDateString(value);
    this.onChange(parsedDate);
    this.onTouched();
  }

  writeValue(value: any): void {
    const formattedValue = this.formatDateString(value);
    this.renderer.setProperty(this.el.nativeElement, 'value', formattedValue);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.renderer.setProperty(this.el.nativeElement, 'disabled', isDisabled);
  }

  private parseDateString(dateString: string): string {
    const [day, month, year] = dateString
      .split('/')
      .map((part) => parseInt(part, 10));
    const date = new Date(year, month - 1, day);
    return date.toISOString().split('T')[0]; // Retorna no formato yyyy-MM-dd
  }

  private formatDateString(dateString: string): string {
    if (!dateString) return '';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString; // Retorna a string original se a data for inválida
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
}
