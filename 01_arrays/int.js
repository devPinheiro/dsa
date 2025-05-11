/**
 * 
 * Merge two sorted array
 * 
 * e.g mergeSortedArray([0,2,4,6], [1,3,7,8,9])
 * result = [0,1,2,3,4,5,6,7,8,9]
 * 
 */


// naive

const mergeSortedArrayNaive = (arr1, arr2) => {
    let temp = []
   for (let i = 0; i < arr1.length-1; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if(arr1[i]<arr2[j]){
          temp.push(arr1[i])
        } 
      }
    
   }
   return temp
}


// modern and readable (sort method)
const mergeSortedArray = (arr1, arr2) => {
   return [...arr1, ...arr2].sort((a,b) => a - b)
}

/**
 * 
 * Find duplicates
 * 
 */




/**
  Two Sum
Easy
Topics
Companies
Hint
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?


const twoSum = (array, sum) => {

   let window = new Set()
   let result = []
   for(i=0, i < array.length, i++){
     if(window.has(array[i])){
       result.push(i)
     } else {
       window.add(sum-array[i]) 
     }

}
         return result
         }
 */