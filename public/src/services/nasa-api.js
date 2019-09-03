const BASE_URL = `https://api.nasa.gov/planetary/apod`;

const NASA_API_KEY = 'nLXnHzddtvLbW9bGmFOtqtMJ6M03TuOffFrSRLo5';


export function getBackground(date) {

    const url = `${BASE_URL}?date=${date}&api_key=${NASA_API_KEY}`;
    return fetch(url)
        .then(res => {
            return res.json();
        })
        .catch(err => {
            console.log(err);
        });

}
