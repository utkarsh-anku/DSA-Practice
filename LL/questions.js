const LinkedList = require('./linkedList')

var getIntersectionNode = function(headA, headB) {
    let map = new Map()
    let currA = headA
    let currB = headB
    while(currA || currB) {
        map.set(currA, currA)
        map.set(currB, currB)

        if(map.has(currB)) {
            return currB
        }
         if(map.has(currA)) {
            return currA
        }

        currA = currA?.next
        currB = currB?.next
    }
    return null
};

// Test case 1: No intersection
function testNoIntersection() {
    console.log("Test 1: No intersection");
    const list1 = new LinkedList();
    list1.insertBack(1);
    list1.insertBack(2);
    list1.insertBack(3);
    
    const list2 = new LinkedList();
    list2.insertBack(4);
    list2.insertBack(5);
    list2.insertBack(6);
    
    const result = getIntersectionNode(list1.head, list2.head);
    console.log("Result:", result ? result.value : "null");
    console.log("Expected: null");
    console.log("---");
}

// Test case 2: With intersection
function testWithIntersection() {
    console.log("Test 2: With intersection");
    
    // Create first list: 1 -> 2 -> 3 -> 4 -> 5
    const list1 = new LinkedList();
    list1.insertBack(1);
    list1.insertBack(2);
    list1.insertBack(3);
    list1.insertBack(4);
    list1.insertBack(5);
    
    // Create second list: 6 -> 7 -> 3 -> 4 -> 5 (intersects at node with value 3)
    const list2 = new LinkedList();
    list2.insertBack(6);
    list2.insertBack(7);
    
    // Find the node with value 3 in list1 and make list2 point to it
    let curr = list1.head;
    while (curr && curr.value !== 3) {
        curr = curr.next;
    }
    list2.head.next.next = curr;
    
    const result = getIntersectionNode(list1.head, list2.head);
    console.log("Result:", result ? result.value : "null");
    console.log("Expected: 3");
    console.log("---");
}

// Test case 3: Same list
function testSameList() {
    console.log("Test 3: Same list");
    const list1 = new LinkedList();
    list1.insertBack(1);
    list1.insertBack(2);
    list1.insertBack(3);
    
    const result = getIntersectionNode(list1.head, list1.head);
    console.log("Result:", result ? result.value : "null");
    console.log("Expected: 1");
    console.log("---");
}

// Test case 4: One empty list
function testEmptyList() {
    console.log("Test 4: One empty list");
    const list1 = new LinkedList();
    list1.insertBack(1);
    list1.insertBack(2);
    
    const list2 = new LinkedList();
    
    const result = getIntersectionNode(list1.head, list2.head);
    console.log("Result:", result ? result.value : "null");
    console.log("Expected: null");
    console.log("---");
}

// Main execution
function main() {
    console.log("Testing getIntersectionNode function\n");
    
    testNoIntersection();
    testWithIntersection();
    testSameList();
    testEmptyList();
    
    console.log("All tests completed!");
}

// Run the tests
main();