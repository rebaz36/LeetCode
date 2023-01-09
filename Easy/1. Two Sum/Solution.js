var twoSum = function(nums, target) {
    const hashTable = new Map();

  // Iterate through the elements in the input array
  for (let i = 0; i < nums.length; i++) {
    // Calculate the difference between the target and the current element
    const difference = target - nums[i];
    // Check if the difference is in the hash table
    if (hashTable.has(difference)) {
      // If the difference is in the hash table, return the indices of the two elements
      return [hashTable.get(difference), i];
    }
    // Add the current element to the hash table
    hashTable.set(nums[i], i);
  }
  // If no pair of elements was found, return an empty array
  return [];
};
