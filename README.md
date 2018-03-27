## AngularJS part 2

### How to run app:
1) npm install;
2) npm run build;
3) npm run server;
4) open http://localhost:8000

### Rate Criterias:

Task 2 

1)	Add AngularJS 1.6.1 to a project
2)	Add minimum functionality:
    - Create a component for displaying amount of articles and list of their titles;
    - Create a form (using native directives) to add an article;
3)	Add more functionality: 
    -  Add validation to the form:
         1) Fields "Title" and "Content" should be mandatory;
         2) Create a custom validator that check the minimum length of an article 20 symbols (optional);
    - Reuse the form above to edit an article by clicking on article title;
         1) Hint: you may probably need to pass an action to the button using "&";
    - Create a component-button "Add an article" and open appropriate form on click;
4)	Add routes and resource:
    - "Add todo"/"Edit todo" forms should be opened inside different views.;
    - Make sure that "Add todo"/"Edit todo" views have different routes, i.e.:
        1) /admin/article/<todoId>/edit;
        2) /admin/article/add;
    -  Use Resource to make requests to a server;
5)	To have more experience: *
    - Create pagination component and use it to display a list of articles;
    - List of numbers for pagination buttons on should be generated using custom;
    - `*` Making  #5 without part (b) can be also considered as "excellent"
