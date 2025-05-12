import ArticleAdmin from '@/components/ArticleAdmin';
import { NextAdminOptions } from '@premieroctet/next-admin';

import { submitApproveArticle } from '@/actions/submitApproveArticle';
import { submitApproveComics } from '@/actions/submitApproveComics';
import { submitModerate } from '@/actions/submitModerate';
import { submitRejectComics } from '@/actions/submitRejectComics';
export const options: NextAdminOptions = {
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
        copy: ['email'],
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
          type: 'server',
          id: 'MODERATE',
          title: 'Moderate article',
          action: async (ids) => {
            await submitModerate(ids);
          },
          successMessage: 'Successful moderate!',
          errorMessage: 'Moderate error!',
        },
        {
          type: 'server',
          id: 'APPROVE',
          title: 'Approve article',
          action: async (ids) => {
            await submitApproveArticle(ids);
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
    Comics: {
      toString: (comics) => comics.title,
      title: '📚 Комиксы',
      aliases: {
        id: 'ID',
      },
      list: {
        display: ['id', 'title', 'author', 'status', 'rating', 'isApproved', 'createdAt'],
        search: ['title', 'description'],
        filters: [
          {
            name: 'Прошедшие модерацию',
            value: {
              isApproved: true,
            },
          },
        ],
        defaultSort: { field: 'createdAt', direction: 'desc' },
        fields: {
          author: {
            formatter: (author) => author?.name || 'No author',
          },
        },
      },
      edit: {
        display: [
          'title',
          'description',
          'status',
          'covers',
          'banner',
          'genres',
          'focus',
          'toms',
          'tags',
          'author',
          'rating',
          'isApproved',
        ],
        styles: {
          _form: 'grid-cols-2 gap-4',
          title: 'col-span-2',
          description: 'col-span-2',
          covers: 'col-span-2',
          banner: 'col-span-2',
        },
        fields: {
          covers: {
            format: 'file',
            // **TODO
            handler: {
              upload: async (buffer, infos, context) => {
                console.log(buffer, infos, context);
                return 'https://i.ibb.co/KzyF5JS7/6820a60bc48c293d879e5aa6-covers-b0fb21ff-fdfc-437f-adc1-d63b4173ee56.png';
              },
            },
          },
          banner: {
            format: 'data-url',
          },
          author: {
            optionFormatter: (author) => `${author.name} (${author.email})`,
          },
        },
      },
      actions: [
        {
          type: 'server',
          id: 'APPROVE',
          action: async (ids) => {
            await submitApproveComics(ids);
          },
          successMessage: 'Комикс успешно прошел модерацию!',
          errorMessage: 'Ошибка во время выполнения операции!',
          title: 'Одобрить',
        },
        {
          type: 'server',
          id: 'DECLINE',
          action: async (ids) => {
            await submitRejectComics(ids);
          },
          successMessage: 'Комикс не прошел модерацию!',
          errorMessage: 'Ошибка во время выполнения операции!',
          title: 'Отклонить',
        },
      ],
    },
    Tom: {
      toString: (tom) => tom.title,
      title: '📖 Toms',
      aliases: {
        id: 'ID',
      },
      list: {
        display: ['id', 'title', 'comics'],
        search: ['title'],
        fields: {
          comics: {
            formatter: (comics) => comics?.title || 'No comics',
          },
        },
      },
      edit: {
        display: ['title', 'comics'],
        fields: {
          comics: {
            optionFormatter: (comics) => comics.title,
          },
        },
      },
    },
    Chapter: {
      toString: (chapter) => chapter.name,
      title: '📝 Chapters',
      aliases: {
        id: 'ID',
      },
      list: {
        display: ['id', 'name', 'tom', 'isRead', 'likes'],
        search: ['name'],
        fields: {
          tom: {
            formatter: (tom) => tom?.title || 'No tom',
          },
        },
      },
      edit: {
        display: ['name', 'tom', 'images', 'isRead', 'likes', 'timeCode'],
        styles: {
          _form: 'grid-cols-2 gap-4',
          images: 'col-span-2',
        },
        fields: {
          tom: {
            optionFormatter: (tom) => tom.title,
          },
          images: {
            format: 'file',

            // **TODO
            handler: {
              upload: async (buffer, infos, context) => {
                console.log(buffer, infos, context);
                return 'https://i.ibb.co/KzyF5JS7/6820a60bc48c293d879e5aa6-covers-b0fb21ff-fdfc-437f-adc1-d63b4173ee56.png';
              },
            },
          },
        },
      },
    },
  },
};
