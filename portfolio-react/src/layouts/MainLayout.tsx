import { Outlet } from "react-router-dom";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function MainLayout() {
  return (
    <>
      <ScrollToTop />

      <Header />
      <Outlet />
      <Footer />
    </>
  );
}