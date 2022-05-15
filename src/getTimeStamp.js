export const getTimeStamp = (unixCode, timezone) => {
    let hours;
    let date = new Date(unixCode * 1000);
    let mins = date.getMinutes();

    if(timezone < 0) {
        hours = date.getUTCHours() + (timezone/3600);
    } else if (timezone > 0) {
        hours = date.getUTCHours() + (timezone/3600) - 12;
    }

    if(hours > 12) {
        hours -= 12;
    } else if (hours < 0) {
        hours += 12;
    }

    if(mins < 10) {
        mins = `0${mins}`
    }

    return `${hours}:${mins}`;
}