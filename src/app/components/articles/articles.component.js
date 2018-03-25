import articlesPageMarkup from './articles.html';

const ArticlesPageComponent = {
    template: articlesPageMarkup,
    controller: class ArticlesPage {
        constructor(ArticlesService) {
            'ngInject';
            this.ArticlesService = ArticlesService;
        }

        $onInit() {
            this.articles = this.ArticlesService.getArticles();
        }
        // $onChanges(changes) {
        //   if (changes.todoData) {
        //     this.todos = Object.assign({}, this.todoData);
        //   }
        // }
        // addTodo({ todo }) {
        //   if (!todo) return;
        //   this.todos.unshift(todo);
        //   this.newTodo = {
        //     title: '',
        //     selected: false
        //   };
        // }
    }
};

export default ArticlesPageComponent;
