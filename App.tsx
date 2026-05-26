import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Fisica from "./pages/Fisica";
import FisicaMovimiento from "./pages/FisicaMovimiento";
import FisicaEnergia from "./pages/FisicaEnergia";
import FisicaElectricidad from "./pages/FisicaElectricidad";
import FisicaMagnetismo from "./pages/FisicaMagnetismo";
import FisicaOptica from "./pages/FisicaOptica";
import PrimeroMedio from "./pages/PrimeroMedio";
import Orientacion from "./pages/Orientacion";

function Router() {
  return (
    <Switch>
      <Route path={\"\"} component={Home} />
      <Route path={\""} component={Fisica} />
      <Route path={\""} component={FisicaMovimiento} />
      <Route path={\""} component={FisicaEnergia} />
      <Route path={\""} component={FisicaElectricidad} />
      <Route path={\""} component={FisicaMagnetismo} />
      <Route path={\""} component={FisicaOptica} />
      <Route path={\""} component={PrimeroMedio} />
      <Route path={\""} component={Orientacion} />
      <Route path={\""} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme=\"dark\"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;