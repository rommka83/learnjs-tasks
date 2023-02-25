function checkSpam(str) {
  console.log(
    str.toLowerCase().includes('viagra') || str.toUpperCase().includes('XXX')
  );
}
checkSpam('buy ViAgRA now'); // true;
checkSpam('free xxxxx'); // true;
checkSpam('innocent rabbit'); // false;
