import articlesPageMarkup from './articles.html';

const ArticlesPageComponent = {
    bindings: {
        articles: '<',
    },
    template: articlesPageMarkup,
    controller: class ArticlesPage {
        constructor(HeaderService) {
            this.articlesPerPage = 3;
            this.HeaderService = HeaderService;
        }
        $onInit() {
            this.HeaderService.setLinkState('addArticle');
        }

        $onDestroy() {
            this.HeaderService.setLinkState('articles');
        }
    }
};

export default ArticlesPageComponent;
