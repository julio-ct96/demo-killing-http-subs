import { ChangeDetectionStrategy, Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DemoHttp } from '../services/demo-http';

@Component({
  selector: 'app-demo-service-with-unsub',
  imports: [],
  providers: [DemoHttp],
  template: `
    <div class="p-6 rounded-lg bg-green-50 border border-green-200">
      <h3 class="text-lg font-semibold text-green-800 mb-2">Local service — WITH takeUntilDestroyed</h3>
      <p class="text-sm text-green-700">
        Uses a component-scoped service with <code class="bg-green-100 px-1 rounded">takeUntilDestroyed</code>.
        Navigate away — the request is <strong>canceled</strong> and no callback fires.
      </p>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoServiceWithUnsub implements OnInit {
  private readonly service = inject(DemoHttp);
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.destroyRef.onDestroy(() => {
      console.log('🟢 [WITH unsub + service] Component destroyed');
    });

    this.service
      .getDelayedData()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () =>
          console.log(
            '🟢 [WITH unsub + service] CALLBACK FIRED — this should NOT appear if navigated away'
          ),
        complete: () => console.log('🟢 [WITH unsub + service] COMPLETE — observable finished'),
      });
  }
}
