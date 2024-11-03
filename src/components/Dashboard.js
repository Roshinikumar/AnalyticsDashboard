// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import BarChart from './BarChart';
import LineChart from './LineChart';
import { parseCSV } from '../utils/dataParser';

const Dashboard = () => {
    const [data, setData] = useState([]);
    const [years, setYears] = useState([]);
    const [evCounts, setEvCounts] = useState([]);

    useEffect(() => {
        parseCSV('/Electric_Vehicle_Population_Data.csv', (parsedData) => {
            setData(parsedData);
            processData(parsedData);
        });
    }, []);

    const processData = (data) => {
        const yearLabels = [...new Set(data.map(item => item.Year))];
        const counts = yearLabels.map(year => data.filter(item => item.Year === year).length);

        setYears(yearLabels);
        setEvCounts(counts);
    };

    return (
        <div>
            <h1>Electric Vehicle Population Dashboard</h1>
            <div>
                <h2>EV Population Over Time</h2>
                <LineChart labels={years} data={evCounts} label="Number of EVs" />
            </div>
            <div>
                <h2>Yearly EV Count</h2>
                <BarChart labels={years} data={evCounts} label="Yearly EV Count" />
            </div>
        </div>
    );
};

export default Dashboard;
