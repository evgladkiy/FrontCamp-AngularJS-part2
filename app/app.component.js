const AppComponent = {
    template: `
        <app-header></app-header>
        <div>
            <ui-view><ui-view>
        </div>
        <footer><p>Awesome footer, Copyright FrontCamp 2018.</p></footer>
    `,
};

export default AppComponent;
