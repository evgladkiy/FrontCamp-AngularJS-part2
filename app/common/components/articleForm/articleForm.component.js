import articleFormMarkup from './articleForm.html';

const ArticleFormComponent = {
    bindings: {
        submitType: '<',
        submitHandler: '<',
        article: '<'
    },
    template: articleFormMarkup,
    controller: class ArticlesPage {
        constructor(ArticlesService) {
            'ngInject';
            this.ArticlesService = ArticlesService;
            this.article = null;
            this.tags = null
            this.articleTags = null;
        }

        $onInit() {
            this.tags = this.ArticlesService.getArticlesTags();
            // this.article = this.ArticlesService.getArticles()[1];
            this.articleTags = this.tags.reduce((acc, item) => {
                acc[item] = this.article.tags.indexOf(item) >= 0;
                return acc
            },{});
            console.log(this)
        }
    }
};

export default ArticleFormComponent;
