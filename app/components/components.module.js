import angular from 'angular';

import ArticlesPageModule from './articles/articles.module';
import EditArticlePageModule from './editArticle/editArticle.module';
import AddArticlePageModule from './addArticle/addArticle.module';

const ComponentsModule = angular
    .module('app.components', [
        ArticlesPageModule,
        AddArticlePageModule,
        EditArticlePageModule,
    ])
    .name;

export default ComponentsModule;
