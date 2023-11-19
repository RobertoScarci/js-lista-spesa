const shoppingList = [
    'Latte senza lattosio',
    'Uova',
    'Pasta',
    'Tofu',
    'Seitan',
    'Muesli',
    'Mandorle',
    'Yogurt senza lattosio'
];

const output = document.getElementById("output");

for (let i = 0; i < shoppingList.length; i++) {
    
    const li = document.createElement('li');
    li.textContent = shoppingList[i];
    output.append(li);
}