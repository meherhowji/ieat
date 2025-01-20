import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

const dummyEvents = [
  {
    date: "Jan 16 '25",
    event: "JPMorgan Chase Return on Tangible Common Equity Sustainable in Medium Term, UBS Says",
    impact: "Positive"
  },
  {
    date: "Jan 15 ’25",
    event: "JPMorgan, Citi, Wells, Goldman Crush Q4 Earnings",
    impact: "Positive"
  },
  {
    date: "Jan 15 ’25",
    event: "JPMorganChase Declares Preferred Stock Dividends",
    impact: "Positive"
  },
  {
    date: "Jan 15 ’25",
    event: "JPMorganChase Reports Fourth-Quarter and Full-Year 2024 Financial Results",
    impact: "Positive"
  }
];

export const MarketEvents = () => {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState<typeof dummyEvents>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setEvents(dummyEvents);
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-48">
        <div className="flex flex-col items-center gap-2">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          <p className="text-sm text-muted-foreground">Searching Financial Events for JPMC</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 pt-10">
      <h2 className="text-xl font-semibold manrope-600">Market Events</h2>
      <div className="grid gap-4">
        {events.map((event, index) => (
          <Card key={index} className="p-4">
            <div className="flex justify-between items-start manrope-400">
              <div>
                <p className="text-xs text-muted-foreground">{event.date}</p>
                <p className="mt-1 font-semibold text-gray-800 text-sm">{event.event}</p>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs ${
                event.impact === 'Positive' ? 'bg-green-100 text-green-800' : 
                event.impact === 'Negative' ? 'bg-red-100 text-red-800' : 
                'bg-gray-100 text-gray-800'
              }`}>
                {event.impact}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};