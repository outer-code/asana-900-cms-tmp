'use strict';

/**
 * global-messaging service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::global-messaging.global-messaging');
