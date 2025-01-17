import { useState, useEffect } from "react";
import { Card } from "./ui/card";

export const JPMCInsights = () => {
  const [loading, setLoading] = useState(true);
  const [insights, setInsights] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInsights(true);
      setLoading(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-48">
        <div className="flex flex-col items-center gap-2">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          <p className="text-sm text-muted-foreground">Generating Insights for JPMC</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 pt-10">
      <h2 className="text-xl font-semibold manrope-600">JPMC Insights</h2>
      <Card className="p-6">
        <div className="prose prose-sm max-w-none dark:prose-invert">
          {insights && (
            <p className="my-2 manrope-400 text-sm text-black">
              <h1 className="text-gray-800 text-lg">JPMC Q4 2024 Press Release Highlights</h1>
              <h2 className="text-gray-800 text-base">Strong Q4 2024 Performance</h2>
              <ul>
                <li>Net income: $14.0B ($4.81 per share)</li>
                <li>Managed revenue: $43.7B (up from $42.8B)</li>
                <li>Expense: $22.8B; overhead ratio of 53%</li>
              </ul>
              <h2 className="text-gray-800  text-base">Full-Year 2024 Highlights</h2>
              <ul>
                <li>Record net income: $58.5B ($19.75 per share)</li>
                <li>Excluding significant items: $54.0B ($18.22 per share)</li>
                <li>ROE: 18%; ROTCE: 22%</li>
              </ul>
              <h2 className="text-gray-800 text-base">Credit &amp; Deposits</h2>
              <ul>
                <li>Credit costs: $2.6B (includes $2.4B net charge-offs)</li>
                <li>Deposits up 2% YoY; up 1% QoQ</li>
              </ul>
              <h2 className="text-gray-800 text-base">Consumer &amp; Community Banking (CCB)</h2>
              <ul>
                <li>Average loans +1% YoY</li>
                <li>Credit card sales volume +8% YoY</li>
                <li>Active mobile customers +7% YoY</li>
                <li>Investment Banking fees up 49% YoY</li>
              </ul>
              <h2 className="text-gray-800 text-base">Corporate &amp; Investment Bank (CIB)</h2>
              <ul>
                <li>Markets revenue +21% YoY</li>
                <li>Fixed Income Markets +20%; Equity Markets +22%</li>
                <li>Average Banking &amp; Payments loans down 2% YoY</li>
                <li>Average client deposits up 9% YoY</li>
              </ul>
              <h2 className="text-gray-800 text-base">Asset &amp; Wealth Management (AWM)</h2>
              <ul>
                <li>AUM: $4.0T (+18% YoY)</li>
                <li>Average loans +3% YoY</li>
                <li>Deposits +10% YoY</li>
              </ul>
              <h2 className="text-gray-800 text-base">Capital &amp; Shareholder Returns</h2>
              <ul>
                <li>CET1 ratio: 15.7% (Advanced: 15.8%)</li>
                <li>Total Loss-Absorbing Capacity: $547B</li>
                <li>Book value per share: $116.07; tangible book: $97.30</li>
                <li>$3.5B in quarterly common dividends ($1.25/share)</li>
                <li>$4.0B in stock repurchases</li>
              </ul>
              <h2 className="text-gray-800 text-base">Supporting Communities &amp; Businesses</h2>
              <ul>
                <li>$2.8T in credit and capital raised in 2024</li>
                <li>$250B of credit for consumers</li>
                <li>$400B for U.S. small businesses</li>
                <li>$2.4T for corporations and non-U.S. government entities</li>
                <li>$65B for local government entities</li>
              </ul>
              <h2 className="text-gray-800 text-base">CEO Commentary (Jamie Dimon)</h2>
              <ul>
                <li>Emphasizes continued economic resilience, robust consumer spending</li>
                <li>Stresses balanced regulation for a strong banking system</li>
                <li>Optimistic about collaboration between government and business</li>
                <li>Cautious on inflation and geopolitical risks</li>
              </ul>
            </p>
          )}
        </div>
      </Card>
    </div>
  );
};
