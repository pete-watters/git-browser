# git-browser

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Development notes
'app/adapters/application.js' points to the github API host. 
Github is not JSON API compliant so the REST adapter is used.




## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)


## Install Bitters:
* [Bitters] (https://www.npmjs.com/package/bourbon-bitters) 
Need to install 1.2.0 to work with stable bourbon
  * gem install bitters -v 1.2.0

Install Bourbon. Then cd into your Sass directory and run:
  * bitters install

A base directory will be generated which contains all of the Bitters files. Import Bitters after Bourbon in your application.css.scss:
  * @import "bourbon";
  * @import "base/base";

# GIT personal access token
d9849c6a97a55b5796a4f62eebf71311a43498fc

## Installation

* `git clone <repository-url>` this repository
* `cd git-browser`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
