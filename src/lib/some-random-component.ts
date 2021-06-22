import {Component, NgModule} from "@angular/core";

interface SomeInterface {
  prop: number
}

@Component({
  template: `hello`
})
export class SomeRandomComponent<T extends SomeInterface> {

}

@NgModule({
  declarations: [SomeRandomComponent],
  exports: [SomeRandomComponent]
})
export class SomeRandomModule {}
