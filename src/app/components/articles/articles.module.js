import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import ArticleModule from './article/article.module';
import PaginationModule from './pagination/pagination.module';
import ArticlesPageComponent from './articles.component';
import articlesPaginatioFilter from './articles.filter';

import './articles.less';

const ArticlesPageModule = angular
    .module('app.articles', [
        ArticleModule,
        PaginationModule
    ])
    .component('articles', ArticlesPageComponent)
    .filter('paginatioFilter', articlesPaginatioFilter)
    .name;

export default ArticlesPageModule
