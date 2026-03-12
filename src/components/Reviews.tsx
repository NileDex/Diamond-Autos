import { Card, CardContent, CardHeader } from "@/src/components/ui/card";
import { Avatar, AvatarFallback } from "@/src/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs";

const reviews = [
  {
    name: "Ning Tian",
    time: "2 weeks ago",
    text: "Stanley is super experienced. My trunk has issue and cannot open. As it is Sunday, I went to another auto repair store. They are good at 'service', giving me uber pick-up and drop, sending me the link to monitor the whole repair",
    rating: 5,
  },
  {
    name: "Lancer",
    time: "2 months ago",
    text: "Finally found a shop that puts my mind at ease! I talked to the lady over the phone and she said 'it'll be this much but for you we'll see what we can do, bring it over and the mechanic will work on it!' She is legit and the guys are so...",
    rating: 5,
  },
  {
    name: "Daniel Luu",
    time: "6 months ago",
    text: "Took my Tundra here for the first time to replace rear drum brake pads. Technician Lee was very knowledgeable and thorough. I highly recommend bringing your car here for service. Well trained and experienced staff. Definitely come back. Best of all, fair affordable prices.",
    rating: 5,
    badge: "Local Guide"
  },
  {
    name: "Bhargav Mantha",
    time: "2 years ago",
    text: "Very helpful and professional people. My family's car had a flat tire on the freeway. Michael promptly came in, looked at the situation, got a new tire and fixed it right at the side of the freeway. Later they saw a nail in another tire and fixed it for free. Very nice and professional people.",
    rating: 5,
  },
  {
    name: "Bonnie Daggett",
    time: "4 years ago",
    text: "Tammy at Diamond Auto Repair understood my timeline limitations, gave me an awesome price on brakes and rotors and work was completed quickly, safely and efficiently. Best of all, it was nice not to be treated like I didn't know my vehicle because of my gender.",
    rating: 5,
  },
  {
    name: "Thomas Callahan",
    time: "5 years ago",
    text: "EXTREMELY pleased with the quality and expediency of service. Personnel were all courteous and competent. Pricing was extremely fair. I personally spent several years in the automotive repair industry and feel qualified to judge a top notch independent shop.",
    rating: 5,
  },
  {
    name: "Hector Castillo",
    time: "4 years ago",
    text: "BMW Certified so you know they can fix any car. Very professional and trustworthy! Good prices and mechanics are the best! The owner is very nice and does good business. My only new mechanics!",
    rating: 5,
  },
  {
    name: "Joshua Azevedo",
    time: "7 years ago",
    text: "Great, quick service. Provided an estimate of time, got back to me faster than that, and had my car fixed within 24 hours. Provided a free loaner car when they found out I would likely miss work. They have a customer for as long as I'm in the area!",
    rating: 5,
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl">What Our Customers Say</h2>
          <div className="flex items-center justify-center gap-1 text-gold">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-gold" />
            ))}
            <span className="ml-2 font-bold text-primary">4.9 Rating</span>
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <Card key={index} className="relative h-full border-none bg-white shadow-sm transition-all hover:shadow-md">
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar className="h-12 w-12 border-2 border-diamond/10">
                  <AvatarFallback className="bg-diamond/5 text-diamond font-bold">
                    {review.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-primary">{review.name}</span>
                    {review.badge && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-diamond bg-diamond/10 px-1.5 py-0.5 rounded">
                        {review.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground">{review.time}</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-2 flex gap-0.5 text-gold">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-gold" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground italic">
                  "{review.text}"
                </p>
                <Quote className="absolute bottom-4 right-4 h-8 w-8 text-diamond/5" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
