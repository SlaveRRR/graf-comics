export const comments = [
  {
    id: '652d6b2f1c4a5b0012345678',
    text: 'Это первый комментарий!',
    replyId: null,
    reply: null,
    replies: [
      {
        id: '652d6b3f1c4a5b0012345679',
        text: 'Это ответ на первый комментарий!',
        replyId: '652d6b2f1c4a5b0012345678',
        reply: null,
        replies: [],
        likes: 3,
        createdAt: '2024-02-11T12:00:00.000Z',
        User: {
          id: 'user123',
          name: 'Алексей',
          profileAvatar: null,
        },
        userId: 'user123',
      },
    ],
    likes: 5,
    createdAt: '2024-02-11T10:00:00.000Z',
    User: {
      id: 'user456',
      name: 'Мария',
      profileAvatar: null,
    },
    userId: 'user456',
  },
  {
    id: '652d6b4f1c4a5b001234567A',
    text: 'Второй отдельный комментарий без ответов',
    replyId: null,
    reply: null,
    replies: [],
    likes: 2,
    createdAt: '2024-02-11T11:30:00.000Z',
    User: {
      id: 'user789',
      name: 'Иван',
      profileAvatar: null,
    },
    userId: 'user789',
  },
];
