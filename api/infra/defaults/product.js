const category = require('./category');

const colors = ['Branca', 'Azul', 'Verde', 'Roxa', 'Bege', 'Azul escura', 'Verde escura'];

let data = [];
for(let i = 0; i < 5000; i++) {
    
    const _colorRandom = Math.floor(Math.random() * (colors.length-1));
    const _categoryRandom = Math.floor(Math.random() * (category.length));
    const _price = Math.floor(Math.random() * 1000);
    const _promoPrice = _price * .75;
    
    data.push({
        name: 'Toalha ' + colors[_colorRandom],
        description: 'Toalha ' + category[_categoryRandom].description,
        price: _price,
        promoPrice: _promoPrice,        
        categoryId: _categoryRandom + 1
    });

}

module.exports = data;