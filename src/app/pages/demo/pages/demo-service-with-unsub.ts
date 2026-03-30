import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-demo-service-with-unsub',
  imports: [],
  template: `
    <p>
      demo-service-with-unsub works!
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoServiceWithUnsub {

}
