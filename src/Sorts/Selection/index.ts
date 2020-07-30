const numbers: number[] = [11, 24, 19, 5, 37,55];

for (let index = 0; index < numbers.length - 1; index++) {
  let min_index = index;

  for (let j = index + 1; j < numbers.length; j++) {
    if (numbers[j] < numbers[min_index]) {
      min_index = j;
    }

    let temp = numbers[min_index];
    numbers[min_index] = numbers[index];
    numbers[index] = temp;
  }

  console.log(numbers)
}
