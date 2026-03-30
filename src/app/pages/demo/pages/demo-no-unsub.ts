import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-demo-no-unsub',
  imports: [],
  template: `
    <p>
      demo-no-unsub works!
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoNoUnsub {

}
