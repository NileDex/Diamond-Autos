import { Diamond, Phone, MapPin, Clock } from "lucide-react";
import { Separator } from "@/src/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-primary pt-16 pb-8 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Diamond className="h-6 w-6 text-diamond" />
              <span className="text-xl font-bold tracking-tight">Diamond Auto Repair</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Trusted Auto Repair in San Jose Since Day One. We provide expert service with honesty and integrity.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 font-bold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#home" className="hover:text-diamond transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-diamond transition-colors">Services</a></li>
              <li><a href="#why-us" className="hover:text-diamond transition-colors">Why Choose Us</a></li>
              <li><a href="#reviews" className="hover:text-diamond transition-colors">Reviews</a></li>
              <li><a href="#hours" className="hover:text-diamond transition-colors">Hours</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 font-bold text-white">Contact Info</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 shrink-0 text-diamond" />
                <a href="tel:+14084531990" className="hover:text-diamond transition-colors">+1 (408) 453-1990</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-diamond" />
                <span>995 Berryessa Rd, San Jose, CA 95133</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 font-bold text-white">Hours</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex justify-between">
                <span>Mon – Sat:</span>
                <span>9:00 AM – 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-12 bg-white/10" />
        
        <div className="flex flex-col items-center justify-between gap-4 text-center text-xs text-slate-500 md:flex-row md:text-left">
          <p>© 2025 Diamond Auto Repair. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-diamond transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-diamond transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
