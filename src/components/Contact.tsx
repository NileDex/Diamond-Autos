import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { Phone, MapPin, Navigation, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-primary sm:text-4xl">Get in Touch</h2>
            <p className="mb-8 text-muted-foreground">
              Have a question or need to schedule a repair? Give us a call or visit our shop in San Jose. Our friendly staff is ready to help.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-diamond/10 text-diamond">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-primary">Phone</h3>
                  <a href="tel:+14084531990" className="text-lg text-muted-foreground hover:text-diamond transition-colors">
                    +1 (408) 453-1990
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-diamond/10 text-diamond">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-primary">Address</h3>
                  <p className="text-muted-foreground">
                    995 Berryessa Rd, San Jose, CA 95133, United States
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-diamond/10 text-diamond">
                  <Navigation className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-primary">Google Maps Code</h3>
                  <p className="text-muted-foreground">9477+RQ San Jose, California</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="bg-diamond hover:bg-diamond/90" asChild>
                <a href="tel:+14084531990">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://www.google.com/maps/dir/?api=1&destination=995+Berryessa+Rd,+San+Jose,+CA+95133" target="_blank" rel="noopener noreferrer">
                  <Navigation className="mr-2 h-5 w-5" />
                  Get Directions
                </a>
              </Button>
            </div>
          </div>
          
          <div className="h-[400px] overflow-hidden rounded-2xl shadow-lg lg:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.824707255153!2d-121.884488!3d37.370335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcd673c683715%3A0x8691566835677b1e!2s995%20Berryessa%20Rd%2C%20San%20Jose%2C%20CA%2095133!5e0!3m2!1sen!2sus!4v1710280000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
