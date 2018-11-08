const normalizeNumber = x => {
  return x < 10 ? `0${x}` : x;
};

export const getCurrentDate = () => {
  const date = new Date();
  return `${date.getFullYear()}-${normalizeNumber(date.getMonth() + 1)}-${normalizeNumber(date.getDate())} ` +
    `${normalizeNumber(date.getHours())}:${normalizeNumber(date.getMinutes())}:${normalizeNumber(date.getSeconds())}`;
};