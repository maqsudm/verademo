/*!
 * Bootstrap v3.3.2 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 *
 * @deprecated Callers should migrate to the specific classes directly:
 *   bootstrapUtils.js, bootstrapAlert.js, bootstrapButton.js,
 *   bootstrapCarousel.js, bootstrapCollapse.js, bootstrapDropdown.js,
 *   bootstrapModal.js, bootstrapTooltip.js, bootstrapPopover.js,
 *   bootstrapScrollspy.js, bootstrapTab.js, bootstrapAffix.js
 */

// This file is a deprecated delegation wrapper.
// All logic has been extracted into the modules listed above.
// Please migrate callers to import those modules directly.

// Load each extracted module in dependency order so that all jQuery plugins
// and data-API bindings are registered exactly as they were in the original
// monolithic bootstrap.js file.

'use strict';

(function () {
  // Delegate to bootstrapUtils.js (jQuery version check + transition support)
  // eslint-disable-next-line no-unused-expressions
  void 0; // no static methods to re-expose; side-effects are handled by the
          // module itself when it is loaded below.
})();

/* eslint-disable */

// bootstrapUtils.js — jQuery presence check and CSS transition support
document.write('<script src="bootstrapUtils.js"><\/script>');

// bootstrapAlert.js — Alert component
document.write('<script src="bootstrapAlert.js"><\/script>');

// bootstrapButton.js — Button component
document.write('<script src="bootstrapButton.js"><\/script>');

// bootstrapCarousel.js — Carousel component
document.write('<script src="bootstrapCarousel.js"><\/script>');

// bootstrapCollapse.js — Collapse component
document.write('<script src="bootstrapCollapse.js"><\/script>');

// bootstrapDropdown.js — Dropdown component
document.write('<script src="bootstrapDropdown.js"><\/script>');

// bootstrapModal.js — Modal component
document.write('<script src="bootstrapModal.js"><\/script>');

// bootstrapTooltip.js — Tooltip component
document.write('<script src="bootstrapTooltip.js"><\/script>');

// bootstrapPopover.js — Popover component (depends on Tooltip)
document.write('<script src="bootstrapPopover.js"><\/script>');

// bootstrapScrollspy.js — Scrollspy component
document.write('<script src="bootstrapScrollspy.js"><\/script>');

// bootstrapTab.js — Tab component
document.write('<script src="bootstrapTab.js"><\/script>');

// bootstrapAffix.js — Affix component
document.write('<script src="bootstrapAffix.js"><\/script>');

/* eslint-enable */