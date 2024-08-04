import { PageProvider } from "@/contexts";
import { Modal, PageContent } from "@/components";

export default function Home() {
  return (
    <PageProvider>
      <Modal />
      <PageContent />
    </PageProvider>
  );
}
