import angular from 'angular';

import ArticleFormComponent from './articleForm.component';

import './articleForm.less'

const ArticleFormModule = angular
    .module('app.common.articleForm', [])
    .component('articleForm', ArticleFormComponent)
    .name;

export default ArticleFormModule;
