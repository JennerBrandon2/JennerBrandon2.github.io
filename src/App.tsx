
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import BilueProject from "./pages/BilueProject";
import SculptedProject from "./pages/SculptedProject";
import CampaignMonitorProject from "./pages/CampaignMonitorProject";
import WeddedWonderlandProject from "./pages/WeddedWonderlandProject";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/bilue" element={<BilueProject />} />
          <Route path="/projects/sculpted" element={<SculptedProject />} />
          <Route path="/projects/campaign-monitor" element={<CampaignMonitorProject />} />
          <Route path="/projects/wedded-wonderland" element={<WeddedWonderlandProject />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

