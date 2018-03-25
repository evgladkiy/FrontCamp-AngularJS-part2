class PaginationService {
    constructor(ArticlesService) {
        this.firstButtonValue = 1;
        this.numberOfArticlesPerPage = null;
        this.currentPage = 1;
        this.ArticlesService = ArticlesService;
    }

    getFirstButtonValue() {
        return this.firstButtonValue;
    }

    setCurrentPage(page) {
        this.currentPage = page;
    }

    getCurrentPage() {
        return this.currentPage;
    }

    setFirstButtonValue(value) {
        this.firstButtonValue = value;
    }

    getPagesAmout() {
        const acticleAmount = this.ArticlesService.getArticlesAmount();
        const pages = acticleAmount / this.numberOfArticlesPerPage;

        return Math.ceil(pages);
    }

    getNumberOfArticles() {
        return this.numberOfArticlesPerPage;
    }

    setNumberOfArticles(number) {
        this.numberOfArticlesPerPage = number;
    }
}

export default PaginationService;
