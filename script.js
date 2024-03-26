
    const scrollableDiv = document.getElementById('scrollableDiv');
    const myList = document.getElementById('infi-list');
    
    // Add scroll event listener
    scrollableDiv.addEventListener('scroll', function() {
      // Calculate the scroll position relative to the top of the list
      const scrollTop = scrollableDiv.scrollTop;
      const listHeight = myList.scrollHeight;
      const containerHeight = scrollableDiv.clientHeight;
      
      // Check if the scroll position is at the bottom of the list
      if (scrollTop + containerHeight >= listHeight) {
        // Add two more list items
        addMoreItems();
      }
    });
    
    // Function to add two more list items
    function addMoreItems() {
      for (let i = 0; i < 2; i++) {
        const newItem = document.createElement('li');
        newItem.textContent = `Item ${myList.children.length + 1}`;
        myList.appendChild(newItem);
      }
    }
 
  