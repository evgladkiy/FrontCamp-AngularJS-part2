import angular from 'angular';

import ArticleComponent from './article.component';

import './article.less';

const ArticleModule = angular
    .module('app.articles.article', [])
    .component('articleElement', ArticleComponent)
    .name;

export default ArticleModule;
