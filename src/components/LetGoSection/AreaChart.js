import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export const AreaChart = ({ chartData }) => (
  <Line
    data={chartData}
    options={{
      plugins: {
        legend: {
          display: false,
        },
        tooltips: {
          enabled: false,
        },
      },
      scales: {
        y: {
          suggestedMin: -10,
          suggestedMax: 10,
          display: false,
          beginAtZero: true,
          grid: {
            display: false,
          },
        },
        x: {
          display: false,
          grid: {
            display: false,
          },
        },
      },
    }}
  />
);
