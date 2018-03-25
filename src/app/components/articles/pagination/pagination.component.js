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

            this.PaginationSetvice.setNumberOfArticles(this.articlesOnPage);
            this.firstButtonValue = this.PaginationSetvice.getFirstButtonValue();
            this.activeBtnIndex = this.PaginationSetvice.getCurrentPage() - 1;
            this.pagesAmount = this.PaginationSetvice.getPagesAmout();
        }

        chengeCurrentActiveBtn(index) {
            if (this.activeBtnIndex !== index) {
                if (index <= 2 && this.firstButtonValue <= 2 ) {
                    this.activeBtnIndex = index;
                }
                // else if (index <= 2 && this.firstButtonValue) {
                //     this.firstButtonValue = this.firstButtonValue- (index)
                // }

                else if (this.activeBtnIndex < index) {
                    if (this.firstButtonValue + index + 2 >= this.pagesAmount) {
                        this.firstButtonValue = this.pagesAmount - (this.buttonsAmout -1)
                        this.activeBtnIndex = index;
                    } else {
                        this.firstButtonValue = this.firstButtonValue + index - 2;
                        this.activeBtnIndex = 2;
                    }

                }
                else if (index < this.activeBtnIndex) {

                    if (this.firstButtonValue + index <= this.pagesAmount) {
                        this.firstButtonValue -= 2
                    } else {
                        this.firstButtonValue = this.firstButtonValue - (index);
                    }
                    this.activeBtnIndex = 2;
                }

                this.PaginationSetvice.setFirstButtonValue(this.firstButtonValue)
                this.PaginationSetvice.setCurrentPage(this.activeBtnIndex + this.firstButtonValue)
            }
        }

        processBtnValue(index) {
            // if (this.activeBtnIndex <= 2) {
            //     return index + 1
            // } else if (this.pagesAmount - this.activeBtnIndex <= 2) {
            //     return this.pagesAmount - this.buttonsAmout + index + 1;
            // } else {
            //     return this.activeBtnIndex - 1 + index;
            //     // /console.log(this.activeBtnIndex, index)
            // }
        }
    }
};

export default PaginationComponent;
