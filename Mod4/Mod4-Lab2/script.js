let shoppingList = [];

    function addItem(item) {
      if (item.trim() === "") {
        console.log("Cannot add empty item.");
        return;
      }

      // Add if not Already exist in the list (case-insensitive)
      const exists = shoppingList.some(existingItem =>existingItem.toLowerCase() === item.toLowerCase()
      );
  if (!exists) {
        shoppingList.push(item);
        console.log(`Added item: ${item}`);
      } else {
        console.log(`Item "${item}" is already in the list.`);
      }

      displayList();
    }
    // For Removing the Last time.
  function removeLastItem() {
      const removed = shoppingList.pop();
      if (removed !== undefined) {
        console.log(`Removed last item: ${removed}`);
      } else {
        console.log("The shopping list is already empty.");
      }

      displayList();
    }
  function displayList() {
      console.log("Current Shopping List:", shoppingList);
      const ul = document.getElementById("listDisplay");
      ul.innerHTML = "";

      shoppingList.forEach(item => {
        const li = document.createElement("li");li.textContent = item;ul.appendChild(li);
      });
    }

   // Filter/Search function 
    function filterItems(searchTerm) {
      const filtered = shoppingList.filter(item =>item.toLowerCase().includes(searchTerm.toLowerCase())
      );
      console.log(`Filtered items for "${searchTerm}":`, filtered);
      return filtered;
    }

   // HTML input/button actions
    function AddItem() {
      const input = document.getElementById("itemInput");
      const item = input.value;
      addItem(item);
      input.value = "";
    }
   function RemoveLastItem() {
      removeLastItem();
    }

    function Search() {
      const searchInput = document.getElementById("searchInput");
      const term = searchInput.value;
      filterItems(term);
    }