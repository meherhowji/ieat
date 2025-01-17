import { useCallback, useState } from "react";
import { VictoryBar, VictoryLine, VictoryChart, VictoryAxis, VictoryTooltip, VictoryVoronoiContainer } from "victory";

const annualData = [
  { year: "2010", dividend: 0.53 },
  { year: "2011", dividend: 0.2 },
  { year: "2012", dividend: 0.8 },
  { year: "2013", dividend: 1.15 },
  { year: "2014", dividend: 1.36 },
  { year: "2015", dividend: 1.56 },
  { year: "2016", dividend: 1.68 },
  { year: "2017", dividend: 1.84 },
  { year: "2018", dividend: 2.04 },
  { year: "2019", dividend: 2.48 },
  { year: "2020", dividend: 3.3 },
  { year: "2020", dividend: 3.6 },
  { year: "2021", dividend: 3.7 },
  { year: "2022", dividend: 4.0 },
  { year: "2023", dividend: 4.05 },
  { year: "2024", dividend: 4.8 },
];

const quarterlyData = [
  { quarter: "Q1'24", dividend: 1.15 },
  { quarter: "Q2'24", dividend: 1.15 },
  { quarter: "Q3'24", dividend: 1.25 },
  { quarter: "Q4'24", dividend: 1.25 },
];

export const DividendChart = () => {
  const [showAnnual, setShowAnnual] = useState(true);
  const [boundingRect, setBoundingRect] = useState({ width: 0, height: 0 });
  const graphRef = useCallback((node) => {
    if (node !== null) {
      setBoundingRect(node.getBoundingClientRect());
    }
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex justify-end items-center">
        <div className="flex gap-2 ">
          <button
            onClick={() => setShowAnnual(true)}
            className={`px-3 py-1 rounded text-sm ${
              showAnnual ? "bg-primary text-white" : "bg-[#1e1e1e] text-gray-400 hover:text-white"
            }`}
          >
            Annual
          </button>
          <button
            onClick={() => setShowAnnual(false)}
            className={`px-3 py-1 rounded text-sm ${
              !showAnnual ? "bg-primary text-white" : "bg-[#1e1e1e] text-gray-400 hover:text-white"
            }`}
          >
            Quarterly
          </button>
        </div>
      </div>

      <div className="h-[300px]" ref={graphRef}>
        <VictoryChart
          height={300}
          width={boundingRect.width}
          padding={{ top: 20, bottom: 40, left: 40, right: 40 }}
          domainPadding={{ x: 25 }}
          containerComponent={
            <VictoryVoronoiContainer
              labels={({ datum }) => `${showAnnual ? datum.year : datum.quarter} : $${datum.dividend}`}
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
              tickLabels: {
                fill: "rgba(255,255,255,0.65)",
                fontSize: 10,
                angle: -45,
                textAnchor: "end",
              },
            }}
            tickCount={8}
          />
          <VictoryAxis
            dependentAxis
            tickFormat={(t) => `$${t}`}
            style={{
              axis: { stroke: "#e2e8f0" },
              ticks: { stroke: "#e2e8f0" },
              tickLabels: {
                fill: "rgba(255,255,255,0.65)",
                fontSize: 10,
              },
            }}
          />
          {showAnnual ? (
            <VictoryLine
              data={annualData}
              x={"year"}
              y="dividend"
              style={{
                data: {
                  stroke: "#9b87f5",
                  strokeWidth: 2,
                },
              }}
              animate={{
                duration: 500,
                onLoad: { duration: 200 },
              }}
            />
          ) : (
            <VictoryBar
              data={quarterlyData}
              x={"quarter"}
              y="dividend"
              barWidth={15}
              // style={{
              //   data: {
              //     stroke: "#9b87f5",
              //     strokeWidth: 2,
              // 		// width: '10px'
              //   },
              // }}
              animate={{
                duration: 500,
                onLoad: { duration: 500 },
              }}
            />
          )}
        </VictoryChart>
      </div>
    </div>
  );
};
