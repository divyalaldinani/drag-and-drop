# About
This is a simple project I have made by using HTML, CSS, and JS. 
This project has two containers and each container has some items initially. The functionality of this project is: The items from any of the boxes can be dragged and dropped to another box.

# HTML
In HTML code, I have specified two containers as left and right containers which have a total of 8 items/boxes, and to add items into each one of them, I have added an unordered list.

# CSS
Add properties to the required items, and added a feature that whenever a box is being dragged from a container, its border/outline is removed.

# JS
Made three lists:
1. list that has items that have a class of 'list-item' (for selecting all the items/boxes)
2. leftContainer is an object that holds item with the class 'left'
3. rightContainer is an object that holds item with class 'right'
'selected' is the item being dragged and dropped from one container to another.
For each list-item, I added an event listener (drag start) so that I get to know which item is getting dragged and added it to 'selected'.
Then, for each item(in both containers), allowed it to be dragged and dropped.
From, left container, if the item is getting dragged and it is dragged over the right container and dropped into it, then we remove it from the class of left and add the class of 'right' to it. Also, we remove it from leftContainer and add it to rightContainer and vice-versa(when an item is selected and dragged from the right container and dropped to the left container).

# Contributions
Feel free to contribute to this project by opening issues, suggesting improvements, or submitting pull requests. Your contributions are highly appreciated.

Enjoy experimenting with drag and drop functionality with this project! If you have any questions or suggestions, please don't hesitate to reach out and contribute to this project.
