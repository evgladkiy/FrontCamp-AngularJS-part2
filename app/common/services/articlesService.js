import lodash from 'lodash';

class ArticlesService {
    constructor($http, $q) {
        'ngInject';
        this.$q = $q;
        this.$http = $http;
        this.articles = null;
        this.tags = [];
    }

    fillArticlesTags(articles) {
         articles.forEach((article) => {
            article.tags.forEach((tag) => {
                if (this.tags.indexOf(tag) < 0) {
                    this.tags.push(tag)
                }
            });
        })
    }

    fetchArticles() {
        return this.$http
            .get('http://localhost:8000/api/articles')
            .then((res) => {
                this.articles = res.data;
                this.fillArticlesTags(this.articles);
                return this.articles;
            });

    }

    getArticles() {
        if (this.articles === null) {
            return this.fetchArticles();
        }

        return this.$q.resolve(this.articles);
    }

    getArticlesTags() {
        return this.tags;
    }

    addArticle(article) {
        const newArticle = Object.assign({}, article, {
            articleRating: '0',
            _id: String(lodash.random(0, 1000000000000000)),
            articleViews: '0',
            articleComments: [],
        })
        this.articles.push(newArticle);
    }

    updateArticle(updatedArticle) {
        const articleIndex = this.articles
            .findIndex(article => article._id === updatedArticle._id);

        this.articles.splice(articleIndex, 1, updatedArticle);
    }

    getArticlesAmount() {
        return this.articles.length;
    }

}

export default ArticlesService;
