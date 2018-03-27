import  editArticleMarkup from './editArticle.html';

const EditArticlePageComponent = {
    bindings: {
        article: '<'
    },
    template: editArticleMarkup,
    controller: class EditArticle {
        constructor(ArticlesService, $state) {
            'ngInject';
            this.$state = $state;
            this.ArticlesService = ArticlesService;
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
