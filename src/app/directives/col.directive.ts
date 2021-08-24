import { Directive, ElementRef, Input } from '@angular/core';
import { ColSize } from '@app-types';
import { overrideCssClass } from '@app/utils/functions';

@Directive({
  selector: `
    [xs],
    [sm],
    [md],
    [lg],
    [xl],
    [xxl],
    [col]
  `,
})
export class ColDirective {
  @Input()
  set xs(value: ColSize) {
    this.setColClass('col-xs-', value);
  }

  @Input()
  set sm(value: ColSize) {
    this.setColClass('col-sm-', value);
  }

  @Input()
  set md(value: ColSize) {
    this.setColClass('col-md-', value);
  }

  @Input()
  set lg(value: ColSize) {
    this.setColClass('col-lg-', value);
  }

  @Input()
  set xl(value: ColSize) {
    this.setColClass('col-xl-', value);
  }

  @Input()
  set xxl(value: ColSize) {
    this.setColClass('col-xxl-', value);
  }

  constructor(private elRef: ElementRef) {
    const elementClassList = elRef.nativeElement.classList;
    elementClassList.add('col');
  }

  private setColClass(prefix: string, value: any) {
    overrideCssClass(
      this.elRef,
      new RegExp(`/^${prefix}`),
      `${prefix}${value}`
    );
  }
}
