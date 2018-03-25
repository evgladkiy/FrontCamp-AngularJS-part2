import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import ComponentsModule from './components/components.module';
import CommonModule from './common/common.module';

import routing from './app.routing';
import AppComponent from './app.component';
import './app.less';
import 'font-awesome-webpack';

export const AppModule = angular
    .module('articlesApp', [
        ComponentsModule,
        CommonModule,
        uiRouter
    ])
    .component('app', AppComponent)
    .config(routing)
