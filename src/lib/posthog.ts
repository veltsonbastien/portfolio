import posthog from "posthog-js";

posthog.init(process.env.POSTHOG_TOKEN!, {
  api_host: "https://us.i.posthog.com",
  person_profiles: "always",
});

posthog.capture("my event", { property: "value" });
