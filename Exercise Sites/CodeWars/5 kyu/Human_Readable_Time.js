const hourInSeconds = 60 * 60;
const minuteInSeconds = 60;

function humanReadable (s) {
    if (s >= 359999) return '99:59:59';
    let h, m;
    if (s / hourInSeconds >= 1) {
        h = Math.floor(s / hourInSeconds);
        s -= h * hourInSeconds;
    }
    if (s / minuteInSeconds >= 1) {
        m = Math.floor(s / minuteInSeconds);
        s -= m * minuteInSeconds;
    }
    return `${h ? (h < 10) ? '0' + h.toString() : h : '00'}:${m ? (m < 10) ? '0' + m.toString() : m : '00'}:${s ? (s < 10) ? '0' + s.toString() : s : '00'}`;
}
