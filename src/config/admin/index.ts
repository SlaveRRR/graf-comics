import { NextAdminOptions } from '@premieroctet/next-admin';

export const options: NextAdminOptions = {
  basePath: '/admin',
  model: {
    User: {
      toString: (user) => `${user.name} (${user.email})`,
      title: '👥 Users',
      aliases: {
        id: 'ID',
      },
      list: {
        display: ['id', 'name', 'email', 'gender', 'role'],
        search: ['name', 'email', 'role'],
      },
      edit: {
        display: ['name', 'email', 'gender', 'role', 'closedProfile', 'closedSubscribers'],
        styles: {
          _form: 'grid-cols-3 gap-2 md:grid-cols-4',
          name: 'col-span-2',
          email: 'col-span-2 row-start-2',
          gender: 'col-span-2 row-start-3',
          role: 'col-span-2 row-start-4',
          closedProfile: 'col-span-2 row-start-4',
          closedSubscribers: 'col-span-3 row-start-5',
        },
        fields: {
          email: {
            validate: (email) => email.includes('@') || 'form.user.email.error',
          },
          avatar: {
            handler: {
              /*
               * Include your own upload handler here,
               * for example you can upload the file to an S3 bucket.
               * Make sure to return a string.
               */
              upload: async (file: Buffer) => {
                return 'https://www.gravatar.com/avatar/00000000000000000000000000000000';
              },
            },
          },
        },
      },
    },
  },
};
