import { PageProvider, AnalyticsProvider } from "@/providers";
import { Modal, PageContent } from "@/components";

export default function Home() {
  return (
    <AnalyticsProvider>
      <PageProvider>
        <Modal />
        <PageContent />
      </PageProvider>
    </AnalyticsProvider>
  );
}
