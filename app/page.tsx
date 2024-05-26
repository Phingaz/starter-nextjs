'use client';

import posthog from 'posthog-js';

export default function Home() {
  return (
    <main>
      <div className="h-screen bg-red-300 w-screen">
        <button
          onClick={() => {
            posthog.capture('my event', { property: 'value' });
          }}
        >
          PostHog
        </button>
      </div>
      <div className="h-screen bg-blue-300 w-screen"></div>
      <div className="h-screen bg-green-300 w-screen"></div>
    </main>
  );
}
