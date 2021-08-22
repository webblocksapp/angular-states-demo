import { Component, ElementRef, HostBinding, Input } from '@angular/core';
import { Mixin } from '@decorators';
import { SpacingTrait, Spacing } from '@app/traits/spacing';
import { Styling, StylingTrait } from '@app/traits/styling';
import { ColSize, PaddingSize } from '@app/types';
import * as CSS from 'csstype';
import { GuttersSize } from '@app/types/gutters-size';

@Component({
  selector: 'box',
  template: `<ng-content></ng-content>`,
})
@Mixin([SpacingTrait, StylingTrait])
export class BoxAtom implements Spacing, Styling {
  /**
   * Declared trait properties
   */
  @HostBinding()
  @Input()
  class: string = '';

  @Input() style: CSS.Properties;
  @Input() xs: ColSize;
  @Input() sm: ColSize;
  @Input() md: ColSize;
  @Input() lg: ColSize;
  @Input() xl: ColSize;
  @Input() xxl: ColSize;
  @Input() padding: PaddingSize;
  @Input() paddingTop: PaddingSize;
  @Input() paddingRight: PaddingSize;
  @Input() paddingBottom: PaddingSize;
  @Input() paddingLeft: PaddingSize;
  @Input() p: PaddingSize;
  @Input() pt: PaddingSize;
  @Input() pr: PaddingSize;
  @Input() pb: PaddingSize;
  @Input() pl: PaddingSize;
  @Input() paddingX: PaddingSize;
  @Input() paddingY: PaddingSize;
  @Input() px: PaddingSize;
  @Input() py: PaddingSize;
  @Input() spacing: GuttersSize;
  @Input() spacingX: GuttersSize;
  @Input() spacingY: GuttersSize;

  initDefaultDisplay: () => void;

  constructor(private elRef: ElementRef) {
    this.initDefaultDisplay();
  }
}
