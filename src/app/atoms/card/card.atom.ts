import { Component, ElementRef, HostBinding, Input } from '@angular/core';
import { Mixin } from '@app/decorators';
import {
  DefaultCssClass,
  DefaultCssClassTrait,
} from '@app/traits/default-css-class';
import { Styling, StylingTrait } from '@app/traits/styling';
import * as CSS from 'csstype';

@Component({
  selector: 'card',
  template: ` <ng-content></ng-content> `,
  styles: [``],
})
@Mixin([StylingTrait, DefaultCssClassTrait])
export class CardAtom implements Styling, DefaultCssClass {
  @HostBinding()
  @Input()
  class: string;

  @Input() style: CSS.Properties;
  defaultCssClass: string = 'card';

  initDefaultDisplay: () => void;
  initDefaultCssClass: () => void;

  constructor(private elRef: ElementRef) {
    this.initDefaultDisplay();
    this.initDefaultCssClass();
  }
}
