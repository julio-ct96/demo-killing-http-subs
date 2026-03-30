import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-demo-service-no-unsub',
  imports: [],
  template: `
    <p>
      demo-service-no-unsub works!
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoServiceNoUnsub {

}
