import angular from 'angular';

import ArticlePageComponent from './articlePage.component';

import './articlePage.less';

const ArticlePageModule = angular
    .module('app.article', [])
    .component('articlePage', ArticlePageComponent)
    .name;

export default ArticlePageModule;
