var app = angular.module('store', [ ]);

app.controller('StoreController', function(){
	
	this.products = gems;
	
});

var gems = [

	{
		name: 'Product',
		price: 2,
		description: 'Descripción del producto ejemplo...',
		canPurchase: true,
		soldOut: false,
		images: [{
			
			full: 'img/empty-product.png',
			thumb: 'img/empty-product.png'
		}
		]
	},
	{
		name: 'Product',
		price: 1.22,
		description: 'Descripción del producto ejemplo...',
		canPurchase: true,
		soldOut: false,
		images: [{
			
			full: 'img/empty-product.png',
			thumb: 'img/empty-product.png'
		}
		]
	},
	{
		name: 'Product',
		price: 22.1,
		description: 'Descripción del producto ejemplo...',
		canPurchase: true,
		soldOut: false,
		images: [{
			
			full: 'img/empty-product.png',
			thumb: 'img/empty-product.png'
		}
		]
	}

];


app.controller('PanelController', function(){
	
	this.tab = 1;
	this.selectTab = function(setTab){
		this.tab = setTab;
	};
	this.isSelected = function(checkTab){
		return this.tab === checkTab;
	};
	
});
