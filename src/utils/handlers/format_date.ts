export const formatDate = (date: string) => {
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
