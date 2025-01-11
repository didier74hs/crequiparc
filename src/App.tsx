import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import Descriptif from "./pages/Descriptif";
import Photos from "./pages/Photos";
import Video from "./pages/Video";
import HomeStaging from "./pages/HomeStaging";
import Plan from "./pages/Plan";
import SituationGeographique from "./pages/SituationGeographique";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/crequiparc/">
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/descriptif" element={<Descriptif />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/video" element={<Video />} />
          <Route path="/home-staging" element={<HomeStaging />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/situation" element={<SituationGeographique />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;