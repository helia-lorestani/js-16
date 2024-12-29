// ? why event bubbling is bad and how can we prevent it?

// ! Answers ======================================
// it can sometimes lead to undesirable behavior. This is particularly true when you have event listeners on multiple levels of the DOM hierarchy.

// to prevent event bubbling, we can use the stopPropagation() or stopImmediatePropagation()

// One of the problems it causes is that even when you for example click on the children (according to the desired event), you get the result that you wanted to be executed for the parent.

// The event. stopPropagation() method stops the bubbling of an event to parent elements, preventing any parent event handlers from being executed.
