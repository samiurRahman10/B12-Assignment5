1.getElementById vs getElementsByClassName vs querySelector/querySelectorAll
getElementById finds one element with a specific ID. getElementsByClassName finds all elements with a class, while querySelector gets the first match using CSS selectors and querySelectorAll gets all matches.

2.Create and insert a new element into the DOM
We can make a new element with document.createElement('tag-name') and then add it to the page using appendChild or insertBefore on a parent element.

3.Event Bubbling
When we click on an element, the event first happens on that element and then moves up to its parent elements automatically.

4.Event Delegation
Instead of adding a listener to every child, we can put one listener on the parent, and it can handle clicks on any child. This is useful for elements added later dynamically.

5.preventDefault() vs stopPropagation()
preventDefault() stops the browser from doing its usual action, like following a link or submitting a form. stopPropagation() stops the event from moving up to parent elements.