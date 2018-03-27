import HeaderMarkup from './header.html';

const HeaderComponent = {
    template: HeaderMarkup,
    controller: class Header {
        constructor(HeaderService) {
            'ngInject';
            this.HeaderService = HeaderService;
        }

        getState() {
            return this.HeaderService.getLinkState();
        }
    }
};

export default HeaderComponent;
