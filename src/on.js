define([
  'viewport/src/bindings',
  'viewport/src/init',
  'viewport/src/settings',
  'viewport/src/start'
], function(bindings, init, settings, start) {

  return function on (element, name, binding, options) {

    if (_.contains([element, name, binding], undefined)) {
      throw new Error('Missing argument(s) supplied.');
    }

    var obj = bindings.set(element, name, binding, options);

    // Defer initialisation until the first element has been bound
    if (!settings.hasInitialised) {
      init();
    }

    if (!settings.hasBoundEvents) {
      start();
    }

    return obj;
  };

});