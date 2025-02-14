import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex('strapi_admin_users')
    .where({ email: 'cristian@oblolab.it' })
    .update({ roles: JSON.stringify([1]) }); // 1 = Super Admin
}

export async function down(knex: Knex): Promise<void> {
  await knex('strapi_admin_users')
    .where({ email: 'cristian@oblolab.it' })
    .update({ roles: JSON.stringify([]) });
}
