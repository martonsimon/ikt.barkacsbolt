const categories = products_raw_data.categories;
const items = products_raw_data.items;
const fuse = new Fuse(items, {
  keys: ['name'], // Specify the properties to search (e.g., 'name')
  threshold: 0.4, // Set the search threshold (adjust as needed)
});

function assignIDs() {
  items.forEach((item, index) => {
    item.id = index;
  });
}
function getCategoryById(categoryId) {
  return categories.find((category) => category.id == categoryId);
}
function getItemByName(itemName) {
  return items.find((item) => item.name === itemName);
}
function getItemById(itemId) {
  if (itemId >= 0 && itemId < items.length) {
    return items[itemId];
  }
  return null;
}
function getItemsInCategory(categoryId) {
  return items.filter((item) => item.category_id === categoryId);
}
function getItemsBySearch(searchQuery){
  /*const searchResults = [];
  items.forEach((item) => {
    if (item.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      searchResults.push(item);
    }
  });*/
  const fuseResult = fuse.search(searchQuery);
  var searchResults = fuseResult.map((result) => result.item);
  return searchResults;
}
function getDiscountedItems() {
  return items.filter((item) => item.is_discounted);
}
assignIDs();
