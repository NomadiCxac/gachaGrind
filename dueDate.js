export default function timeToComplete (hours, minutes, seconds) {
    let currentDate = new Date ();

    currentDate.setHours(hours);
    currentDate.setMinutes(minutes);
    currentDate.setSeconds(seconds);

    return currentDate;
}