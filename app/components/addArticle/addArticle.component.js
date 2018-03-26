import addArticleMarkup from './addArticle.html';

const AddArticlePageComponent = {
    template: addArticleMarkup,
    controller: class AddArticlePage {
        constructor(ArticlesService, $state) {
            'ngInject';
            this.ArticlesService = ArticlesService;
            this.$state = $state;
            this.submitType = 'Add';
            this.submitHandler = this.submitHandler.bind(this);
        }

        $onInit() {
            this.article = {
                articleAuthor: '',
                articleImg: '',
                articleText: '',
                tags: []
            };
        }

        submitHandler(article) {
            this.ArticlesService.addArticle(article);
            this.$state.go('articles');
        }
    }
};
export default AddArticlePageComponent;
