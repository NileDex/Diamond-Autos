import { Card, CardContent } from "@/src/components/ui/card";
import { ShieldCheck, Banknote, Timer, CarFront, Users, MapPin } from "lucide-react";

const reasons = [
  {
    title: "BMW Certified Technicians",
    description: "Expertise you can trust for high-performance vehicles.",
    icon: ShieldCheck,
  },
  {
    title: "Fair & Affordable Pricing",
    description: "Quality service shouldn't break the bank.",
    icon: Banknote,
  },
  {
    title: "Fast Turnaround",
    description: "We get your vehicle back to you as quickly as possible.",
    icon: Timer,
  },
  {
    title: "Free Loaner Car Available",
    description: "Stay mobile while your car is in the shop.",
    icon: CarFront,
  },
  {
    title: "Experienced & Trustworthy",
    description: "Decades of combined experience in auto repair.",
    icon: Users,
  },
  {
    title: "Uber Pick-up & Drop-off",
    description: "Convenient transportation while we work.",
    icon: MapPin,
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl">Why Choose Diamond Auto Repair?</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            We go the extra mile to provide a seamless and stress-free experience for our customers.
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <Card key={index} className="border-none bg-slate-50 shadow-none">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-diamond shadow-sm">
                  <reason.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-primary">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground">{reason.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
