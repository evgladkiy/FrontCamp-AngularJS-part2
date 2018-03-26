import angular from 'angular';
import PaginationComponent from './pagination.component';
import PaginationService from './pagination.service';

import './pagination.less';

const PaginationModule = angular
    .module('app.articles.pagination', [])
    .component('pagination', PaginationComponent)
    .service('PaginationService', PaginationService)
    .name;

export default PaginationModule;
