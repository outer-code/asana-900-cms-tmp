'use strict';

/**
 * global-messaging router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::global-messaging.global-messaging');
