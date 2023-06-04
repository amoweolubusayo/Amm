// import React, { useRef, useEffect } from "react";
// import Chart, { ChartType, ChartOptions } from "chart.js/auto";
// import { Pie, Doughnut, Line } from "react-chartjs-2";

// const TokenSupplyChart = () => {
//   const chartRef = useRef<HTMLCanvasElement | null>(null);
//   const chartInstanceRef = useRef<Chart | undefined>();

//   useEffect(() => {
//     const createChart = () => {
//       const chartCanvas = chartRef.current;

//       if (chartCanvas) {
//         // Destroy previous chart instance if it exists
//         if (chartInstanceRef.current) {
//           chartInstanceRef.current.destroy();
//         }

//         const chartOptions: ChartOptions = {
//           responsive: true,
//           maintainAspectRatio: false,
//         };

//         const chartData = {
//           labels: ["Token A", "Token B", "Token C", "Token D"],
//           datasets: [
//             {
//               label: "Total Supply",
//               data: [1000, 2000, 1500, 3000],
//               backgroundColor: "rgba(75, 192, 192, 0.2)",
//               borderColor: "rgba(75, 192, 192, 1)",
//               borderWidth: 2,
//             },
//           ],
//         };

//         chartInstanceRef.current = new Chart(chartCanvas, {
//           type: "bar" as ChartType,
//           data: chartData,
//           options: chartOptions,
//         });
//       }
//     };

//     createChart();

//     return () => {
//       // Cleanup: Destroy chart instance
//       if (chartInstanceRef.current) {
//         chartInstanceRef.current.destroy();
//         chartInstanceRef.current = undefined;
//       }
//     };
//   }, []); // Empty dependency array

//   return (
//     <div style={{ height: "400px" }} className="mt-10 ml-10">
//       <h1>Token Supply Chart</h1>
//       <canvas ref={chartRef}></canvas>

//       <div className="mt-10">
//         <h2>Pie Chart</h2>
//         <Pie data={chartData} options={chartOptions} />
//       </div>

//       <div className="mt-10">
//         <h2>Doughnut Chart</h2>
//         <Doughnut data={chartData} options={chartOptions} />
//       </div>

//       <div className="mt-10">
//         <h2>Area Chart</h2>
//         <Line data={chartData} options={chartOptions} />
//       </div>
//     </div>
//   );
// };

// export default TokenSupplyChart;

import React, { useRef, useEffect } from "react";
import Chart, { ChartType, ChartOptions } from "chart.js/auto";
import { Pie, Doughnut, Line } from "react-chartjs-2";

const TokenSupplyChart = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | undefined>();

  useEffect(() => {
    const createChart = () => {
      const chartCanvas = chartRef.current;

      if (chartCanvas) {
        // Destroy previous chart instance if it exists
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }

        const chartOptions: ChartOptions = {
          responsive: true,
          maintainAspectRatio: false,
        };

        const chartData = {
          labels: ["Token A", "Token B", "Token C", "Token D"],
          datasets: [
            {
              label: "Total Supply",
              data: [1000, 2000, 1500, 3000],
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 2,
            },
          ],
        };

        chartInstanceRef.current = new Chart(chartCanvas, {
          type: "bar" as ChartType,
          data: chartData,
          options: chartOptions,
        });
      }
    };

    createChart();

    return () => {
      // Cleanup: Destroy chart instance
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = undefined;
      }
    };
  }, []); // Empty dependency array

  const chartData = {
    labels: ["Token A", "Token B", "Token C", "Token D"],
    datasets: [
      {
        label: "Token Distribution",
        data: [30, 20, 25, 15],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <>
      <div className="mt-10 ml-10">
      <h1>Token Supply Chart</h1>
        <div className="mt-10" style={{ height: "400px" }}>
          <canvas ref={chartRef}></canvas>
        </div>
        <div className="flex flex-wrap">
          <div className="w-1/3 px-4">
            <div className="h-400" style={{ height: "400px" }}>
              <h2>Pie Chart</h2>
              <Pie data={chartData} />
            </div>
          </div>
          <div className="w-1/3 px-4">
            <div className="h-400" style={{ height: "400px" }}>
              <h2>Doughnut Chart</h2>
              <Doughnut data={chartData} />
            </div>
          </div>
          <div className="w-1/3 px-4">
            <div className="h-400" style={{ height: "400px" }}>
              <h2>Area Chart</h2>
              <Line data={chartData} />
            </div>
          </div>
        </div>
      </div>
      {/* <div style={{ height: "400px" }} className="mt-10 ml-10">
      <h1>Token Supply Chart</h1>
      <div className="mt-10" style={{ height: "400px" }}>
      <canvas ref={chartRef}></canvas>
   </div>

      <div className="mt-10" style={{ height: "400px" }}>
     <h2>Pie Chart</h2>
     <Pie data={chartData} options={chartOptions} />
   </div>

   <div className="mt-10" style={{ height: "400px" }}>
     <h2>Doughnut Chart</h2>
     <Doughnut data={chartData} options={chartOptions} />
   </div>

   <div className="mt-10" style={{ height: "400px" }}>
     <h2>Area Chart</h2>
     <Line data={chartData} options={chartOptions} />
   </div>

    </div> */}
    </>
  );
};

export default TokenSupplyChart;
