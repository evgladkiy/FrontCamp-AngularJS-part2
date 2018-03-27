const articlesPaginationFilter = ($filter, PaginationService) => (articles) => {
    const angularLimitTo = $filter('limitTo');
    const currentPage = PaginationService.getCurrentPage();
    const numberOfArticlesPerPage = PaginationService.getNumberOfArticles();
    const firstArticleIndex = (currentPage - 1) * numberOfArticlesPerPage;

    return angularLimitTo(articles, numberOfArticlesPerPage, firstArticleIndex);
};

export default articlesPaginationFilter;
