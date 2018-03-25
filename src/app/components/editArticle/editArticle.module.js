import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import { EditArticlePageComponent } from './editArticle.component';

const EditArticlePageModule = angular
    .module('editArticle', [])
    .component('editArticle', EditArticlePageComponent)
    .name;

export default EditArticlePageModule;
