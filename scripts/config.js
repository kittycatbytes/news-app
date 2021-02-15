/* Application Configuration */
var NewsApp = {
    selector: document.querySelector("#main"),
    setCurrentPage: function (name, template) {
        this.currentPage = name;
        document.title = name;
        this.selector.innerHTML = template;
    },
    currentPage: null,
    currentAction: 0,
    services: {
        articleMetadata: null
    }
};

function initApp() {
    getArticleMetadata().then(articleData => {
        NewsApp.services.articleMetadata = articleData;
        setPage('Browse', getBrowseTemplate(articleData));
    });
}
