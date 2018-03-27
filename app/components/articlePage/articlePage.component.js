import articlePageMarkup from './articlePage.html';

const ArticlePageComponent = {
    bindings: {
        article: '<',
    },
    template: articlePageMarkup,
    controller: class ArticlePage {
        constructor() {
            this.articlesPerPage = 3;
        }
        //
        $onInit() {
            console.log(this)
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

export default ArticlePageComponent;
