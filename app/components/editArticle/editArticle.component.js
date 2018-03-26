import  editArticleMarkup from './editArticle.html';

const EditArticlePageComponent = {
    bindings: {
        article: '<'
    },
    template: editArticleMarkup,
    controller: class EditArticlePage {
        constructor(ArticlesService, $state) {
            'ngInject';
            this.ArticlesService = ArticlesService;
            this.$state = $state;
            this.submitType = 'Edit';
            this.submitHandler = this.submitHandler.bind(this);
        }

        submitHandler(article) {
            this.ArticlesService.updateArticle(article);
            this.$state.go('articles');
        }
    }
};

export default EditArticlePageComponent;
