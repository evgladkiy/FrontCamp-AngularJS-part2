import articleMarkup from './article.html';

const ArticleComponent = {
    bindings: {
        article: '<',
    },
    template: articleMarkup,
    controller: class Article {
        constructor() {

        }
        $onInit() {

        }
    }
};

export default ArticleComponent;
