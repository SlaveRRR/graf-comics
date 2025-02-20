'use client';
import { FC } from 'react';
import ComicsCommentReply from './ReplyComment';
import styles from './index.module.scss';

interface ComComment {
  id: string;
  text: string;
  replyId: null;
  reply: null;
  replies: any;
  likes: number;
  createdAt: string;
  User: any;
  userId: string;
}

interface ComicsCommentProps {
  comment: ComComment;
}
function toNormalTime(min) {
  min = min.toString();
  console.log(min.length);
  if (min.length < 2) {
    min = '0' + min;
    return min;
  } else return min;
}
const ComicsComment: FC<ComicsCommentProps> = ({ comment }) => {
  //console.log(comment);
  let dateComment = new Date(comment.createdAt);
  console.log(dateComment.getMinutes());
  const dateTimeComment = `${dateComment.getHours()}:${toNormalTime(dateComment.getMinutes())}`;
  const formattedDate = dateComment.toLocaleString('ru', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <section>
      <div className={styles['comments']}>
        <div className={styles['comments__content-body']}>
          <div className={styles['comments__avatar']}></div>
          <div>
            <h3 className={styles['comments__user-name']}>{comment.User.name}</h3>
            <p className={styles['comments__text']}>{comment.text}</p>
            <div className={styles['comments__third-string']}>
              <p className={styles['comments__date']}>
                {formattedDate} в {dateTimeComment}
              </p>
              <button className={styles['comments__button']} onClick={() => console.log('Ответить на комментарий:')}>
                Ответить
              </button>
            </div>
          </div>
        </div>
        <div className={styles['comments__like']}>
          <span className="">
            <svg
              className="comments__like-item"
              strokeWidth={0.8}
              stroke="#2D283E"
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 11 10"
              fill="none"
            >
              <path
                d="M5.15011 1.70425L5.5 2.3358L5.84989 1.70425C6.06562 1.31487 6.3804 0.989203 6.76249 0.760174C7.14122 0.533158 7.57277 0.40907 8.01427 0.400162C8.72682 0.434188 9.39746 0.746956 9.8811 1.271C10.3674 1.79793 10.6251 2.49563 10.5981 3.21168L10.5978 3.21922V3.22678C10.5978 4.13559 10.1135 5.13705 9.3534 6.13444C8.60059 7.12234 7.61745 8.05421 6.70916 8.81535L6.70888 8.81558C6.37037 9.09977 5.9423 9.25562 5.5 9.25562C5.0577 9.25562 4.62963 9.09977 4.29111 8.81558L4.29084 8.81535C3.38255 8.05421 2.39941 7.12234 1.6466 6.13444C0.886545 5.13705 0.402218 4.13559 0.402218 3.22678V3.21922L0.401933 3.21168C0.374887 2.49563 0.632606 1.79793 1.1189 1.271C1.60254 0.746956 2.27318 0.434188 2.98573 0.400162C3.42723 0.40907 3.85878 0.533158 4.23751 0.760174C4.6196 0.989203 4.93438 1.31487 5.15011 1.70425Z"
                stroke="#2D283E"
                strokeWidth="0.8"
              />
            </svg>
          </span>
        </div>
      </div>
      {comment.replies.map((replyComment) => (
        <ComicsCommentReply comment={replyComment} replyName={comment.User.name} />
      ))}
    </section>
  );
};

export default ComicsComment;
