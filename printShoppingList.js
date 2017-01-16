function printShoppingList(){
var shoppingList = [
    { itemName : ' *Bread', price : '@ R11.00' },
    { itemName : ' *Milk', price : '@ R7.00' },
    { itemName : ' *Chees', price : '@ R19.50' }
  ];
  console.log('Shopping list:');
  for(var i=0; i<shoppingList.length; i++){
var listOfItem = shoppingList[i]
console.log(listOfItem.itemName, listOfItem.price);
  }
}
printShoppingList();
