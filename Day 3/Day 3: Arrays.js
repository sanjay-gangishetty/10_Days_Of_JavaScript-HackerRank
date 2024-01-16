/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/

function getSecondLargest(nums) {
    // Complete the function
    let maxnum = 0;
    let maxnum2 =0;
    let nums2 = [];
    for(let i=0;i<nums.length;i++){
        if(maxnum<nums[i]){
            maxnum = nums[i];
        }
    }
    for(let i=0;i<nums.length;i++){
        if(!(nums[i]==maxnum)){
            nums2.push(nums[i]);
        }
    }
    for(let i=0;i<nums2.length;i++){
        if(maxnum2<nums2[i]){
            maxnum2 = nums2[i];
        }
    }
    return maxnum2;
}
