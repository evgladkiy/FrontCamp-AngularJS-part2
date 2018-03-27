import angular from 'angular';

import EditArticlePageComponent from './editArticle.component';

const EditArticlePageModule = angular
    .module('app.editArticle', [])
    .component('editArticle', EditArticlePageComponent)
    .name;

export default EditArticlePageModule;
