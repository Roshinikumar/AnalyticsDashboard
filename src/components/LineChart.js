// src/components/LineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";

const LineChart = ({ labels, data, label }) => {
    const chartData = {
        labels,
        datasets: [
            {
                label,
                data,
                fill: false,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
            },
        ],
    };

    return <Line data={chartData} options={{ responsive: true }} />;
};

export default LineChart;
