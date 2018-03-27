import articleFormMarkup from './articleForm.html';

const ArticleFormComponent = {
    bindings: {
        submitType: '<',
        submitHandler: '<',
        article: '<'
    },
    template: articleFormMarkup,
    controller: class ArticleForm {
        constructor(ArticlesService, $scope) {
            'ngInject';
            this.$scope = $scope;
            this.ArticlesService = ArticlesService;
            this.tags = null
            this.articleTags = null;
        }

        $onInit() {
            this.tags = this.ArticlesService.getArticlesTags();
            this.articleTags = this.tags.reduce((acc, item) => {
                acc[item] = this.article.tags.indexOf(item) >= 0;

                return acc;
            },{});
        }

        shouldShowErrors(input) {
            return (input.$dirty && input.$touched)
                 || this.$scope.articleForm.$submitted;
        };

        submit(e) {
            e.preventDefault();

            if (this.$scope.articleForm.$valid) {
                const tags = Object.keys(this.articleTags)
                    .filter(tag => this.articleTags[tag]);

                this.submitHandler(Object.assign({}, this.article, { tags, }))
            }
        }
    }
};

export default ArticleFormComponent;
