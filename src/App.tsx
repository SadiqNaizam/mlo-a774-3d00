import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";


import ChatListPage from "./pages/ChatListPage";
import ChatViewPage from "./pages/ChatViewPage";
import ContactsPage from "./pages/ContactsPage";
import SettingsPage from "./pages/SettingsPage";
import StatusPage from "./pages/StatusPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();


const App = () => {
  // Apply dark mode class to the root element
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
        <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
            <Routes>


              <Route path="/" element={<ChatListPage />} />
              <Route path="/chat-view" element={<ChatViewPage />} />
              <Route path="/contacts" element={<ContactsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/status" element={<StatusPage />} />
              {/* catch-all */}
              <Route path="*" element={<NotFound />} />


            </Routes>
        </BrowserRouter>
        </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;