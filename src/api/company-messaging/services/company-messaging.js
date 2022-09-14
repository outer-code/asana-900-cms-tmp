'use strict';

/**
 * company-messaging service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::company-messaging.company-messaging');
