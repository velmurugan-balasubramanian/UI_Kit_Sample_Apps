export declare class Timepicker {
    /**
     * State for all the time value\s
     */
    timeValues: any[];
    /**
     * Format of the time for input and output
     */
    hourFormat: string;
    /**
     * Represent the intervals and can be a number or array of numbers representing the minute values in an hour
     */
    isMeridianFormat?: boolean;
    /**
     * min time Object
     */
    minTimeObj: any;
    /**
     * Max time obj
     */
    maxTimeObj: any;
    /**
     * time output value
     */
    timeValue?: string;
    /**
     * interval bw two time in minutes
     */
    interval: number;
    /**
     * Min  time
     */
    minTime?: string;
    /**
     * Max time
     */
    maxTime?: string;
    private isPrimaryMeridian;
    private padZeroToTime;
    private getHoursMinutes;
    private getTimeInMeridian;
    private getTimeInNonMeridian;
    private getTimeInMins;
    private setMinMaxTimeObjs;
    private setTimeValues;
    private currentTimeLabel;
    private currentTimeValue;
    private setTimeValue;
    componentWillLoad(): void;
    render(): any;
}
