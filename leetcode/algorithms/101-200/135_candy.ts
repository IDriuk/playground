/*
  135. Candy
  There are N children standing in a line. Each child is assigned a rating value.

  You are giving candies to these children subjected to the following requirements:
  Each child must have at least one candy.
  Children with a higher rating get more candies than their neighbors.

  What is the minimum candies you must give?
*/

export function candy(ratings: number[]): number {
  let candies = Array(ratings.length).fill(1);
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }
  let sum = candies[ratings.length - 1];
  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
    sum += candies[i];
  }
  return sum;
}
