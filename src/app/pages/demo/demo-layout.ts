import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-demo-layout',
  imports: [],
  template: `
    <p>
      demo-layout works!
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoLayout {

}
