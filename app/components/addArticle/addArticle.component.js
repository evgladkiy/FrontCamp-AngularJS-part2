import addArticleMarkup from './addArticle.html';

const AddArticlePageComponent = {
    template: addArticleMarkup,
    controller: class AddArticlePage {
        constructor(ArticlesService) {
            'ngInject';
            this.submitType = 'Add';
            this.ArticlesService = ArticlesService;
        }

        $onInit() {
            this.article = this.ArticlesService.getArticles()[14];
        }

        submitHandler(e, a) {
            e.preventDefault();
            console.log(e, a)
        }
    }
};
export default AddArticlePageComponent;

