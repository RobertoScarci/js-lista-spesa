const marketList = [
    'Latte senza lattosio',
    'Uova',
    'Pasta',
    'Tofu',
    'Seitan',
    'Muesli',
    'Mandorle',
    'Yogurt senza lattosio'
];

const output = document.getElementById('output');

for (let i = 0; i < marketList.length; i++) {
    
    const li = document.createElement('li');
    li.textContent = marketList[i];
    
    output.append(li);
}