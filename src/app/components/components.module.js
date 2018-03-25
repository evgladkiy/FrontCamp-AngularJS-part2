import angular from 'angular';

import ArticlesPageModule from './articles/articles.module';
import EditArticlePageModule from './editArticle/editArticle.module';
// import { AddArticlePAge } from './addArticlePAge/addArticlePAge.module';

const ComponentsModule = angular
    .module('app.components', [
        ArticlesPageModule,
        EditArticlePageModule,
        // AddArticlePAge,
    ])
    .name;

export default ComponentsModule;
