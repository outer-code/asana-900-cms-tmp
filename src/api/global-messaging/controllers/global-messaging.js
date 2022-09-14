'use strict';

/**
 * global-messaging controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::global-messaging.global-messaging');
