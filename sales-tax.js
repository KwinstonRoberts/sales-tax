var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  var result = [];
  for(var x=0; x<3; x++){result.push({})}
  for(var data in salesData){
    result[data].name = salesData[data].name;
    var sum =0;
    for(var x in salesData[data]['sales']){
      sum+= salesData[data]['sales'][x];
      
      
      
    }
   result[data]['TotalSales'] = Math.floor(sum);
   result[data]['TotalTax'] = Math.floor(sum*salesTaxRates[salesData[data]['province']]);
  }
  for(var x=result.length-1; x>=0; x--){
    for(var y =x-1; y>=0; y--){
      if(result[x].name == result[y].name){
        result[x].TotalSales += result[y].TotalSales;
        result[x].TotalTax += result[y].TotalTax;
        result.shift(y);
      }
    }
  };
   return result;  
}
var results = calculateSalesTax(companySalesData, salesTaxRates);

console.log(JSON.stringify(results,undefined,2));