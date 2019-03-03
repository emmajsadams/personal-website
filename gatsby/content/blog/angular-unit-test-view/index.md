---
title: Unit Testing Angular Views
date: "2015-03-07"
---

In this blog post I will be focusing on how to replace integrated tests with unit tests in client-side Angular.JS applications. I originally wrote this post for my employer at the time [Trōv](https://trov.com).

### How to test an Angular view?

For example, here is a simple dropdown box with a controller that supplies the currently logged-in user.

```language-markup
<li class="dropdown">
  <a id="email" href="#" data-toggle="dropdown" class="dropdown-toggle">
    {{ user.email || user.name || "Anon" }}
  </a>
  <ul class="dropdown-menu">
    <li>
      <a id="logout" data-ng-click="logout()">
        Logout
      </a>
    </li>
  </ul>
</li>
```

What are the key scenarios to be tested here? I will cover the following:

* It should display the user email when the user has an email.
* It should display the user name when the user has no email.
* It should display a default user name when the user has no email or name.
* It should logout when the logout button is clicked in the dropdown menu.

What is the best way to write a test for each of these scenarios? The common answer is to write an integrated test, typically using [Protractor](http://www.protractortest.org/).

However, integrated tests have the following drawbacks associated with them:

* They force unrelated systems into the test, thereby creating room for test failures unrelated to the system under test.
* They are unopinionated about the design of the view, so there is no pressure for it to be broken up into smaller views, controllers, or directives.
* Over time, integrated tests can become slow and hard to maintain.
* They are fragile when changes occur in the application.

The above four integrated tests involve the real implementation of the controller for the corresponding view, thereby leaving it exposed to bugs in that system. The fourth scenario includes the logout interaction, which could involve page transitions, database calls, updating localStorage user models, and triggering analytics events. The basic correctness of the view should not require brittle tests.

### Unit Testing a View

Unit testing views can be done in Angular.js and avoids the integrated test problems mentioned earlier. These tests validate the view independent of other systems, and can be run both in parallel and in memory without spinning up the server or database. Pressure is put on the design of the view by the tests, which encourages the creation of new views and directives.

An interactive example with all four scenarios is on [plunkr](http://plnkr.co/edit/k9kjPQJ644fxjcEYqeNC?p=preview); however, the approach can be explained by the following snippets:

```language-javascript
// Get html template from cache
beforeEach(inject(function($templateCache) {
  viewHtml = $templateCache.get("some/valid/templateUrl");
}));
```

```language-javascript
// Setup stubbed scope and create dropdownElement.
var $rootScope;
var $scope;
var $compile;
var dropdownElement;

beforeEach(inject(function(_$compile_, _$rootScope_){
  $compile = _$compile_;
  $rootScope = _$rootScope_;

  $scope = $rootScope.$new();
  $scope.user = {};
  $scope.logout = sinon.stub();
  dropdownElement = angular.element(viewHtml);
}));
```

```language-javascript
// Compile element, digest cycle for stubbed scope, verify expectations
it("should display the user email when the user has an email.", function () {
  $scope.user.email = "cody@trov.com";
  compileElement();

  var email = dropdownElement.find("#email");

  expect(email.text().trim()).toBe($scope.user.email);
});

function compileElement() {
  $compile(dropdownElement)($scope);
  $rootScope.$digest();
}
```

### Further Reading

* [Zealake’s similar approach to unit testing Angular.js views](http://www.zealake.com/2014/01/01/unit-test-your-angularjs-views/)
* [23tux’s similar approach to unit testing Angular.js views](http://stackoverflow.com/questions/23083645/unit-test-views-best-practice)
* [Unit testing Angular.JS directives](https://robots.thoughtbot.com/angular-testing-directives)
