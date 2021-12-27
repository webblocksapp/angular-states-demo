import { Component, ElementRef, HostBinding, Input } from '@angular/core';
import { TypographyComponent } from '@app-types';
import { DisplayDirective } from '@app/directives/display.directive';
import { setTypographyClass } from '@app/utils/functions';

@Component({
  selector: 'typography',
  template: ` <ng-content></ng-content> `,
  providers: [DisplayDirective],
})
export class TypographyAtom {
  @HostBinding()
  @Input()
  class: string;

  @Input()
  set component(value: TypographyComponent) {
    this.setTypography(value);
  }

  constructor(
    private elRef: ElementRef,
    private displayDirective: DisplayDirective
  ) {}

  ngAfterContentInit(): void {
    if (this.component !== undefined) this.setTypography();
  }

  private setTypography(component?: TypographyComponent) {
    setTypographyClass(this.elRef, component, this.displayDirective.display);
  }
}
