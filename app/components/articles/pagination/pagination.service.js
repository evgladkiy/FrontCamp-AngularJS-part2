class PaginationService {
    constructor(ArticlesService) {
        'ngInject';
        this.acticleAmount = ArticlesService.getArticlesAmount();
        this.firstButtonValue = 1;
        this.numberOfArticlesPerPage = null;
        this.currentPage = null;
        this.buttonsAmout = 5;
    }

    getFirstButtonValue() {
        return this.firstButtonValue;
    }

    getButtonsAmount() {
        return this.buttonsAmout;
    }

    getCurrentPage() {
        return this.currentPage;
    }

    setFirstButtonValue(value) {
        this.firstButtonValue = value;
    }

    getPagesAmount() {
        const pages = this.acticleAmount / this.numberOfArticlesPerPage;

        return Math.ceil(pages);
    }

    getNumberOfArticles() {
        return this.numberOfArticlesPerPage;
    }

    setNumberOfArticles(number) {
        this.numberOfArticlesPerPage = number;
    }

    setCurrentPage(page) {
        const pagesAmount = this.getPagesAmount();

        if (page <= 3) {
            this.firstButtonValue = 1;
        } else if (page > pagesAmount - 2) {
            this.firstButtonValue = pagesAmount - (this.buttonsAmout - 1);
        } else {
            this.firstButtonValue = page - 2;
        }

        this.currentPage = page;
    }

    getActiveBtnIndex() {
        if (this.currentPage < 3) {
            return this.currentPage - 1;
        } else if (this.getPagesAmount() - this.currentPage < 2) {
            return (this.buttonsAmout - 1) - (this.getPagesAmount() - this.currentPage);
        }
        
        return 2;

    }
}

export default PaginationService;
