// 1. Iterate through a shopping list and print each item in a shopping list.

  var shoppingList = ["apples", "oranges", "carrots"];

  // for (i=0; i<shoppingList.length; i++) {
  //   console.log(shoppingList[i]);
  // }

  // for each loop
  // takes each element in array
  // shoppingList.forEach(function(fruit) {
  //   console.log(fruit);
  // });


// 2. Iterate through a list of shopping lists and print each item in each list.

  var shoppingLists = [
              ["apples", "oranges", "carrots"],
              ["ham", "turkey", "cheese"],
              ["fruits", "vegetables", "meat"]
            ];

    // A.
    // for (var i=0; i<shoppingLists.length; i++) {
    //   console.log(shoppingLists[i]);
    //   for (var j=0; j < shoppingLists[i].length; j++) {
    //     console.log(shoppingLists[i][j]);
    //   }
    // }

    // B.
    // 2 for loops for array within array
    // 1 for loop for array, 1 for loop for array within array
    // explanation for shoppingLists[i]][j]
    // for (var i=0; i<shoppingLists.length; i++) {
    //   for (var j=0; j < shoppingLists[i].length; j++) {
    //     console.log("current array is", shoppingLists[i])
    //     console.log("current array is", j)
    //     console.log("current array is", shoppingLists[i][j])
    //   }
    // }

    // C.
    for (var i=0; i<shoppingLists.length; i++) {
     var currentArray = shoppingLists[i];
      for (var j=0; j < shoppingLists[i].length; j++) {
        console.log(currentArray[j]);
      }
    }

    // D.
    // // declare function
    // function printArrayElements(arr) {
    //   for(var i = 0; i < arr.length; i++) {
    //     console.log(arr[i]);
    //   }
    // }
    // // run function
    // for(var i =0; i < shoppingLists.length; i++) {
    //   printArrayElements(shoppingLists[i]);
    // }

// 3. Word counting:
// a. Count the number of space separated words in a string (Hint: do this with and without a for loop.).

var dayOfWeek= "Today is Thursday.";

function wordCount(str) {
  var totalSoFar = 0;
  for (var i=0; i<wordCount.length; i++) {
    if (str[i] == " ") {
      totalSoFar = +1;
    }
    totalSoFar += 1;
  }
}

console.log(wordCount("dayOfWeek"));


// b. Count the number of words that in a string that have the letter a in them.




// 4. Capitalize the first letter in every word in a string, i.e
//    "hello world" => "Hello World"




// 5. Find the largest number in a hardcoded array using a for loop. Find the smallest number in a hardcoded array.





// 6. You have a list of numbers below that somehow got shuffled and one is missing. Luckily you know that the numbers were from 1 to 100. Find the missing number.

var numbers = [56, 74, 31, 89, 8,
        22, 5, 19, 28, 100,
        82, 72, 39, 25, 90,
        1, 97, 83, 58, 38,
        57, 71, 70, 7, 3,
        12, 48, 45, 43, 84,
        68, 49, 37, 41, 92,
        96, 6, 66, 95, 15,
        67, 2, 59, 4, 91,
        44, 50, 17, 30, 88,
        34, 55, 64, 9, 27,
        73, 60, 32, 81, 10,
        53, 61, 63, 51, 65,
        36, 26, 99, 76, 47,
        21, 14, 16, 40, 79,
        75, 85, 42, 86, 18,
        23, 24, 46, 69, 29,
        77, 20, 54, 80, 87,
        13, 94, 98, 93, 62,
        35, 33, 11, 52];





// 7. Find the sum of the values in an array and the average.




// 8. Find the average of only the odd numbers in an array.




// 9. Write a loop that creates an array of 100 random integers (not decimal numbers).




// 10. Find the numbers in common in two different lists of numbers.




console.log('loops.js has finished');
