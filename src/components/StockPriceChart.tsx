import { useCallback, useState } from "react";
import { VictoryLine, VictoryChart, VictoryAxis, VictoryTooltip, VictoryVoronoiContainer } from "victory";
import { format, subDays } from "date-fns";

// https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=JPM&apikey=WYEOQFAIVVJMXLO6

interface StockPriceChartProps {
  days?: number;
  isLoading?: boolean;
}

export const StockPriceChart = ({ days = 30, isLoading = false }: StockPriceChartProps) => {
  const data = [
    { x: "Jan 17 '25", y: 255.12 },
    { x: "Jan 16 '25", y: 254.27 },
    { x: "Jan 15 '25", y: 252.35 },
    { x: "Jan 14 '25", y: 247.47 },
    { x: "Jan 13 '25", y: 244.21 },
    { x: "Jan 10 '25", y: 239.87 },
    { x: "Jan 08 '25", y: 243.13 },
    { x: "Jan 07 '25", y: 243.17 },
    { x: "Jan 06 '25", y: 240.85 },
    { x: "Jan 03 '25", y: 243.28 },
    { x: "Jan 02 '25", y: 240.0 },
    { x: "Dec 31 '24", y: 239.71 },
    { x: "Dec 30 '24", y: 239.32 },
    { x: "Dec 27 '24", y: 241.17 },
    { x: "Dec 26 '24", y: 243.14 },
    { x: "Dec 24 '24", y: 242.31 },
    { x: "Dec 23 '24", y: 238.39 },
    { x: "Dec 20 '24", y: 237.6 },
    { x: "Dec 19 '24", y: 232.96 },
    { x: "Dec 18 '24", y: 230.37 },
    { x: "Dec 17 '24", y: 238.36 },
    { x: "Dec 16 '24", y: 239.58 },
    { x: "Dec 13 '24", y: 239.94 },
    { x: "Dec 12 '24", y: 241.53 },
    { x: "Dec 11 '24", y: 243.53 },
    { x: "Dec 10 '24", y: 242.86 },
    { x: "Dec 09 '24", y: 243.81 },
    { x: "Dec 06 '24", y: 247.36 },
    { x: "Dec 05 '24", y: 245.48 },
    { x: "Dec 04 '24", y: 243.4 },
    { x: "Dec 03 '24", y: 244.82 },
    { x: "Dec 02 '24", y: 246.25 },
    { x: "Nov 29 '24", y: 249.72 },
    { x: "Nov 27 '24", y: 249.79 },
    { x: "Nov 26 '24", y: 249.97 },
    { x: "Nov 25 '24", y: 250.29 },
    { x: "Nov 22 '24", y: 248.55 },
    { x: "Nov 21 '24", y: 244.76 },
    { x: "Nov 20 '24", y: 240.78 },
    { x: "Nov 19 '24", y: 243.09 },
    { x: "Nov 18 '24", y: 245.03 },
    { x: "Nov 15 '24", y: 245.31 },
    { x: "Nov 14 '24", y: 241.87 },
    { x: "Nov 13 '24", y: 241.16 },
    { x: "Nov 12 '24", y: 239.56 },
    { x: "Nov 11 '24", y: 239.29 },
    { x: "Nov 08 '24", y: 236.98 },
    { x: "Nov 07 '24", y: 236.38 },
    { x: "Nov 06 '24", y: 247.06 },
    { x: "Nov 05 '24", y: 221.49 },
    { x: "Nov 04 '24", y: 219.78 },
    { x: "Nov 01 '24", y: 222.94 },
    { x: "Oct 31 '24", y: 221.92 },
    { x: "Oct 30 '24", y: 224.41 },
    { x: "Oct 29 '24", y: 222.9 },
    { x: "Oct 28 '24", y: 225.5 },
    { x: "Oct 25 '24", y: 222.31 },
    { x: "Oct 24 '24", y: 224.98 },
    { x: "Oct 23 '24", y: 223.41 },
    { x: "Oct 22 '24", y: 224.12 },
    { x: "Oct 21 '24", y: 223.0 },
    { x: "Oct 18 '24", y: 225.37 },
    { x: "Oct 17 '24", y: 224.42 },
  ];

  const [boundingRect, setBoundingRect] = useState({ width: 0, height: 0 });

  const graphRef = useCallback((node) => {
    if (node !== null) {
      setBoundingRect(node.getBoundingClientRect());
    }
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-[300px] flex items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          <p className="text-sm text-[rgba(255,255,255,0.65)]">Loading stock price data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[300px]" ref={graphRef}>
      <VictoryChart
        width={boundingRect.width - 80}
        padding={{ top: 40, bottom: 50 }}
        containerComponent={
          <VictoryVoronoiContainer
            labels={({ datum }) => `$${datum.y}`}
            labelComponent={
              <VictoryTooltip
                style={{ fill: "#0f172a" }}
                flyoutStyle={{
                  stroke: "#e2e8f0",
                  fill: "white",
                }}
              />
            }
          />
        }
      >
        <VictoryAxis
          tickFormat={(t) => t}
          style={{
            axis: { stroke: "#e2e8f0" },
            ticks: { stroke: "#e2e8f0" },
            tickLabels: { fill: "rgba(255,255,255,0.65)", fontSize: 10, angle: -45, textAnchor: "end" },
          }}
          tickCount={30}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(t) => `$${t}`}
          style={{
            axis: { stroke: "#e2e8f0" },
            ticks: { stroke: "#e2e8f0" },
            tickLabels: { fill: "rgba(255,255,255,0.65)", fontSize: 10 },
          }}
        />
        <VictoryLine
          data={data.slice(0, days)}
          style={{
            data: { stroke: "#9b87f5", strokeWidth: 2 },
          }}
          animate={{
            duration: 500,
            onLoad: { duration: 500 },
          }}
        />
      </VictoryChart>
    </div>
  );
};
