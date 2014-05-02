.pragma library

var today = new Date()
today.setHours(0)
today.setMinutes(0)
today.setSeconds(0)
today.setMilliseconds(0)

function formattedDate(date) {
    if (isToday(date)) {
        return "Today"
    } else {
        return date.toLocaleDateString(Qt.locale())
    }
}

function dayOfWeek(date) {
    return Qt.formatDate(date, "dddd")
}

function setDayOfWeek(date, day) {

    var currentDay = date.getDay();
    var distance = day - currentDay;
    date.setDate(date.getDate() + distance);
}

function dayOfWeekIndex(date) {
    var list = []
    for (var i = 0; i < 7; i++) {
        list.push(Qt.locale().dayName(i))
    }
    var day = Qt.formatDate(date, "dddd")
    print (day)
    return list.indexOf(day)
}

function isToday(date) {
    var today = new Date()

    return datesEqual(date, today)
}

function datesEqual(date1, date2) {
    return date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate()
}

function dateIsBefore(date1, date2) {
    var ans = date1.getFullYear() < date2.getFullYear() ||
            (date1.getFullYear() === date2.getFullYear() && date1.getMonth() < date2.getMonth()) ||
            (date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth()
                    && date1.getDate() < date2.getDate())
    return ans
}

function dateIsBeforeOrSame(date1, date2) {
    var ans = date1.getFullYear() < date2.getFullYear() ||
            (date1.getFullYear() === date2.getFullYear() && date1.getMonth() < date2.getMonth()) ||
            (date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth()
                    && date1.getDate() <= date2.getDate())
    return ans
}

function dateIsThisWeek(date) {
    var end = new Date()
    end.setDate(end.getDate() + 7)
    return dateIsBefore(date, end)
}

function friendlyTime(time) {
    var now = new Date()
    var seconds = (now - time)/1000;
    print("Difference:", now, time, now - time)
    var minutes = Math.round(seconds/60);
    if (minutes < 1)
        return i18n.tr("Now")
    else if (minutes == 1)
        return i18n.tr("1 minute ago")
    else if (minutes < 60)
        return i18n.tr("%1 minutes ago").arg(minutes)
    var hours = Math.round(minutes/24);
    if (hours == 1)
        return i18n.tr("1 hour ago")
    else if (hours < 24)
        return i18n.tr("%1 hours ago").arg(hours)
    return Qt.formatDate(time)
}

function friendlyDuration(duration, type) {
    var hours = Math.floor(duration/(1000 * 60 * 60))
    var minutes = Math.floor(duration/(1000 * 60) - 60 * hours)
    var seconds = Math.floor(duration/1000 - 60 * minutes - 60 * 60 * hours)

    var str = "%1s".arg(seconds)
    //if (minutes >= 1)
        str = "%1m %2".arg(minutes).arg(str)
    //if (hours >= 1)
        str = "%1h %2".arg(hours).arg(str)
    return str
}

function parseDuration(str) {
    var days = str.match(/(\d+)\s*d/);
    var hours = str.match(/(\d+)\s*h/);
    var minutes = str.match(/(\d+)\s*m/);
    var seconds = str.match(/(\d+)\s*s/);
    var time = 0;
    if (days)
        time += parseInt(days[1]) * 86400
    if (hours)
        time += parseInt(hours[1]) * 3600
    if (minutes)
        time += parseInt(minutes[1]) * 60
    if (seconds)
        time += parseInt(seconds[1])
    return time * 1000;
}

function daysUntilDate(date) {
    return Math.floor((new Date(date) - new Date())/(1000*60*60*24))
}

function toUTC(date) {
    return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
}

function timeFromDate(date) {
    print(date.getSeconds(),date.getMinutes() * 60,date.getHours() * 3600)
    return 1000 * (date.getSeconds() + date.getMinutes() * 60 + date.getHours() * 3600)
}
