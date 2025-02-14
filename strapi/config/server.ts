export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  bootstrap: async ({ strapi }) => {
    await import('./functions/bootstrap').then((module) => module.default({ strapi }));
  },
});
