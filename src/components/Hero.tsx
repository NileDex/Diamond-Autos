import { Button } from "@/src/components/ui/button";
import { Badge } from "@/src/components/ui/badge";
import { Star, Phone, MapPin } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-primary py-24 text-white lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-diamond blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-diamond blur-3xl"></div>
      </div>

      <div className="container relative mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="secondary" className="mb-6 bg-white/10 text-white hover:bg-white/20 border-white/20 px-4 py-1">
            <Star className="mr-2 h-4 w-4 fill-gold text-gold" />
            4.9 / 5 — 41 Google Reviews
          </Badge>
          
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            San Jose's Most Trusted <br />
            <span className="text-diamond">Auto Repair Shop</span>
          </h1>
          
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-300 md:text-xl">
            Honest service. Fair prices. Expert technicians. We treat every car like it's our own.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="h-14 bg-diamond px-8 text-lg font-bold hover:bg-diamond/90" asChild>
              <a href="tel:+14084531990">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-14 border-white/20 bg-white/5 px-8 text-lg font-bold text-white hover:bg-white/10" asChild>
              <a href="https://www.google.com/maps/dir/?api=1&destination=995+Berryessa+Rd,+San+Jose,+CA+95133" target="_blank" rel="noopener noreferrer">
                <MapPin className="mr-2 h-5 w-5" />
                Get Directions
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
