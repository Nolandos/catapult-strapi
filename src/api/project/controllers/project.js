'use strict';

/**
 * project controller
 */

// const { createCoreController } = require('@strapi/strapi').factories;
//
// module.exports = createCoreController('api::project.project');
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::project.project', ({ strapi }) =>  ({
  async findBySlug(ctx) {
    const { slug } = ctx.params;

    const entity = await strapi.db.query('api::project.project').findOne({where: { slug }, populate: true});
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  },

}));
