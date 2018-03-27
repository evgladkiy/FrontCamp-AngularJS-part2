import angular from 'angular';

import uiRouter from '@uirouter/angularjs';

import ComponentsModule from './components/components.module';
import CommonModule from './common/common.module';
import AppComponent from './app.component';
import routing from './app.routing';

import 'font-awesome-webpack';
import './app.less';

const AppModule = angular
    .module('articlesApp', [
        ComponentsModule,
        CommonModule,
        uiRouter
    ])
    .component('app', AppComponent)
    .config(routing);
