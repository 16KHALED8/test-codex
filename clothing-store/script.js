document.addEventListener('DOMContentLoaded', function () {
    var products = document.querySelectorAll('.product');
    products.forEach(function (product) {
        product.addEventListener('click', function () {
            alert('تمت إضافة المنتج إلى السلة!');
        });
    });
});
