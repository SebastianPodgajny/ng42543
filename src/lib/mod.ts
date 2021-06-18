import { Component, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'lib-button',
  template: `Button`
})
export class ButtonComponent {}


@NgModule({
  declarations: [ButtonComponent],
  imports: [],
  exports: [ButtonComponent],
})
export class ButtonModule {}
