const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

export const datetimeHelper = {
  getDate: () => `${day}.${month}.${year}`,
  getTime: () => `${hours}:${minutes}:${seconds}`,
  getTimestamp: () => `${datetimeHelper.getDate()} ${datetimeHelper.getTime()}`
};
