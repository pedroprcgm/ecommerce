const category = require('./category');

const details = ['210 fios', '150 fios', '300 fios'];

let data = [];
for(let i = 0; i < 5000; i++) {
    
    const _detailRandom = Math.floor(Math.random() * (details.length-1));
    const _categoryRandom = Math.floor(Math.random() * (category.length));
    const _price = Math.floor(Math.random() * 1000);
    const _promoPrice = _price * .75;
    
    data.push({
        name: 'Kit de cama ' + details[_detailRandom],
        description: 'Solteiro extra',
        price: _price,
        promoPrice: _promoPrice,        
        categoryId: _categoryRandom + 1
    });

}

module.exports = data;