import { DestroyRef, Injectable, OnDestroy, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DemoHttp implements OnDestroy {
  private readonly http = inject(HttpClient);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    this.destroyRef.onDestroy(() => {
      console.log('🟠 [Service] DestroyRef.onDestroy fired — service destroyed');
    });
  }

  ngOnDestroy(): void {
    console.log('🟠 [Service] ngOnDestroy fired');
  }

  getDelayedData(): Observable<unknown> {
    console.log('🟠 [Service] Creating HTTP request (5s delay)...');
    return this.http.get('https://httpbin.org/delay/5');
  }
}
