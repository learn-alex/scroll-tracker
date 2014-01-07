define([
  'jquery',
  'lodash',
  'viewport/src/check',
  'viewport/src/settings',
  'viewport/src/start',
  'viewport/src/update'
], function($, _, check, settings, start, update) {

  return function init() {
    // Initialises all the position tracking and checking magic

    update();
    check();
    start();

    settings.hasInitialised = true;
  };

});
