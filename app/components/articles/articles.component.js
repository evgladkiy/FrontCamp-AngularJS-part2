import articlesPageMarkup from './articles.html';

const ArticlesPageComponent = {
    bindings: {
        articles: '<',
    },
    template: articlesPageMarkup,
    controller: class ArticlesPage {
        constructor($stateParams, HeaderService, PaginationService) {
            'ngInject';
            this.$stateParams = $stateParams;
            this.HeaderService = HeaderService;
            this.PaginationService = PaginationService;
            this.articlesPerPage = 4;
        }

        $onInit() {
            this.HeaderService.setLinkState('addArticle');
            this.PaginationService.setNumberOfArticles(this.articlesPerPage);
            this.PaginationService.setCurrentPage(this.$stateParams.page || 1);
        }

        $onDestroy() {
            this.HeaderService.setLinkState('articles');
        }
    }
};

export default ArticlesPageComponent;
