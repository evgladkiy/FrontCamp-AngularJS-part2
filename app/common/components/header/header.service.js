class HeaderService {
    constructor() {
        this.state = 'articles';
        this.isArticlesLoaded = false;
    }

    setLinkState(state) {
        this.state = state;
    }

    getLinkState() {
        return this.isArticlesLoaded ? this.state: '';
    }

    setArticlesLoaded() {
        this.isArticlesLoaded = true;
    }
}

export default HeaderService;
