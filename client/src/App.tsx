import { Switch, Route, Router as WouterRouter } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/HomePage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function Router() {
  const basePath = import.meta.env.BASE_URL;
  
  return (
    <WouterRouter base={basePath}>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <div className="flex flex-col min-h-screen">
        <Header />
        <Router />
        <Footer />
      </div>
    </TooltipProvider>
  );
}

export default App;
