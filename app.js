function excludingVatPrice(price){
    let noVat = Number(((price / 115) * 100).toFixed(2));
      if (price == null){
          return -1;
      } else {
          return noVat;
      }
  }

console.log(excludingVatPrice(230)); // 200.00
console.log(excludingVatPrice(123)); // 106.96
console.log(excludingVatPrice(115)); // 100.00