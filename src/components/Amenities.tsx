import { Card, CardContent } from "@/src/components/ui/card";
import { 
  Accessibility, 
  CheckCircle2, 
  Wrench, 
  Droplets, 
  UserCheck, 
  CalendarCheck, 
  CreditCard 
} from "lucide-react";

const amenities = [
  {
    category: "Accessibility",
    icon: Accessibility,
    items: ["Wheelchair-accessible car park", "Wheelchair-accessible entrance"],
  },
  {
    category: "Service Options",
    icon: Wrench,
    items: ["On-site services only"],
  },
  {
    category: "Offerings",
    icon: Droplets,
    items: ["Oil change available"],
  },
  {
    category: "Amenities",
    icon: UserCheck,
    items: ["Certified mechanic on-site"],
  },
  {
    category: "Planning",
    icon: CalendarCheck,
    items: ["Appointments recommended", "Walk-ins welcome"],
  },
  {
    category: "Payments Accepted",
    icon: CreditCard,
    items: ["Credit cards", "Debit cards", "NFC / Tap-to-pay"],
  },
];

export function Amenities() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl">What to Expect</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            We provide a comfortable and accessible environment for all our customers.
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((group, index) => (
            <Card key={index} className="border-none shadow-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3 text-primary">
                  <group.icon className="h-6 w-6 text-diamond" />
                  <h3 className="font-bold">{group.category}</h3>
                </div>
                <ul className="space-y-2">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
