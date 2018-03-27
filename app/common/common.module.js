import angular from 'angular';

import ArticlesService from './services/articlesService';
import ArticleFormModule from './components/articleForm/articleForm.module';
import HeaderModule from './components/header/header.module';
import capitalizeFilter from './filters/capitalizeFilter';

const CommonModule = angular
    .module('app.common', [ArticleFormModule, HeaderModule])
    .service('ArticlesService', ArticlesService)
    .filter('capitalize', capitalizeFilter)
    .name;

export default CommonModule;
