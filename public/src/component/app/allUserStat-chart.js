/* eslint-disable no-undef */
import { getAllTimeData } from '../../services/quiz-api.js';
const ctx = document.getElementById('all-user-stats').getContext('2d');
Chart.defaults.global.defaultFontColor = '#FFF';

let data = {};

getAllTimeData()
    .then(results => {
        results.forEach(result => {
            if (result.result) {
                data[result.result] ? data[result.result] = data[result.result] + 1 : data[result.result] = 1;
            }
        });
    })
    .then(() => {

        const labels = Object.keys(data);
        const chartData = labels.map(val => {
            return data[val];
        });

        // eslint-disable-next-line no-unused-vars
        const allTimeStats = new Chart(ctx, {


            type: 'horizontalBar',
            defaultFontColor: 'white',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Sanchez Personality Experiment Assessments',
                    backgroundColor: 'green',
                    data: chartData
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                scaleFontColor: '#FFFFFF',
                scales: {
                    xAxes: [{
                        ticks: {
                            beginAtZero: true,
                            fontFamily: 'adult-swim-font',
                            stepSize: 1,
                        }
                    }]
                }
            }

        });
    });