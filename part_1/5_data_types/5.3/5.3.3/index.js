function truncate(str, maxlength) {
  str.length > maxlength
    ? console.log(str.slice(0, maxlength - 1) + '...')
    : console.log(str);
}
truncate('qqq', 3);
truncate('qqqqqqq', 3);
