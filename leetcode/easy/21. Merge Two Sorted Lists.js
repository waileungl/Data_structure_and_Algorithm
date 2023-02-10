// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:

// Input: list1 = [], list2 = []
// Output: []

// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.
// 
// unsolved
// 
// 
list1 = [1,2,4,4,6]
list2 = [1,3,4]

var mergeTwoLists = function (list1, list2) {
    if(!list1 && !list2) return []
    if(!list1 ) return list2
    if(!list2 ) return list1
    let j = 0;
    for (let i in list1) {
        while(list1[i] > list2[j]){
            j++
        }
        if(list1[i] <= list2[j]){
            list2.splice(j, 0, list1[i]);
            j++;
        }
    }
    return list2
};


console.log(mergeTwoLists(list1, list2))