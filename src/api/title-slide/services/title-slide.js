'use strict';

/**
 * title-slide service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::title-slide.title-slide');
