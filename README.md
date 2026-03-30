# Demo: Killing HTTP Subscriptions

Interactive Angular demo that proves **not unsubscribing from HttpClient causes side effects on destroyed components — but NOT memory leaks**.

## What this demo proves

1. **HttpClient does not cause memory leaks** — the Observable completes automatically after the response arrives, so the subscription is cleaned up by RxJS itself.
2. **It does cause side effects on destroyed components** — if you don't unsubscribe, the `next` callback still fires after the component has been destroyed. This can trigger unintended state changes, navigation, or errors.
3. **Destroying a component-scoped service does NOT cancel its subscriptions** — even with `providers: [Service]` in the component decorator, active subscriptions created from that service survive its destruction.
4. **`takeUntilDestroyed` cancels the HTTP request at the network level** — the request shows as `(canceled)` in the Network tab, and the callback never fires.

## Demo scenarios

| Tab | Route | Behavior |
|---|---|---|
| Without unsub | `/demo/no-unsub` | Callback fires after component is destroyed |
| With unsub | `/demo/with-unsub` | Request canceled, no callback fires |
| Service without unsub | `/demo/service-no-unsub` | Service destroyed but callback still fires |
| Service with unsub | `/demo/service-with-unsub` | Request canceled, no callback fires |

## How to test

```bash
bun start
```

1. Open **Console** and **Network** in DevTools
2. Click on a tab
3. Before 5 seconds pass, click on a **different tab**
4. Observe the console logs and the network panel

## Tech stack

- Angular 21
- Tailwind CSS 4
- Bun
