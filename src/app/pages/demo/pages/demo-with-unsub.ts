import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-demo-with-unsub',
  imports: [],
  template: `
    <p>
      demo-with-unsub works!
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoWithUnsub {

}
