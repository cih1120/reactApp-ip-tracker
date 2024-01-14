import { Toaster } from "react-hot-toast";
import Hero from "./components/Hero";
import IpInfoCard from "./components/IpInfoCard";
import IpProvider from "./store/IpProvider";

function App() {
  return (
    <IpProvider>
      <Toaster />
      <Hero />
      <IpInfoCard />
    </IpProvider>
  );
}

export default App;
