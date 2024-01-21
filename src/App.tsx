import { Toaster } from "react-hot-toast";
import Map from "./components/Map";
import Hero from "./components/Hero";
import IpInfoCard from "./components/IpInfoCard";
import IpProvider from "./store/IpProvider";

function App() {
  return (
    <IpProvider>
      <div className="flex h-screen w-screen flex-col">
        <Toaster />
        <Hero />
        <IpInfoCard />
        <Map />
      </div>
    </IpProvider>
  );
}

export default App;
