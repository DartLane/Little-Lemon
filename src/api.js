// Seeded random number generator for consistent results
const seededRandom = function (seed) {
    const m = 2**35 - 31;
    const a = 185852;
    let s = seed % m;

    return function () {
        return (s = s * a % m) / m;
    };
};

// Simulate API function to fetch available times
export function fetchAPI(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
}

// Simulate API function to submit booking
export function submitAPI(formData) {
    return true;  // Simulate successful submission
}