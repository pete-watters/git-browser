'use strict';

define('ember-scaffold/tests/app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('ember-scaffold/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('ember-scaffold/tests/helpers/destroy-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('ember-scaffold/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'ember-scaffold/tests/helpers/start-app', 'ember-scaffold/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _emberScaffoldTestsHelpersStartApp, _emberScaffoldTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _emberScaffoldTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _emberScaffoldTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('ember-scaffold/tests/helpers/module-for-acceptance.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('ember-scaffold/tests/helpers/resolver', ['exports', 'ember-scaffold/resolver', 'ember-scaffold/config/environment'], function (exports, _emberScaffoldResolver, _emberScaffoldConfigEnvironment) {

  var resolver = _emberScaffoldResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _emberScaffoldConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emberScaffoldConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('ember-scaffold/tests/helpers/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('ember-scaffold/tests/helpers/start-app', ['exports', 'ember', 'ember-scaffold/app', 'ember-scaffold/config/environment'], function (exports, _ember, _emberScaffoldApp, _emberScaffoldConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    // use defaults, but you can override
    var attributes = _ember['default'].assign({}, _emberScaffoldConfigEnvironment['default'].APP, attrs);

    _ember['default'].run(function () {
      application = _emberScaffoldApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('ember-scaffold/tests/helpers/start-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('ember-scaffold/tests/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('ember-scaffold/tests/router.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('ember-scaffold/tests/test-helper', ['exports', 'ember-scaffold/tests/helpers/resolver', 'ember-qunit'], function (exports, _emberScaffoldTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_emberScaffoldTestsHelpersResolver['default']);
});
define('ember-scaffold/tests/test-helper.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('ember-scaffold/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
