import angular from 'angular';
import ngMessages from 'angular-messages';

import ArticleFormComponent from './articleForm.component';
import textareaValidator from './articleForm.validator';

import './articleForm.less'

const ArticleFormModule = angular
    .module('app.common.articleForm', [ngMessages])
    .component('articleForm', ArticleFormComponent)
    .directive('textareaValidator', textareaValidator)
    .name;

export default ArticleFormModule;
