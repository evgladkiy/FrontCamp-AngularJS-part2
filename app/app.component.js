const AppComponent = {
  template: `
    <header>
        <p>Awesome App header</p>
        <a ui-sref="addArticle">Add Article</a>
    </header>
    <div>
        <ui-view><ui-view>
    </div>
    <footer>
        <p>Awesome footer, Copyright FrontCamp 2018.</p>
    </footer>
  `
};

export default AppComponent;
