import { datetimeHelper } from '../datetime-helper.js';

describe('datetimeHelper', () => {
  describe('getDate should', () => {
    let day, month, year, hours, minutes, seconds;

    beforeEach(() => {
      const date = new Date();
      day = date.getDate();
      month = date.getMonth() + 1;
      year = date.getFullYear();
      hours = date.getHours();
      minutes = date.getMinutes();
      seconds = date.getSeconds();
    });

    test('return the current date', () => {
      const expected = `${day}.${month}.${year}`;

      const date = datetimeHelper.getDate();

      expect(date).toEqual(expected);
    });

    test('return the current time', () => {
      const expected = `${hours}:${minutes}:${seconds}`;

      const date = datetimeHelper.getTime();

      expect(date).toEqual(expected);
    });

    test('return the current timestamp', () => {
      const expected = `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;

      const date = datetimeHelper.getTimestamp();

      expect(date).toEqual(expected);
    });
  });
});
