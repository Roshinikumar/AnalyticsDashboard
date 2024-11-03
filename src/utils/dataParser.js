// src/utils/dataParser.js
import Papa from 'papaparse';

export const parseCSV = (filePath, callback) => {
    Papa.parse(filePath, {
        download: true,
        header: true,
        complete: (results) => {
            callback(results.data);
        },
    });
};
