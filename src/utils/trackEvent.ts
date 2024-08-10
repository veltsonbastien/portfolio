import posthog from "posthog-js";
import { USER_EVENTS } from "@/constants";
export const trackEvent = (event: USER_EVENTS, value: any) => {
  posthog.capture(event, value);
};
