export const getTimeStamp = (createdAt: Date): string => {
    const now = new Date();
    const timeDifference = now.getTime() - createdAt.getTime();

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (years > 0) {
        return `${years} year${years > 1 ? 's' : ''} ago`;
    } else if (months > 0) {
        return `${months} month${months > 1 ? 's' : ''} ago`;
    } else if (weeks > 0) {
        return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
    } else if (days > 0) {
        return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
        return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
    }
};



export const formatNumber = (number: number): string => {
    let result: string;
    let divisor: number;

    if (number >= 1e6) {
        result = (number / 1e6).toFixed(2);
        divisor = 1e6;
    } else if (number >= 1e3) {
        result = (number / 1e3).toFixed(2);
        divisor = 1e3;
    } else {
        result = number.toFixed(2);
        divisor = 1;
    }

    const extension = divisor === 1e6 ? 'M' : divisor === 1e3 ? 'K' : '';
    result = result.endsWith('.00') ? result.slice(0, -3) : result;

    return `${result}${extension}`;
};
