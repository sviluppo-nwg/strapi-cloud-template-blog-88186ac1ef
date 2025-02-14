export default async ({ strapi }) => {
  const superAdminRole = await strapi.query('admin::role').findOne({ where: { code: 'strapi-super-admin' } });
  
  const adminExists = await strapi.query('admin::user').findOne({ where: { email: 'cristian@oblolab.it' } });

  if (!adminExists) {
    await strapi.query('admin::user').create({
      data: {
        firstname: 'Cristian',
        lastname: 'Accetta',
        email: 'cristian@oblolab.it',
        password: 'SecurePassword123',
        roles: [superAdminRole.id],
        isActive: true,
      },
    });
  } else if (!adminExists.roles || adminExists.roles.length === 0) {
    await strapi.query('admin::user').update({
      where: { email: 'cristian@oblolab.it' },
      data: { roles: [superAdminRole.id] },
    });
  }
};
