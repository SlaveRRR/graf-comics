'use client';
import React, { FC, useRef, useEffect, SetStateAction, useState } from 'react';
import EditorJS, { BlockMutationEvent, OutputData } from '@editorjs/editorjs';
import Header from '@editorjs/header';
import RawTool from '@editorjs/raw';
import List from '@editorjs/list';
import Embed from '@editorjs/embed';
import TextAlign from '@canburaks/text-align-editorjs';
import FontFamily from 'editorjs-font-family';
import FontSize from 'editorjs-inline-font-size-tool';
import Underline from '@editorjs/underline';
import Strikethrough from 'editorjs-strikethrough';
import ImageTool from '@editorjs/image';
import styles from './index.module.scss';
import { useRouter } from 'next/navigation';

function couldBeCounted(block) {
  return 'text' in block.data;
}

function getBlocksTextLen(blocks) {
  return blocks.filter(couldBeCounted).reduce((sum, block) => {
    sum += block.data.text.replaceAll('&nbsp;', '').length;
    return sum;
  }, 0);
}

type Props = {
  rawHtml?: string;
  onSave: (result: string) => void;
};

const TextEditor: FC<Props> = ({ rawHtml, onSave }) => {
  const isReady = useRef(false);
  const editor = useRef<EditorJS>(null);
  const router = useRouter();
  const [count, setCount] = useState(0);
  const handleSave = async () => {
    alert('Ваша статья отправлена на модерацию');
    const res = JSON.stringify(await editor.current.save());
    onSave(res);
    // router.replace('/');
  };
  useEffect(() => {
    if (!isReady.current) {
      editor.current = new EditorJS({
        holder: 'editorjs',
        autofocus: true,
        // обход бага при первом рендере renderFromHtml
        data: {
          time: 1550476186479,
          version: '2.29.1',
          blocks: [
            {
              type: 'header',
              data: {
                text: 'Напишите свою статью...',
              },
            },
          ],
        },
        onReady: async () => {
          if (rawHtml) {
            try {
              await editor.current.blocks.renderFromHTML(rawHtml);
            } catch (error) {
              console.log(error);
            }
          }
        },
        onChange: async (api, event: BlockMutationEvent) => {
          if (event.type !== 'block-changed') {
            return;
          }
          const content = await api.saver.save();
          console.log(content);
          const contentLen = getBlocksTextLen(content.blocks);
          setCount(contentLen);
        },
        tools: {
          header: {
            class: Header,
            inlineToolbar: true,
          },
          raw: RawTool,
          list: List,
          embed: Embed,
          textAlign: TextAlign,
          fontFamily: FontFamily,
          fontSize: FontSize,
          underline: Underline,
          strikethrough: Strikethrough,
          image: {
            class: ImageTool,
            config: {
              endpoints: {
                byFile: `${process.env.NEXT_PUBLIC_AXIOS_URL}/api/article-image/upload`, // Your backend file uploader endpoint
                byUrl: `${process.env.NEXT_PUBLIC_AXIOS_URL}/api/article-image/fetch`, // Your endpoint that provides uploading by Url
              },
            },
          },
        },
      });
      isReady.current = true;
    }
  }, []);

  return (
    <>
      <p className={styles['words']}>Количество символов: {count}</p>
      <div
        id="editorjs"
        style={{
          marginBottom: '1em',
        }}
      />
      <div className={styles['btns-container']}>
        <button onClick={() => router.back()} className={styles['btns-container__back-btn']}>
          назад
        </button>
        <button onClick={() => handleSave()} className={styles['btns-container__next-btn']}>
          Отправить на модерацию
        </button>
      </div>
    </>
  );
};

export default TextEditor;
