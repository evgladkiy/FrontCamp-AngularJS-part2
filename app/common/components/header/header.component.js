import HeaderMarkup from './header.html';

const ArticleFormComponent = {
    bindings: {
    },
    template: HeaderMarkup,
    controller: class ArticlesPage {
        constructor(HeaderService) {
            'ngInject';
            this.HeaderService = HeaderService;
        }

        getState() {
            return this.HeaderService.getLinkState();
        }
    }
};

export default ArticleFormComponent;
