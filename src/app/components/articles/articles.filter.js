const articlesPaginatioFilter = (PaginationService, $filter) => (articles) => {
    const angularLimiTo = $filter('limitTo')
    const currentPage = PaginationService.getCurrentPage();
    const numberOfArticlesPerPage = PaginationService.getNumberOfArticles();
    const firtArticleIndex = (currentPage - 1) * numberOfArticlesPerPage;

    return angularLimiTo(articles, numberOfArticlesPerPage, firtArticleIndex);
};

export default articlesPaginatioFilter;
