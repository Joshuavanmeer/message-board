export class TimeStamp {

    constructor() {}

    static convertTime(isoTime: string) {
        const diff = (Date.now() - Date.parse(isoTime)) / 1000;
        let convertedTimestamp;

        if (diff < 60) {
            convertedTimestamp = 'a few seconds ago';
        }

        else if (diff > 60 && diff < 3600) {
            convertedTimestamp = this.convertToMinuteNotation(diff);
        }

        else if (diff > 3600 && diff < 86400) {
            convertedTimestamp = this.convertToHours(diff);
        }

        else if (diff > 86400 && diff < 604800) {
            convertedTimestamp = this.convertToDays(diff);
        }

        else if (diff > 604800) {
            convertedTimestamp = 'over a week ago';
        }

        return convertedTimestamp;

    }


    static convertToMinuteNotation(seconds: number) {
        let min = Math.floor(seconds / 60);
        let multiple = min > 1 ? 's' : '';
        return `${min} minute${multiple} ago`;
    }


    static convertToHours(seconds: number) {
        let hours = Math.floor(seconds / 3600);
        let multiple = hours > 1 ? 's' : '';
        return `${hours} hour${multiple} ago`
    }


    static convertToDays(seconds: number) {
        let days = Math.floor(seconds / 86400);
        let multiple = days > 1 ? 's' : '';
        return `${days} day${multiple} ago`
    }




}
