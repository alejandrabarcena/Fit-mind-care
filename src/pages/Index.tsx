import { Activity, Scale, Droplets, Weight } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import HealthMetricCard from "@/components/HealthMetricCard";
import medicalOrgansImage from "@/assets/medical-organs.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
              
              {/* Left Column - Search */}
              <div className="lg:col-span-1 flex flex-col justify-start pt-8">
                <SearchBar />
              </div>

              {/* Center Column - Medical Illustration */}
              <div className="lg:col-span-1 flex items-center justify-center">
                <div className="relative">
                  <div className="w-80 h-80 rounded-full bg-gradient-to-br from-card to-secondary/20 p-8 flex items-center justify-center shadow-2xl">
                    <img 
                      src={medicalOrgansImage}
                      alt="Medical organs illustration"
                      className="w-full h-full object-contain rounded-full"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-medical-weight/10 animate-pulse"></div>
                </div>
              </div>

              {/* Right Column - Health Metrics */}
              <div className="lg:col-span-1 grid grid-cols-1 gap-4 pt-8">
                <HealthMetricCard
                  icon={Activity}
                  title="BMI"
                  color="bmi"
                />
                <HealthMetricCard
                  icon={Droplets}
                  title="RBC Count"
                  color="rbc"
                />
                <HealthMetricCard
                  icon={Weight}
                  title="WEIGHT"
                  unit="in Kg."
                  color="weight"
                />
                <HealthMetricCard
                  icon={Scale}
                  title="HEIGHT"
                  unit="in m."
                  color="height"
                />
              </div>
              
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
