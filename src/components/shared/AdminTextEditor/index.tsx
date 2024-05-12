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
import { CustomInputProps } from '@premieroctet/next-admin';

type Props = CustomInputProps;

const AdminTextEditor: FC<Props> = ({ value, name, onChange, rawErrors }) => {
  const isReady = useRef(false);
  const editor = useRef(null);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isReady.current) {
      editor.current = new EditorJS({
        holder: 'editorjs',
        autofocus: true,
        data: JSON.parse(JSON.parse(value)),
        onChange: async (api, event: BlockMutationEvent) => {
          if (event.type !== 'block-changed') {
            return;
          }

          function couldBeCounted(block) {
            return 'text' in block.data;
          }

          function getBlocksTextLen(blocks) {
            return blocks.filter(couldBeCounted).reduce((sum, block) => {
              sum += block.data.text.replaceAll('&nbsp;', '').length;
              return sum;
            }, 0);
          }
          const content = await api.saver.save();
          const contentLen = getBlocksTextLen(content.blocks);
          setCount(contentLen);
          onChange({
            // @ts-expect-error
            target: { value: content },
          });
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
      <p>Количество символов: {count}</p>
      <div
        id="editorjs"
        style={{
          marginBottom: '1em',
        }}
      />
    </>
  );
};

export default AdminTextEditor;
