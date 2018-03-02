import { maskDigitValidators, neverValidator } from './digit_validators';
import { Directive, OnInit, Input, ElementRef, HostListener } from '@angular/core';
import { SPECIAL_CHARACTERS, TAB, overWriteCharAtPosition, LEFT_ARROW, RIGHT_ARROW, BACKSPACE, DELETE } from './mask.utils';

@Directive({
  selector: '[au-mask]'
})
export class AuMaskDirective implements OnInit {

  @Input('au-mask')
  mask = ''

  input: HTMLInputElement;

  fullFieldSelected = false;

  constructor(el: ElementRef) { 
    this.input = el.nativeElement;
  }

  ngOnInit() {
    this.input.value = this.buildPlaceHolder()
  }

  @HostListener("select", ['$event'])
  onSelect($event: UIEvent) {
    this.fullFieldSelected = this.input.selectionStart == 0 && 
            this.input.selectionEnd === this.input.value.length
  }

  @HostListener("keydown", ['$event', '$event.keyCode'])
  onKeyDown($event: KeyboardEvent, keyCode) {

    if ($event.metaKey || $event.ctrlKey) {
      return;
    }

    if (keyCode !== TAB) {
      $event.preventDefault();
    }
    
    const key = String.fromCharCode(keyCode);
    const cursorPos = this.input.selectionStart;

    if (this.fullFieldSelected) {
      this.input.value = this.buildPlaceHolder();
      this.handleRightArrow(-1);
    }

    switch(keyCode) {
      case LEFT_ARROW:
        this.handleLeftArrow(cursorPos);
        return;

      case RIGHT_ARROW:
        this.handleRightArrow(cursorPos);
        return;

      case BACKSPACE:
        this.handleBackspace(cursorPos);
        return;        

      case DELETE:
        this.handleDelete(cursorPos);
        return;        
    }

    const maskDigit = this.mask.charAt(cursorPos)
    const digitValidator = maskDigitValidators[maskDigit] || neverValidator

    if (digitValidator(key)) {
      overWriteCharAtPosition(this.input, cursorPos, key)
      this.handleRightArrow(cursorPos)
    }
  }

  handleLeftArrow(cursorPos) {
    const valueBeforeCursor = this.input.value.slice(0, cursorPos);

    let previousPos = +cursorPos
    valueBeforeCursor.split('').forEach((char, index) => {
      if (!SPECIAL_CHARACTERS.includes(char)) {
        previousPos = index
      }
      
    })

    this.input.setSelectionRange(previousPos, previousPos);    
  }

  handleRightArrow(cursorPos) {
    const valueAfterCursor = this.input.value.slice(cursorPos + 1);

    let nextPos = valueAfterCursor.split('').findIndex((char) => {
      return (!SPECIAL_CHARACTERS.includes(char))
    })

    this.input.setSelectionRange(cursorPos + 1 + nextPos, cursorPos + 1 + nextPos);
    return;
  }

  handleBackspace(cursorPos) {
    const valueBeforeCursor = this.input.value.slice(0, cursorPos);

    let previousPos = +cursorPos
    valueBeforeCursor.split('').forEach((char, index) => {
      if (!SPECIAL_CHARACTERS.includes(char)) {
        previousPos = index
      }      
    })

    if (previousPos >= 0) {
      overWriteCharAtPosition(this.input, previousPos, '_');
      this.input.setSelectionRange(previousPos, previousPos);
    }
  }

  handleDelete(cursorPos) {
    overWriteCharAtPosition(this.input, cursorPos, '_');
    this.input.setSelectionRange(cursorPos, cursorPos);
  }

  buildPlaceHolder(): string {

    const chars = this.mask.split('')

    return chars.reduce((result, char) => {
      return result += SPECIAL_CHARACTERS.includes(char) ? char : '_'
    }, '');

  }

}

