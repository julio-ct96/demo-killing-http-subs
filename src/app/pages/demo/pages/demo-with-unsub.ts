import { ChangeDetectionStrategy, Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-demo-with-unsub',
  imports: [],
  template: `
    <div class="p-6 rounded-lg bg-green-50 border border-green-200">
      <h3 class="text-lg font-semibold text-green-800 mb-2">HttpClient direct — WITH takeUntilDestroyed</h3>
      <p class="text-sm text-green-700">
        Subscribes to a 5s delayed HTTP call with <code class="bg-green-100 px-1 rounded">takeUntilDestroyed</code>.
        Navigate away before it completes — the request will be <strong>canceled</strong> in the Network tab.
      </p>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoWithUnsub implements OnInit {
  private readonly http = inject(HttpClient);
  private readonly destroyRef = inject(DestroyRef);
  ngOnInit(): void {
    this.destroyRef.onDestroy(() => {
      console.log('🟢 [WITH unsub] ngOnDestroy fired');
    });

    console.log('🟢 [WITH unsub] HTTP request launched');
    this.http
      .get('https://httpbin.org/delay/5')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () =>
          console.log('🟢 [WITH unsub] CALLBACK FIRED — this should NOT appear if navigated away'),
        complete: () => console.log('🟢 [WITH unsub] COMPLETE — observable finished'),
      });
  }
}
