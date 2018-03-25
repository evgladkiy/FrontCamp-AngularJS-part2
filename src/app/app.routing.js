function routing($urlRouterProvider, $stateProvider, $locationProvider) {
    $stateProvider
        .state('articles', {
            url: '/',
            component: 'articles',
            onEnter: function($state) {
                console.log($state)
            }
        })
        .state('editArticle', {
            url: '/edit-article',
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
