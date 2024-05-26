import * as Sentry from "@sentry/nextjs";

export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    Sentry.init({
      dsn: "https://8cc72381c2a6342797b95eef65452fb3@o4507255804461056.ingest.us.sentry.io/4507319986356224",
      tracesSampleRate: 1,
      debug: false,
      enabled: process.env.NODE_ENV === "production",
    });
  }

  if (process.env.NEXT_RUNTIME === "edge") {
    Sentry.init({
      dsn: "https://8cc72381c2a6342797b95eef65452fb3@o4507255804461056.ingest.us.sentry.io/4507319986356224",
      tracesSampleRate: 1,
      debug: false,
      enabled: process.env.NODE_ENV === "production",
    });
  }
}
