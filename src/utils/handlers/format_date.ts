export const formatDate = (date: string): string => {
  const now = new Date();
  const dateFromInput = new Date(date);

  const timeGap = now.getTime() - dateFromInput.getTime();
  const daysGap = Math.floor(timeGap / (1000 * 60 * 60 * 24));

  if (daysGap === 0) {
    return dateFromInput.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  } else if (daysGap === 1) {
    return "yesterday";
  } else if (daysGap >= 30) {
    const monthGap = Math.floor(daysGap / 30);
    return `${monthGap} ${monthGap >= 2 ? "months" : "month"}`;
  } else if (daysGap >= 7) {
    const weekGap = Math.floor(daysGap / 7);
    return `${weekGap} ${weekGap >= 2 ? "weeks" : "week"}`;
  } else {
    return `${daysGap} days`;
  }
};

export const formatHour = (dateString: string): string => {
  const date = new Date(dateString);

  let hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; 

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${hours}:${formattedMinutes} ${ampm}`;
}
