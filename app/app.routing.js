function routing($urlRouterProvider, $stateProvider, $locationProvider) {
    $stateProvider
        .state('articles', {
            url: '/articles',
            component: 'articles',
            resolve: {
                articles: function(ArticlesService) {
                     return ArticlesService.getArticles();
                },
            },
        })
        .state('addArticle', {
            url: '/add-article',
            component: 'addArticle',
            resolve: {
                articles: function(ArticlesService) {
                     return ArticlesService.getArticles();
                },
            },
        })
        .state('editArticle', {
            url: '/edit-tarticle:id',
            component: 'editArticle',
            resolve: {
                article: function($stateParams, ArticlesService) {
                     return ArticlesService.getArticles()
                        .then(articles => articles.find(({ _id }) => _id === $stateParams.id))
                        .then(article => Object.assign({}, article))
                },
            },
            onEnter($state, article) {
                if (article._id === undefined) {
                    $state.go('articles');
                }
            },
        });

    $urlRouterProvider.otherwise('/articles');
    $locationProvider.html5Mode(true);
}

routing.$inject = ['$urlRouterProvider','$stateProvider', '$locationProvider'];

export default routing;
