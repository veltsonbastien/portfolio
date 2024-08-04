"use client";

import { LOGO_IMAGE_LOCAL } from "@/components/Navbar/constants";
import { NAVBAR_LINKS } from "@/constants";
import { usePageContext } from "@/contexts";
import { Navbar, MobileNavbar } from "@/components";

export const ResponsiveNavbar = () => {
  const { isMobile } = usePageContext();

  return isMobile ? (
    <MobileNavbar image={LOGO_IMAGE_LOCAL} links={NAVBAR_LINKS} />
  ) : (
    <Navbar image={LOGO_IMAGE_LOCAL} links={NAVBAR_LINKS} />
  );
};
