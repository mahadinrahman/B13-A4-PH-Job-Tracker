1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
>>>>>>>>
**getElementById()**
**selects only one element
**uses id name
**returns a single element object

**getElementsByClassName()**
**selects multiple elements
**uses class name
**returns multiple elements

**querySelector()**
**returns 1st matching element only

**querySelectorAll()**
**returns all matching element 
**returns a nodelist

2. How do you create and insert a new element into the DOM?
>>>>>>>>

step 1-create a new element
step 2-add contents by innerText or innerHTML
step 3-select parent element
step 4-insert into parent element by appendChild()

3. What is Event Bubbling? And how does it work?
>>>>>>>>>>>>>>

Event Bubbling is a process where an event starts from the element that triggered it and then propagates upward through its parent elements in the DOM tree.

when we click a child element,the event doesn't stay there.It  bubbles up to its parent,then grandparent and so on.

ex:
button > div > body > html > document > window

4. What is Event Delegation in JavaScript? Why is it useful?
>>>>>>>>>>>>

Event Delegation is a technique where we attach a single event listener to a parent element to handle events for its child elements,instead of adding event listener to each child individually.

document.getElementByAdd('parent').addEventListener('click',function(){

})

why is it useful?
**Instead of adding 100 listeners to 100 buttons >use one listener on the parent

**If new elements are added later,they automatically work

**less repetition,easier maintenance

5. What is the difference between preventDefault() and stopPropagation() methods?
>>>>>>>>>>>

**preventDefault()**
stops the default behavior of an element.

**stopPropagation()**
stops the event from bubbling up the DOM tree.




