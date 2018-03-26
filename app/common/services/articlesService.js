import articles from './../initData.json';

class ArticlesService {
    constructor($http) {
        'ngInject';
        this.$http = $http;
        this.articles = null;
        this.tags = [];
    }

    processArticles(articles) {
         articles.forEach((article) => {
            article.tags.forEach((tag) => {
                if (this.tags.indexOf(tag) < 0) {
                    this.tags.push(tag)
                }
            });
        })

    }

    fetchArticles() {
        // return this.$http
        //     .get('./../initData.json')
        //     .then(articles => this.articles = articles);
        this.articles = articles;
        this.processArticles(articles)
    }

    getArticles() {
        if (this.articles === null) {
            this.fetchArticles()
        }
        return this.articles;
    }

    getArticlesTags() {
        return this.tags;
    }

    getArticlesAmount() {
        return this.articles.length;
    }
}

export default ArticlesService;
