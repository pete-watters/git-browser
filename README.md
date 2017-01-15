# git-browser

This is a simple Ember app that connects to the GitHub API and allows you to search for organisations. 

You can view organisations and filter their repo based on criteria. 

## Development notes
* this app uses the git-flow branching strategy (because it's awesome!)
* 'app/adapters/application.js' points to the github API host. Github is not JSON API compliant so the REST adapter is used.
* unsuccessful attempts were made to try and use 'ember-cli-mocha' - they can be seen on the branch 'feature/ember-mocha' 
  
## Known Flaws
* Model population: I am not happy with how I am loading the branch information. It really should be a nested model of repositories but I failed to get it to work in an adequate timeline. This is something I will continue to learn about
* Error Handling: I am not handling invalid API responses at all and this is something that is severely lacking here
* qUnit: I am not overly used to qUnit so my tests could be better, particularly for async activity although I am not sure if qUnit is a great setup for reliable tests
* sessionAuthentication: I am using a localStorage key to store the gitAPI key. This would be better using ember-simple-auth
* ember-data-github: my app would most likely be better using this however I struggled to figure out how to configure it and cut my losses. I guess if someone told me I would have a lightbulb moment!

## Installation - to run

* `git clone <repository-url>` this repository
* `cd git-browser`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).


### Testing

### Overview
 I attempted to use ember-mocha at first but I don't think it's a polished tool just yet so I went back to qUnit after having some difficulty. 
 I focused on acceptance tests as I believe that's the most important tests for front end. With more time I would extend integration and unit testing further. 
 For UI testing I believe you really can't beat Selenium which uses actual browsers.
 
### GIT personal access token
* The GitHub access token is required by the tests. There is a helper in 'tests/helpers/custom/api-key.js' you can specify it in. 
* I have set this to 'INSERT-YOUR-KEY' as if I commit mine it will become invalid. 
* You need to update this for the tests to pass

## To run tests
* `ember serve`
* Visit your test results at [http://localhost:4200/tests](http://localhost:4200/tests).


### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

If you do a production build you can deploy the contents of the dist/ folder to a webserver of your choosing. 

## Optional installation for further development

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)
* [SASS](http://sass-lang.com/)
* [git-flow](https://github.com/nvie/gitflow)

### Install Bitters:
* [Bitters] (https://www.npmjs.com/package/bourbon-bitters) 
Need to install 1.2.0 to work with stable bourbon
  * gem install bitters -v 1.2.0

Install Bourbon. Then cd into your Sass directory and run:
  * bitters install

A base directory will be generated which contains all of the Bitters files. Import Bitters after Bourbon in your application.css.scss:
  * @import "bourbon";
  * @import "base/base";

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* [bourbon-neaat](http://neat.bourbon.io/)
* [bitters](http://bitters.bourbon.io/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
