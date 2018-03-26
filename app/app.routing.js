function routing($urlRouterProvider, $stateProvider, $locationProvider) {
    $stateProvider
        .state('articles', {
            url: '/articles',
            component: 'articles',
            onEnter: function($state) {
                console.log($state)
            }
        })
        .state('addArticle', {
            url: '/addArticle',
            component: 'addArticle',
            onEnter: function($state) {
                console.log($state)
            }
        })
        .state('editArticle', {
            url: '/',
            component: 'editArticle',
            onEnter: function($state) {
                console.log($state)
            }
    });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
}

routing.$inject = ['$urlRouterProvider','$stateProvider', '$locationProvider'];

export default routing;
