'use client';
import React, { FC, useRef, useEffect } from 'react';
import EditorJS, { OutputData } from '@editorjs/editorjs';
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

type Props = {
  data: OutputData;
};

const ArticleView: FC<Props> = ({ data }) => {
  const isReady = useRef(false);
  const editor = useRef<EditorJS>(null);
  useEffect(() => {
    if (!isReady.current) {
      editor.current = new EditorJS({
        holder: 'editorjs',
        readOnly: true,
        data: data,
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
    <div
      id="editorjs"
      style={{
        marginBottom: '1em',
      }}
    />
  );
};

export default ArticleView;
