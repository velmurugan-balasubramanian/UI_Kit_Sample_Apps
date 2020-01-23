import { r as registerInstance, h } from './core-f05d0500.js';

const Timepicker = class {
    constructor(hostRef) {
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
        this.setTimeValues = () => {
            let currentTime = this.minTimeObj.timeInMinutes;
            do {
                const timeInMeridian = this.getTimeInMeridian(currentTime);
                this.timeValues.push({
                    timeInMinutes: currentTime,
                    label: {
                        meridian: timeInMeridian,
                        nonMeridian: this.getTimeInNonMeridian(timeInMeridian),
                    },
                });
                currentTime += this.interval;
            } while (currentTime <= this.maxTimeObj.timeInMinutes);
        };
    }
    isPrimaryMeridian(time) {
        return time.includes('PM');
    }
    padZeroToTime(hours, mins) {
        let hoursStr = `${hours}`;
        let minsStr = `${mins}`;
        if (hours < 10) {
            hoursStr = `0${hours}`;
        }
        if (mins < 10) {
            minsStr = `0${mins}`;
        }
        return `${hoursStr}:${minsStr}`;
    }
    getHoursMinutes(time) {
        const hoursMins = time.split(':');
        const hours = Number(hoursMins[0]);
        const mins = Number(hoursMins[1].split(' ')[0]);
        return {
            hours,
            mins,
        };
    }
    getTimeInMeridian(timeInMinutes) {
        let hours = Math.floor(timeInMinutes / 60);
        const mins = timeInMinutes % 60;
        if (hours >= 12) {
            hours = hours === 12 ? hours : (hours - 12);
            return `${this.padZeroToTime(hours, mins)} PM`;
        }
        if (hours === 0) {
            hours += 12;
        }
        return `${this.padZeroToTime(hours, mins)} AM`;
    }
    getTimeInNonMeridian(time) {
        let { hours } = this.getHoursMinutes(time);
        const { mins } = this.getHoursMinutes(time);
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
    }
    getTimeInMins(time) {
        const nonMeridianTime = this.getTimeInNonMeridian(time);
        const { hours, mins } = this.getHoursMinutes(nonMeridianTime);
        return (hours * 60) + mins;
    }
    setMinMaxTimeObjs() {
        this.minTimeObj = {
            timeInMinutes: this.getTimeInMins(this.minTime),
            nonMeridianTime: this.getTimeInNonMeridian(this.minTime),
        };
        this.maxTimeObj = {
            timeInMinutes: this.getTimeInMins(this.maxTime),
            nonMeridianTime: this.getTimeInNonMeridian(this.maxTime),
        };
    }
    currentTimeLabel(time) {
        return this.isMeridianFormat ? time.label.meridian : time.label.nonMeridian;
    }
    currentTimeValue(time) {
        return time.label.nonMeridian;
    }
    setTimeValue(e) {
        const { value } = e.detail;
        this.timeValue = value;
    }
    componentWillLoad() {
        this.setMinMaxTimeObjs();
        this.setTimeValues();
    }
    render() {
        return (h("fw-select", { onFwChange: this.setTimeValue }, this.timeValues.map(time => h("fw-select-option", { value: this.currentTimeValue(time) }, this.currentTimeLabel(time)))));
    }
};

export { Timepicker as fw_timepicker };
