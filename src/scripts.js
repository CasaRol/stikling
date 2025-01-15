import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone)

//Remainding time
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

//Passed time
function getPassedTime(timestampMs) {
    const timestampGoal = dayjs.utc(timestampMs).tz('Europe/Copenhagen'); //Accounts for daylight saving time
    const timestampNow = dayjs.utc();



    return {
        seconds: getPassedSeconds(timestampNow, timestampGoal),
        minutes: getPassedMinutes(timestampNow, timestampGoal),
        hours: getPassedHours(timestampNow, timestampGoal),
        days: getPassedDays(timestampNow, timestampGoal),
        months: getPassedMonths(timestampNow, timestampGoal),
        years: getPassedYears(timestampNow, timestampGoal)
    }
}

function getPassedSeconds(timestampNow, timestampGoal) {
    return timestampNow.diff(timestampGoal, 'seconds') % 60;
}

function getPassedMinutes(timestampNow, timestampGoal) {
    return timestampNow.diff(timestampGoal, 'minutes') % 60;
}

function getPassedHours(timestampNow, timestampGoal) {
    return timestampNow.diff(timestampGoal, 'hours') % 24;
}

function getPassedDays(timestampNow, timestampGoal) {
    return Math.floor(timestampNow.diff(timestampGoal, 'days') % 30.43);
}

function getPassedMonths(timestampNow, timestampGoal) {
    return timestampNow.diff(timestampGoal, 'months') % 12;
}

function getPassedYears(timestampNow, timestampGoal) {
    return timestampNow.diff(timestampGoal, 'years');
}




export { getRemainingTime, getPassedTime }