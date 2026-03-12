import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/src/components/ui/table";
import { Badge } from "@/src/components/ui/badge";
import { Clock } from "lucide-react";

const schedule = [
  { day: "Monday", hours: "9:00 AM – 6:00 PM" },
  { day: "Tuesday", hours: "9:00 AM – 6:00 PM" },
  { day: "Wednesday", hours: "9:00 AM – 6:00 PM" },
  { day: "Thursday", hours: "9:00 AM – 6:00 PM" },
  { day: "Friday", hours: "9:00 AM – 6:00 PM" },
  { day: "Saturday", hours: "9:00 AM – 6:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

export function Hours() {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const currentHour = new Date().getHours();
  const currentDay = new Date().getDay(); // 0 is Sunday, 1-6 is Mon-Sat

  const isOpen = currentDay !== 0 && currentHour >= 9 && currentHour < 18;

  return (
    <section id="hours" className="bg-slate-50 py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <Card className="overflow-hidden border-none shadow-lg">
            <CardHeader className="bg-primary text-white text-center py-8">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                <Clock className="h-6 w-6" />
              </div>
              <CardTitle className="text-2xl font-bold">Opening Hours</CardTitle>
              <div className="mt-4">
                {isOpen ? (
                  <Badge className="bg-emerald-500 hover:bg-emerald-600 text-white border-none px-4 py-1">
                    Open Now
                  </Badge>
                ) : (
                  <Badge variant="destructive" className="px-4 py-1">
                    Closed Now
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableBody>
                  {schedule.map((item) => (
                    <TableRow 
                      key={item.day} 
                      className={item.day === today ? "bg-diamond/5 font-bold" : ""}
                    >
                      <TableCell className="py-4 pl-8 text-primary">{item.day}</TableCell>
                      <TableCell className="py-4 pr-8 text-right text-muted-foreground">
                        {item.hours}
                        {item.day === today && (
                          <span className="ml-2 inline-block h-2 w-2 rounded-full bg-diamond animate-pulse"></span>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
