import angular from 'angular';

import ArticlesService from './services/articlesService';
import capitalizeFilter from './filters/capitalizeFilter';
// import EditArticlePageModule from './editArticle/editArticle.module';
// import { AddArticlePAge } from './addArticlePAge/addArticlePAge.module';

const CommonModule = angular
    .module('app.common', [

        // EditArticlePageModule,
        // AddArticlePAge,
    ])
    .service('ArticlesService', ArticlesService)
    .filter('capitalize', capitalizeFilter)
    .name;

export default CommonModule;
