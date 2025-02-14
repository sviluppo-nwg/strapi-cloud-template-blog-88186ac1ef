export default async ({ strapi }) => {
  const knex = strapi.db.connection; // Usa la connessione DB di Strapi
  await knex.migrate.latest(); // Esegui tutte le migrations
};
