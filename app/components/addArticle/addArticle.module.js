import angular from 'angular';

import AddArticlePageComponent from './addArticle.component';

import './articleForm.less';

const AddArticlePageModule = angular
    .module('app.addArticle', [])
    .component('addArticle', AddArticlePageComponent)
    .name;

export default AddArticlePageModule;
