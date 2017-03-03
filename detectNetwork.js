var detectNetwork = function(cardNumber) {
  prefix1 = cardNumber.substring(0, 1);
  prefix2 = cardNumber.substring(0, 2);
  prefix3 = cardNumber.substring(0, 3);
  prefix4 = cardNumber.substring(0, 4);
  prefix6 = cardNumber.substring(0, 6);
  len = cardNumber.length;
    if (len === 14 && (prefix2 === '38' || prefix2 === '39')) {
      return "Diner's Club";
    } else if (len === 15 && (prefix2 === '34' || prefix2 === '37')) {
      return "American Express";
    } else if ((len === 16 || len === 18 || len === 19) && (prefix4 === '4903' || prefix4 === '4905' || prefix4 === '4911' || prefix4 === '4936' || prefix6 === '564182' || prefix6 === '633110' || prefix4 === '6333' || prefix4 === '6759')) {
        return "Switch";
    } else if ((len === 13 || len === 16 || len === 19) && prefix1 === '4') {
        return "Visa";
    } else if (len === 16 && Number(prefix2) >= 51 && Number(prefix2) <= 55) {
        return "MasterCard";
    } else if ((len === 16 || len === 19) && (prefix4 === '6011' || (Number(prefix3) >= 644 && Number(prefix3) <= 649) || prefix2 === '65')) {
        return "Discover";
    } else if ((len <= 19 && len >= 12) && (prefix4 === '5018' || prefix4 === '5020' || prefix4 === '5038' || prefix4 === '6304')) {
        return "Maestro";
    }  else if ((len <= 19 && len >= 16) && ((prefix6 >= 622126 && prefix6 <= 622925) || (prefix3 >= 624 && prefix3 <= 626) || (prefix4 >= 6282 && prefix4 <= 6288))) {
        return "China UnionPay";
    }
};
