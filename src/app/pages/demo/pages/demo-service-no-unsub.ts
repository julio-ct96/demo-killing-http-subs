import { ChangeDetectionStrategy, Component, DestroyRef, OnInit, inject } from '@angular/core';
import { DemoHttp } from '../services/demo-http';

@Component({
  selector: 'app-demo-service-no-unsub',
  imports: [],
  providers: [DemoHttp],
  template: `
    <div class="p-6 rounded-lg bg-red-50 border border-red-200">
      <h3 class="text-lg font-semibold text-red-800 mb-2">Local service — WITHOUT unsubscribe</h3>
      <p class="text-sm text-red-700">
        Uses a component-scoped service. The service is destroyed with the component (🟠),
        but the subscription still fires after destruction.
      </p>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoServiceNoUnsub implements OnInit {
  private readonly service = inject(DemoHttp);
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.destroyRef.onDestroy(() => {
      console.log('🟡 [NO unsub + service] Component destroyed');
    });

    this.service.getDelayedData().subscribe({
      next: () =>
        console.log(
          '🔴 [NO unsub + service] CALLBACK FIRED — component destroyed? Check for 🟡 above'
        ),
      complete: () => console.log('🔴 [NO unsub + service] COMPLETE — observable finished'),
    });
  }
}
