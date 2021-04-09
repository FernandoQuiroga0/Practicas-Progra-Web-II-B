(function() {
    var app = angular.module('AttractionsModule', []);
    var controller = app.controller('AttractionsController', ($scope) => {
        $scope.attractions = [
            {id: 1, name: 'Uyuni Salt Flat', numPeopleShown: false, quantity: 0, price: 3000, description: 'This is by far one of the most beautiful places on earth. Come to Bolivia.', image: 'images/uyuni.webp'},
            {id: 2, name: 'Tiwanaku', numPeopleShown: false, quantity: 0, price: 1000, description: 'Located near La paz city, it is undoubtedly one of the most outstanding cultural places in our country.', image: 'images/tiwanaku.jpg'},
            {id: 3, name: 'Villa Tunari', numPeopleShown: false, quantity: 0, price: 2000, description: "This is one of Cochabamba's most beautiful places. There will always be something to do here.", image: 'images/villa_tunari.jpg'}
        ];

        $scope.productsChosen = new Array();

        $scope.chooseAttraction = (id) => {
            let product = _.find($scope.productsChosen, {id: parseInt(id)});
            if(product != undefined){
                alert('You have already chosen this product');
            }else{
                
                for(let item of $scope.attractions){
                    if(item.id == id){
                        item.numPeopleShown = true;
                    }
                }
            }      
        }

        $scope.cancelAttraction = (id) => {
            for(let item of $scope.attractions){
                if(item.id == id){
                    item.numPeopleShown = false;
                }
            }
        }
        $scope.deleteAttraction = (id) => {
            let p = $scope.productsChosen.length;
                        $scope.productsChosen.splice(id-1,1);
                        $scope.productsChosen.splice(p-1,1)
        }

        $scope.addAttraction = (attraction) => {


            let product = _.find($scope.attractions, {id: parseInt(attraction)});

            $scope.productsChosen.push({
                id: product.id,
                name: product.name,
                quantity: parseInt(product.quantity),
                image: product.image,
                price: product.price,
                description: product.description,
                subtotal: parseInt(product.quantity) * product.price,
            });

            $scope.view = {
                get total() {
                    return _.sumBy($scope.productsChosen, (product) => { return product.subtotal });
                }
            }

            for(let item of $scope.attractions){
                if(item.id == attraction){
                    item.numPeopleShown = false;
                }
            }
        }

        
    });

}());

