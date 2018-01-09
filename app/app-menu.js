angular.module('myApp').component('appMenu', {
  templateUrl: 'app-menu.html',
  controller: ['$location', function($location) {
    const vm = this;
    vm.pages = ['view1', 'view2'];

    vm.isActive = page => $location.path().slice(1) === page ? 'active' : '';
  }]
});

// как сделать инжект аннотацию здесь?