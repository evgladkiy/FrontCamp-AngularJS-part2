import angular from 'angular';

import PaginationComponent from './pagination.component';
import PaginationService from './pagination.service';

import './pagination.less';

const PaginationModule = angular
    .module('app.articles.pagination', [])
    .service('PaginationService', PaginationService)
    .component('pagination', PaginationComponent)
    .name;

export default PaginationModule;
