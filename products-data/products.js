const categories = products_raw_data.categories;
const items = products_raw_data.items;

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
function getDiscountedItems() {
  return items.filter((item) => item.is_discounted);
}
assignIDs();
