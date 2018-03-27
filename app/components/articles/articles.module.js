import angular from 'angular';

import ArticleModule from './article/article.module';
import PaginationModule from './pagination/pagination.module';
import ArticlesPageComponent from './articles.component';
import articlesPaginationFilter from './articles.filter';

const ArticlesPageModule = angular
    .module('app.articles', [
        ArticleModule,
        PaginationModule
    ])
    .component('articles', ArticlesPageComponent)
    .filter('paginationFilter', articlesPaginationFilter)
    .name;

export default ArticlesPageModule;
