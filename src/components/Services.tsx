import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { 
  Wrench, 
  Car, 
  Settings, 
  Disc, 
  Droplets, 
  Cog, 
  Battery, 
  Zap, 
  Truck 
} from "lucide-react";

const services = [
  {
    title: "Brake Repair & Replacement",
    description: "Full inspection and replacement of pads, rotors, and fluid.",
    icon: Disc,
  },
  {
    title: "General Auto Repair",
    description: "Comprehensive care for all makes and models.",
    icon: Car,
  },
  {
    title: "Engine Diagnostics",
    description: "State-of-the-art computer diagnostics to find any issue.",
    icon: Settings,
  },
  {
    title: "Tire Services",
    description: "Rotation, balancing, and flat tire repair.",
    icon: Zap,
  },
  {
    title: "Oil Change & Maintenance",
    description: "Fast oil changes and preventative maintenance checks.",
    icon: Droplets,
  },
  {
    title: "Transmission Service",
    description: "Expert transmission repair and fluid replacement.",
    icon: Cog,
  },
  {
    title: "Battery Replacement",
    description: "Testing and replacement of car batteries.",
    icon: Battery,
  },
  {
    title: "BMW & European Cars",
    description: "Certified specialists for BMW and European luxury vehicles.",
    icon: Wrench,
  },
  {
    title: "Trucks & SUVs",
    description: "Heavy-duty service for larger vehicles and fleets.",
    icon: Truck,
  },
];

export function Services() {
  return (
    <section id="services" className="bg-slate-50 py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Expert Services</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            From routine maintenance to complex engine repairs, our certified technicians have the expertise to get you back on the road safely.
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="transition-all hover:shadow-md border-none shadow-sm">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-diamond/10 text-diamond">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
