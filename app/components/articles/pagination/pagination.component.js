import paginationMarkup from './pagination.html';

const PaginationComponent = {
    bindings: {
        articlesOnPage: '<',
    },
    template: paginationMarkup,
    controller: class Pagination {
        constructor(PaginationService) {
            this.PaginationSetvice = PaginationService;
            this.buttonsAmout = 5;
            this.firstButtonValue = null;
            this.pagesAmount = null;
            this.activeBtnIndex = null;
        }

        $onInit() {
            this.btns = Array(this.buttonsAmout)
                .fill(null)
                .map((item, index) => index +1);

            this.firstButtonValue = this.PaginationSetvice.getFirstButtonValue();
            this.activeBtnIndex = this.PaginationSetvice.getActiveBtnIndex();
            this.pagesAmount = this.PaginationSetvice.getPagesAmount();
        }

        setCurrentActiveBtn(firstButtonValue, activeBtnIndex) {
            this.firstButtonValue = firstButtonValue;
            this.activeBtnIndex = activeBtnIndex;
            this.PaginationSetvice.setFirstButtonValue(firstButtonValue);
            this.PaginationSetvice.setCurrentPage(activeBtnIndex + firstButtonValue);

        }

        changeCurrentActiveBtn(index) {
            if (this.activeBtnIndex !== index) {
                if (index < 2) {
                    if (this.firstButtonValue < 2) {
                        this.activeBtnIndex = index;
                    } else if (this.firstButtonValue === 2 && index === 0) {
                        this.firstButtonValue = 1;
                        this.activeBtnIndex = 1;
                    } else if (this.firstButtonValue > 1) {
                        if (this.firstButtonValue === this.pagesAmount - (this.buttonsAmout - 1)) {
                            this.activeBtnIndex = 2;
                        }
                        this.firstButtonValue = this.firstButtonValue - (2 - index);
                    }
                }
                else if (index === 2) {
                    if (this.firstButtonValue === 1) {
                        this.firstButtonValue = index - 1;
                    }
                    this.activeBtnIndex = index;
                } else if (index > 2) {
                    if (this.firstButtonValue === 1) {
                        this.activeBtnIndex = 2;
                        this.firstButtonValue  = index - 1;
                    } else if (this.firstButtonValue > this.pagesAmount - this.buttonsAmout) {
                        this.activeBtnIndex = index;
                    } else if (this.firstButtonValue === this.pagesAmount - this.buttonsAmout && index === 4) {
                        this.firstButtonValue = this.firstButtonValue + 1;
                        this.activeBtnIndex = index - 1;
                    } else {
                        this.firstButtonValue = this.firstButtonValue + (index - 2);
                    }
                }
                this.PaginationSetvice.setFirstButtonValue(this.firstButtonValue);
                this.PaginationSetvice.setCurrentPage(this.activeBtnIndex + this.firstButtonValue);
            }
        }
    }
};

export default PaginationComponent;
