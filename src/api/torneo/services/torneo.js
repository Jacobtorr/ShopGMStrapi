'use strict';

/**
 * torneo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::torneo.torneo');
