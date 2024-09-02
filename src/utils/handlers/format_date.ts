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
    return "ayer";
  } else {
    return `${daysGap} días`;
  }
};
