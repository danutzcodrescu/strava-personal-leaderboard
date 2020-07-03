import { format, isToday, isYesterday } from 'date-fns';

export function activityDate(dateString: string) {
  const zonedDate = new Date(dateString.substring(0, 19));
  if (isToday(zonedDate)) {
    return `Today at ${format(zonedDate, 'HH:mm')}`;
  }
  if (isYesterday(zonedDate)) {
    return `Yesterday at ${format(zonedDate, 'HH:mm')}`;
  }
  return `${format(zonedDate, 'dd-MMM-yyyy')} at ${format(zonedDate, 'HH:mm')}`;
}

interface Minutes {
  minutes: number;
  seconds: number;
}

interface Hours {
  hours: number;
  minutes: number;
}

type Duration = Minutes | Hours;

function calculateDuration(duration: number): Duration {
  if (duration < 3600) {
    const minutes = Math.floor(duration / 60);
    return { minutes, seconds: duration - minutes * 60 };
  }
  const hours = Math.floor(duration / 3600);
  return {
    hours,
    minutes: Math.floor((duration - hours * 3600) / 60),
  };
}

export function convertDurationForActivityTitle(duration: number) {
  const time = calculateDuration(duration);
  if ((time as Hours).hours) {
    return `${(time as Hours).hours}h ${time.minutes}m`;
  }
  if (time.minutes === 0) return 0;
  return `${time.minutes}m ${(time as Minutes).seconds}`;
}

export function convertDurationForPR(duration: number) {
  const time = calculateDuration(duration);
  return `${time.minutes}:${(time as Minutes).seconds}`;
}
