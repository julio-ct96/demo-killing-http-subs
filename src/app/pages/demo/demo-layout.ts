import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-demo-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="max-w-4xl mx-auto p-6 space-y-6">
      <h1 class="text-2xl font-bold text-gray-900">
        HttpClient Unsubscribe Demo
      </h1>

      <!-- Direct in component -->
      <section>
        <h2 class="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
          Direct in component
        </h2>
        <nav class="flex gap-2">
          <a
            routerLink="no-unsub"
            routerLinkActive="bg-blue-600 text-white"
            class="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Without unsub
          </a>
          <a
            routerLink="with-unsub"
            routerLinkActive="bg-blue-600 text-white"
            class="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            With unsub
          </a>
        </nav>
      </section>

      <!-- From local service (providers) -->
      <section>
        <h2 class="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
          From local service (providers)
        </h2>
        <nav class="flex gap-2">
          <a
            routerLink="service-no-unsub"
            routerLinkActive="bg-blue-600 text-white"
            class="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Without unsub
          </a>
          <a
            routerLink="service-with-unsub"
            routerLinkActive="bg-blue-600 text-white"
            class="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            With unsub
          </a>
        </nav>
      </section>

      <!-- Child route outlet -->
      <div class="mt-4">
        <router-outlet />
      </div>

      <!-- Instructions panel -->
      <div class="mt-8 p-6 rounded-lg bg-gray-50 border border-gray-200 space-y-4">
        <h2 class="text-lg font-semibold text-gray-900">How to test</h2>
        <ol class="list-decimal list-inside space-y-2 text-sm text-gray-700">
          <li>Open <strong>Console</strong> and <strong>Network</strong> in DevTools</li>
          <li>Click on a tab above</li>
          <li>Before 5 seconds pass, click on a <strong>different tab</strong></li>
          <li>Observe what happens in the console and network panel</li>
        </ol>

        <h2 class="text-lg font-semibold text-gray-900 mt-6">Expected results</h2>
        <ul class="space-y-3 text-sm text-gray-700">
          <li>
            <span class="font-mono text-red-600">WITHOUT unsub</span> —
            The 🔴 callback fires AFTER the component is destroyed.
            The HTTP request is NOT canceled in the Network tab.
          </li>
          <li>
            <span class="font-mono text-green-600">WITH unsub</span> —
            The 🟢 callback does NOT fire.
            The request appears as <code class="bg-gray-200 px-1 rounded">(canceled)</code> in Network.
          </li>
          <li>
            <span class="font-mono text-orange-500">Local service</span> —
            The service is destroyed with the component (🟠), but the subscription
            still survives without <code class="bg-gray-200 px-1 rounded">takeUntilDestroyed</code>.
          </li>
        </ul>
      </div>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoLayout {}
