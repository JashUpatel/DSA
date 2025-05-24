// leetcode #983
// minimum cost for tickets
// you planned a trip travelling one year in advance
// the day of the year in which you will travel are given as an integer array days
// each days is an integer from 1 to 365
// train tickets are sold in 3 different ways
// a 1-day pass is sold for costs[0] dlr
// a 7-day pass is sold for costs[1] dlr
// 30-day pass is sold for costs[2] dlr
//  passes allow that many day of travel
// eg: we get 7day pass on day 2 then we can travel for 7days :2,3,4,5,6,7,&8
// return minimum number of dlrs you need to travel every day in given list of days

const days = [1, 4, 6, 7, 8, 20];
const costs = [2, 7, 15];
// o/p - 11

const minCostTicketRecursiveFunc = (days, costs, pos) => {
  // base check
  if (pos >= days.length) return 0;

  // solution check

  // cost for 1-day pass at pos loc
  let cost1 = costs[0] + minCostTicketRecursiveFunc(days, costs, pos + 1);

  // cost for 7-day pass at pos loc
  let passEndDay7 = days[pos] + 7 - 1;
  let newPos7 = pos;
  while (newPos7 < days.length && days[newPos7] <= passEndDay7) {
    newPos7++;
  }
  let cost2 = costs[1] + minCostTicketRecursiveFunc(days, costs, newPos7);

  // cost for 30-day pass at pos loc
  let passEndDay30 = days[pos] + 30 - 1;
  let newPos30 = pos;
  while (newPos30 < days.length && days[newPos30] <= passEndDay30) newPos30++;

  let cost3 = costs[2] + minCostTicketRecursiveFunc(days, costs, newPos30);

  return Math.min(cost1, cost2, cost3);
};

// minimum travel cost via recursive solution
// Big O - TC O(3^n) 3 solution at each step
// SC O(n+1) = O(n)  max n+1 depth in stack for recursive function
const minCostTicket = (days, costs) => {
  let pos = 0;
  return minCostTicketRecursiveFunc(days, costs, pos);
};

console.log(minCostTicket(days, costs));
