# bac38
Simple Drupal 8 site with Bootstrap 3/4 theme

Simple adaptive site for medical company.

Technology stack:

    Drupal 8
    Bootstrap 4 (sutheme for Barrio theme)
    SASS
    Gulp

ABOUT SASS/CSS: SCSS -> CSS compilation works on local server, not on hosting (because we use npm) We compile SCSS -> CSS locally, push files to GitHub and from GitHub — to hosting (used git web-hooks)

Before compile SCSS -> CSS on local server, you need install gulp and dependencies. For this use in command line command «npm install», from folder \themes\bootstrap_barrio\subtheme\gulp

For start SCSS -> CSS compilation use in command line command «gulp», from folder \themes\bootstrap_barrio\subtheme\gulp
