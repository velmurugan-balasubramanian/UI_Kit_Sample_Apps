import { r as registerInstance, h } from './core-f05d0500.js';
var Timepicker = /** @class */ (function () {
    function Timepicker(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        /**
         * State for all the time value\s
         */
        this.timeValues = [];
        /**
         * Format of the time for input and output
         */
        this.hourFormat = 'hh:mm p';
        /**
         * Represent the intervals and can be a number or array of numbers representing the minute values in an hour
         */
        this.isMeridianFormat = this.hourFormat === 'hh:mm p';
        /**
         * interval bw two time in minutes
         */
        this.interval = 30;
        /**
         * Min  time
         */
        this.minTime = this.isMeridianFormat ? '12:00 AM' : '00:00';
        /**
         * Max time
         */
        this.maxTime = this.isMeridianFormat ? '11:30 PM' : '23:30';
        this.setTimeValues = function () {
            var currentTime = _this.minTimeObj.timeInMinutes;
            do {
                var timeInMeridian = _this.getTimeInMeridian(currentTime);
                _this.timeValues.push({
                    timeInMinutes: currentTime,
                    label: {
                        meridian: timeInMeridian,
                        nonMeridian: _this.getTimeInNonMeridian(timeInMeridian),
                    },
                });
                currentTime += _this.interval;
            } while (currentTime <= _this.maxTimeObj.timeInMinutes);
        };
    }
    Timepicker.prototype.isPrimaryMeridian = function (time) {
        return time.includes('PM');
    };
    Timepicker.prototype.padZeroToTime = function (hours, mins) {
        var hoursStr = "" + hours;
        var minsStr = "" + mins;
        if (hours < 10) {
            hoursStr = "0" + hours;
        }
        if (mins < 10) {
            minsStr = "0" + mins;
        }
        return hoursStr + ":" + minsStr;
    };
    Timepicker.prototype.getHoursMinutes = function (time) {
        var hoursMins = time.split(':');
        var hours = Number(hoursMins[0]);
        var mins = Number(hoursMins[1].split(' ')[0]);
        return {
            hours: hours,
            mins: mins,
        };
    };
    Timepicker.prototype.getTimeInMeridian = function (timeInMinutes) {
        var hours = Math.floor(timeInMinutes / 60);
        var mins = timeInMinutes % 60;
        if (hours >= 12) {
            hours = hours === 12 ? hours : (hours - 12);
            return this.padZeroToTime(hours, mins) + " PM";
        }
        if (hours === 0) {
            hours += 12;
        }
        return this.padZeroToTime(hours, mins) + " AM";
    };
    Timepicker.prototype.getTimeInNonMeridian = function (time) {
        var hours = this.getHoursMinutes(time).hours;
        var mins = this.getHoursMinutes(time).mins;
        if (!this.isPrimaryMeridian(time)) {
            if (hours === 12) {
                hours -= 12;
            }
            return this.padZeroToTime(hours, mins);
        }
        else {
            if (hours !== 12) {
                hours += 12;
            }
        }
        return this.padZeroToTime(hours, mins);
    };
    Timepicker.prototype.getTimeInMins = function (time) {
        var nonMeridianTime = this.getTimeInNonMeridian(time);
        var _a = this.getHoursMinutes(nonMeridianTime), hours = _a.hours, mins = _a.mins;
        return (hours * 60) + mins;
    };
    Timepicker.prototype.setMinMaxTimeObjs = function () {
        this.minTimeObj = {
            timeInMinutes: this.getTimeInMins(this.minTime),
            nonMeridianTime: this.getTimeInNonMeridian(this.minTime),
        };
        this.maxTimeObj = {
            timeInMinutes: this.getTimeInMins(this.maxTime),
            nonMeridianTime: this.getTimeInNonMeridian(this.maxTime),
        };
    };
    Timepicker.prototype.currentTimeLabel = function (time) {
        return this.isMeridianFormat ? time.label.meridian : time.label.nonMeridian;
    };
    Timepicker.prototype.currentTimeValue = function (time) {
        return time.label.nonMeridian;
    };
    Timepicker.prototype.setTimeValue = function (e) {
        var value = e.detail.value;
        this.timeValue = value;
    };
    Timepicker.prototype.componentWillLoad = function () {
        this.setMinMaxTimeObjs();
        this.setTimeValues();
    };
    Timepicker.prototype.render = function () {
        var _this = this;
        return (h("fw-select", { onFwChange: this.setTimeValue }, this.timeValues.map(function (time) { return h("fw-select-option", { value: _this.currentTimeValue(time) }, _this.currentTimeLabel(time)); })));
    };
    return Timepicker;
}());
export { Timepicker as fw_timepicker };
