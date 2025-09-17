// In programming, memory is divided into two main areas: the stack and the heap.

// Stack Memory: The stack is a region of memory that is used to store local variables and function call information. When a function is called, its parameters and local variables are pushed onto the stack. As the function completes, these values are popped off the stack. The stack is managed automatically by the program and is usually of fixed size.
// ===> Stack memory is allocated and deallocated automatically by the compiler as functions are called and return. It's efficient for managing local variables and function calls but has limited size

// Heap Memory: The heap is a region of memory that is used for dynamic memory allocation. It is managed by the programmer and is not automatically freed like stack memory. Memory allocated on the heap must be explicitly deallocated using functions like free() in C or delete in C++ to prevent memory leaks. The heap is typically used for objects whose size is not known at compile time or for objects that need to persist beyond the scope of a single function.
// ===> Heap memory, on the other hand, is allocated and deallocated manually by the programmer. It's suitable for dynamic memory allocation, allowing for the creation of data structures whose size is not known at compile time. However, improper management of heap memory can lead to memory leaks and other issues

//==================================================================================

// Stack (Primitive)  &  Heap (Non-Primitive)

let myYoutueChannel = "CodeWithJayesh"

let anotherYoutubeChannel = myYoutueChannel;
myYoutueChannel = "WriteCodeWithJayesh"

console.log(myYoutueChannel);         //CodeWithJayesh
console.log(anotherYoutubeChannel);   //WriteCodeWithJayesh
//Here in Stack memory when we rewrite the Value at that a new value copy from old variable is created.So there is three values is there in stack memory

let userOne = {
    mailId: "Jayesh@google.com",
    upiId: 784512985623
}

let userTwo = userOne

userTwo.mailId = "Jayesh123@google.com"

console.log(userOne.mailId);    // Jayesh123@google.com
console.log(userTwo.mailId);    // Jayesh123@google.com

//Here in Heap memory there is first mailId = "Jayesh1409@google.com" but after rewrite or changing the value to "Jayesh123@google.com", the mailId will be change not be copy so the Value of mailId is "Jayesh123@google.com"
// it get reference



