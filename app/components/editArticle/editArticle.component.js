import  editArticleMarkup from './editArticle.html';

const EditArticlePageComponent = {
  template: editArticleMarkup,
    controller: class EditArticlePage {
        constructor(ArticlesService) {
            'ngInject';
            this.submitType = 'Edit';
            this.ArticlesService = ArticlesService;
        }

        $onInit() {
            this.article = this.ArticlesService.getArticles()[14];
        }

        submitHandler(e, a) {
            e.preventDefault();
            console.log('edit PAge')
        }
    }
};

export default EditArticlePageComponent;


