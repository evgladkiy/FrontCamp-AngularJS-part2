import articlesPageMarkup from './articles.html';

const ArticlesPageComponent = {
    bindings: {
        articles: '<',
    },
    template: articlesPageMarkup,
    controller: class ArticlesPage {
        constructor() {
            this.articlesPerPage = 3;
        }
        //
        // $onInit() {
        // }
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
