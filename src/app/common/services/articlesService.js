import articles from './../initData.json';

class ArticlesService {
    constructor($http) {
        'ngInject';
        this.$http = $http;
        this.articles = null;

    }

    static processArticles(articles) {
        return articles.map((article) => {
            const articleCopy = Object.assign({}, article);

            articleCopy.articlePreview = articleCopy.articlePreview.split('\r');
            articleCopy.articleText = articleCopy.articleText.split('\r');

            return articleCopy;
        })
    }

    fetchArticles() {
        // return this.$http
        //     .get('./../initData.json')
        //     .then(articles => this.articles = articles);
        this.articles = ArticlesService.processArticles(articles);
    }

    getArticles() {
        if (this.articles === null) {
            this.fetchArticles()
        }
        return this.articles;
    }

    getArticlesAmount() {
        return this.articles.length;
    }
}

export default ArticlesService;
