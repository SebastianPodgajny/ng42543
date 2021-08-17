import {Component, Input, NgModule} from "@angular/core";
import {InputType} from "./types";

interface SomeInterface {
  prop: number
}

@Component({
  template: `hello`
})
export class SomeRandomComponent<T extends SomeInterface> {
 @Input() public inputProperty: InputType = 'a';
}

@NgModule({
  declarations: [SomeRandomComponent],
  exports: [SomeRandomComponent]
})
export class SomeRandomModule {}
