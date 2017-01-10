# git-browser

This is a simple Ember app that connects to the GitHub API and allows you to search for organisations. 

You can view organisations and filter their repo based on criteria. 

## Development notes
* this app uses the git-flow branching strategy (because it's awesome!)
* 'app/adapters/application.js' points to the github API host. Github is not JSON API compliant so the REST adapter is used.
* unsuccessful attempts were made to try and use 'ember-cli-mocha' - they can be seen on the branch 'feature/ember-mocha' 
  

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)
* [SASS](http://sass-lang.com/)
* [git-flow](https://github.com/nvie/gitflow)



## Installation

* `git clone <repository-url>` this repository
* `cd git-browser`
* `npm install`
* `bower install`


## Install Bitters:
* [Bitters] (https://www.npmjs.com/package/bourbon-bitters) 
Need to install 1.2.0 to work with stable bourbon
  * gem install bitters -v 1.2.0

Install Bourbon. Then cd into your Sass directory and run:
  * bitters install

A base directory will be generated which contains all of the Bitters files. Import Bitters after Bourbon in your application.css.scss:
  * @import "bourbon";
  * @import "base/base";

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).


### Running Tests

* `ember test`
* `ember test --server`

### GIT personal access token
* The GitHub access token is required by the tests. There is a helper in 'tests/helpers/api-key.js' you can specify it in. 
* I have set this to 'INSERT-YOUR-KEY' as if I commit mine it will become invalid. 
* You need to update this for the tests to pass

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* [bourbon-neaat](http://neat.bourbon.io/)
* [bitters](http://bitters.bourbon.io/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
