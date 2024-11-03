// src/components/BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";

const BarChart = ({ labels, data, label }) => {
    const chartData = {
        labels,
        datasets: [
            {
                label,
                data,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    return <Bar data={chartData} options={{ responsive: true }} />;
};

export default BarChart;
