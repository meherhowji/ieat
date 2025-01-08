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
    { x: "Nov 04 '24", y: 219.78 },
    { x: "Nov 05 '24", y: 221.49 },
    { x: "Nov 06 '24", y: 247.06 },
    { x: "Nov 07 '24", y: 236.38 },
    { x: "Nov 08 '24", y: 236.98 },
    { x: "Nov 11 '24", y: 239.29 },
    { x: "Nov 12 '24", y: 239.56 },
    { x: "Nov 13 '24", y: 241.16 },
    { x: "Nov 14 '24", y: 241.87 },
    { x: "Nov 15 '24", y: 245.31 },
    { x: "Nov 18 '24", y: 245.03 },
    { x: "Nov 19 '24", y: 243.09 },
    { x: "Nov 20 '24", y: 240.78 },
    { x: "Nov 21 '24", y: 244.76 },
    { x: "Nov 22 '24", y: 248.55 },
    { x: "Nov 25 '24", y: 250.29 },
    { x: "Nov 26 '24", y: 249.97 },
    { x: "Nov 27 '24", y: 249.79 },
    { x: "Nov 29 '24", y: 249.72 },
    { x: "Dec 02 '24", y: 246.25 },
    { x: "Dec 03 '24", y: 244.82 },
    { x: "Dec 04 '24", y: 243.4 },
    { x: "Dec 05 '24", y: 245.48 },
    { x: "Dec 06 '24", y: 247.36 },
    { x: "Dec 09 '24", y: 243.81 },
    { x: "Dec 10 '24", y: 242.86 },
    { x: "Dec 11 '24", y: 243.53 },
    { x: "Dec 12 '24", y: 241.53 },
    { x: "Dec 13 '24", y: 239.94 },
    { x: "Dec 16 '24", y: 239.58 },
    { x: "Dec 17 '24", y: 238.36 },
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
          data={data}
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
