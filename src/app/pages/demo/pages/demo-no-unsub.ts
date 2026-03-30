import { ChangeDetectionStrategy, Component, DestroyRef, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-demo-no-unsub',
  imports: [],
  template: `
    <div class="p-6 rounded-lg bg-red-50 border border-red-200">
      <h3 class="text-lg font-semibold text-red-800 mb-2">HttpClient direct — WITHOUT unsubscribe</h3>
      <p class="text-sm text-red-700">
        Subscribes to a 5s delayed HTTP call without any cancellation operator.
        Navigate away before it completes and watch the console.
      </p>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoNoUnsub implements OnInit {
  private readonly http = inject(HttpClient);
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.destroyRef.onDestroy(() => {
      console.log('🟡 [NO unsub] ngOnDestroy fired');
    });

    this.http.get('https://httpbin.org/delay/5').subscribe({
      next: () =>
        console.log('🔴 [NO unsub] CALLBACK FIRED — component destroyed? Check for 🟡 above'),
      complete: () => console.log('🔴 [NO unsub] COMPLETE — observable finished'),
    });
  }
}
