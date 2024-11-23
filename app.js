const API = 'http://localhost:3000/product'

async function fetchProduct() {
	const response = await fetch(API)

	const products = await response.json()
	displayProducts(products)
}


function displayProducts(products) {
	const productList = document.querySelector('.main')

	productList.innerHTML = products.map(product => `
		<div class='product'>
			<img src="${product.img}" alt='Error :(' class='product__img' />
			<h2 class='product__title'>${product.title}</h2>
			<p class='product__desc'>${product.description}</p>
			<p class='product__price'>Цена: <span class='product__price_text'>${product.price}</span> сом</p>
			<a href='edit.html?id=${product.id}' class='edit__link'>Редактирование</a>
		</div>
	`)
}

fetchProduct()

