/* eslint-disable no-undef */
const ctx = document.getElementById('all-user-stats').getContext('2d');


Chart.defaults.global.defaultFontColor = '#FFF';

// eslint-disable-next-line no-unused-vars
const allTimeStats = new Chart(ctx, {

    type: 'horizontalBar',
    defaultFontColor: 'white',
    data: {
        labels: [`Birdperson`, `Simple Rick`, `Evil Morty`, `Dr. Wong`, `Armagheadon`, `Jerry`, `The President`, `Morty`, `Mr. PoopyButthole`, `Beth`, `Squanchy`, `Summer`, `Unity`, `Mr. Needful`, `Sleepy Gary`, `Mr. Meeseeks`],
        datasets: [{
            label: 'Sanchez Personality Experiment Assessments',
            backgroundColor: 'green',
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        scaleFontColor: '#FFFFFF',
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontFamily: 'adult-swim-font'
                }
            }]
        }
    }

});