/*
დავალება: მასივის Reduce მეთოდი

მოცემულია გაყიდვების მონაცემების მასივი, განახორციელეთ შემდეგი ფუნქცია reduce() მეთოდის გამოყენებით:

1. calculateTotalSales(sales)
   - გამოთვალეთ მთლიანი გაყიდვების თანხა
   - დააბრუნეთ ყველა გაყიდვის ჯამი

მოთხოვნები:
- გამოიყენეთ reduce() მეთოდი გამოთვლისთვის
*/

const sales = [
  { category: "Electronics", amount: 1200, date: "2024-01-15" },
  { category: "Clothing", amount: 150, date: "2024-01-16" },
  { category: "Electronics", amount: 800, date: "2024-01-17" },
  { category: "Books", amount: 50, date: "2024-01-18" },
  { category: "Clothing", amount: 200, date: "2024-01-19" },
];

// თქვენი კოდი აქ


  function calculateTotalSales(sales) {
    return sales.reduce((total, sale) => total + sale.amount, 0);
  }
  
  console.log(calculateTotalSales(sales));




console.log(calculateTotalSales(sales));
