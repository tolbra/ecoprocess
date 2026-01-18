import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { TwoDirections } from '@/app/components/TwoDirections';
import { MaterialsAccepted } from '@/app/components/MaterialsAccepted';
import { IntakeRequirements } from '@/app/components/IntakeRequirements';
import { NotAccepted } from '@/app/components/NotAccepted';
import { TransparencyBlock } from '@/app/components/TransparencyBlock';
import { ProductsSection } from '@/app/components/ProductsSection';
import { ProductSpecs } from '@/app/components/ProductSpecs';
import { ProductionCapacity } from '@/app/components/ProductionCapacity';
import { Shipping } from '@/app/components/Shipping';
import { ProcessSteps } from '@/app/components/ProcessSteps';
import { Documents } from '@/app/components/Documents';
import { FAQ } from '@/app/components/FAQ';
import { ContactsAndForms } from '@/app/components/ContactsAndForms';
import { Footer } from '@/app/components/Footer';
import { Toaster } from '@/app/components/ui/sonner';
import { ThemeProvider } from '@/app/components/ThemeProvider';
import { ScrollToTop } from '@/app/components/ScrollToTop';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <TwoDirections />
          <MaterialsAccepted />
          <IntakeRequirements />
          <NotAccepted />
          <TransparencyBlock />
          <ProductsSection />
          <ProductSpecs />
          <ProductionCapacity />
          <Shipping />
          <ProcessSteps />
          <Documents />
          <FAQ />
          <ContactsAndForms />
        </main>
        <Footer />
        <ScrollToTop />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}
