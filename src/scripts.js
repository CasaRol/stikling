import dayjs from 'dayjs'

function dateToMs(date) {
    console.log(date.getTime())
    return date.getTime()
}

function getRemainingTime(timestampMs) {
    const timestampGoal = dayjs(timestampMs);
    const timestampNow = dayjs();



    return {
        seconds: getRemainingSeconds(timestampNow, timestampGoal),
        minutes: getRemainingMinutes(timestampNow, timestampGoal),
        hours: getRemainingHours(timestampNow, timestampGoal),
        days: getRemainingDays(timestampNow, timestampGoal)
    }
}

function getRemainingSeconds(timestampNow, timestampGoal) {
    return timestampGoal.diff(timestampNow, 'seconds') % 60;
}

function getRemainingMinutes(timestampNow, timestampGoal) {
    return timestampGoal.diff(timestampNow, 'minutes') % 60;
}

function getRemainingHours(timestampNow, timestampGoal) {
    return timestampGoal.diff(timestampNow, 'hours') % 24;
}

function getRemainingDays(timestampNow, timestampGoal) {
    return timestampGoal.diff(timestampNow, 'days');
}

export { getRemainingTime, dateToMs }