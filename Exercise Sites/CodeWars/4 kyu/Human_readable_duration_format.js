const seconds = s => { return `${s} second${s === 1 ? '' : 's'}` }
const minutes = m => { return `${m} minute${m === 1 ? '' : 's'}` }
const hours = h => { return `${h} hour${h === 1 ? '' : 's'}` }
const days = d => { return `${d} day${d === 1 ? '' : 's'}` }
const years = y => { return `${y} year${y === 1 ? '' : 's'}` }
const addTimeToArray = (s, unitInSeconds, callback, addTo) => {
    if (s / unitInSeconds >= 1) {
        let timeUnit = Math.floor(s / unitInSeconds);
        s -= timeUnit * unitInSeconds;
        addTo.push(`${callback(timeUnit)}`);
    }
    return s;
}

const yearInSeconds = 60 * 60 * 24 * 365;
const dayInSeconds = 60 * 60 * 24;
const hourInSeconds = 60 * 60;
const minuteInSeconds = 60;

function formatDuration (s) {
    if (s === 0) return 'now';
    let timeArray = [];

    s = addTimeToArray(s, yearInSeconds, years, timeArray);
    s = addTimeToArray(s, dayInSeconds, days, timeArray);
    s = addTimeToArray(s, hourInSeconds, hours, timeArray);
    s = addTimeToArray(s, minuteInSeconds, minutes, timeArray);

    if (s > 0) timeArray.push(seconds(s));

    return timeArray.length > 1 ? timeArray.slice(0, timeArray.length - 1).join(', ') + " and " + timeArray[timeArray.length - 1] : timeArray[0];
}