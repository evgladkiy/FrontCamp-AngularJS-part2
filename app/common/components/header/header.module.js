import angular from 'angular';

import HeaderComponent from './header.component';
import HeaderService from './header.service';

import './header.less'

const HeaderModule = angular
    .module('app.common.header', [])
    .component('appHeader', HeaderComponent)
    .service('HeaderService', HeaderService)
    .name;

export default HeaderModule;
