import { NextAdminOptions } from '@premieroctet/next-admin';
import ArticleAdmin from '@/components/ArticleAdmin';

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
        display: ['id', 'name', 'email', 'gender', 'role', 'avatar'],
        search: ['name', 'email', 'role'],
        fields: {
          avatar: {
            formatter(avatar, context) {
              return (
                <img
                  alt="user avatar"
                  style={{
                    objectFit: 'cover',
                    width: '35px',
                    height: '35px',
                    border: '1px solid #000000',
                    borderRadius: '30px',
                  }}
                  src={
                    avatar ? (avatar.includes('https') ? avatar : `data:image/jpeg;base64,${avatar}`) : '/avatar.svg'
                  }
                />
              );
            },
          },
        },
      },
      edit: {
        display: ['name', 'email', 'gender', 'role', 'closedProfile', 'closedSubscribers', 'isArticleApprove'],
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
        },
      },
    },
    Article: {
      toString: (article) => article.title,
      title: '📄 Articles',
      aliases: {
        id: 'ID',
      },
      list: {
        display: ['id', 'title', 'author', 'createdAt', 'isApproved'],
        search: ['title'],
        fields: {
          author: {
            formatter: (item) => item.name,
          },
        },
      },
      edit: {
        display: ['title', 'author', 'createdAt', 'content', 'cover', 'description', 'isApproved'],
        styles: {
          _form: 'grid-cols-3 gap-2 md:grid-cols-4',
          title: 'col-span-2',
          createdAt: 'cols-span-2 row-start-2',
          author: 'col-span-2 row-start-2',
          cover: 'col-span-2 row-start-3',
          description: 'col-span-2 row-start-3',
          content: 'col-span-3 row-start-4',
          isApproved: 'col-span-3 row-start-5',
        },
        fields: {
          content: {
            input: <ArticleAdmin />,
          },
          cover: {
            format: 'file',
            handler: {
              upload: async (file: Buffer) => {
                return `data:image/jpeg;base64,${file.toString('base64')}`;
              },
            },
          },
          author: {
            optionFormatter: (author) => `${author.name}`,
          },
        },
      },
      actions: [
        {
          title: 'Moderate article',
          action: async (...args) => {
            'use server';
            const { submitModerate } = await import('../../actions/submitModerate');
            await submitModerate(...args);
          },
          successMessage: 'Successful moderate!',
          errorMessage: 'Moderate error!',
        },
        {
          title: 'Approve article',
          action: async (...args) => {
            'use server';
            const { submitApproveArticle } = await import('../../actions/submitApproveArticle');
            await submitApproveArticle(...args);
          },
          successMessage: 'Successful approve!',
          errorMessage: 'Approve error!',
        },
      ],
    },
    ArticleImage: {
      title: 'Images For articles',
      aliases: {
        id: 'ID',
      },
      list: {
        display: ['id', 'name', 'user'],
        search: ['name'],
        fields: {
          user: {
            formatter: (item) => item.name,
          },
          // image: {
          //   formatter(image, context) {
          //     console.log(image.toString('base64'));
          //     return (
          //       <img
          //         style={{
          //           objectFit: 'cover',
          //           width: '100%',
          //           height: '100%',
          //         }}
          //         src={`data:image/jpeg;base64,${image.toString('base64')}`}
          //       />
          //     );
          //   },
          // },
        },
      },
      edit: {
        display: ['id', 'name', 'user', 'image'],
        styles: {
          _form: 'grid-cols-3 gap-2 md:grid-cols-4',
          name: 'col-span-2',
          user: 'col-span-2 row-start-2',
          image: 'col-span-2 row-start-3',
        },
        fields: {
          user: {
            optionFormatter: (user) => `${user.name}`,
          },
        },
      },
    },
  },
};
