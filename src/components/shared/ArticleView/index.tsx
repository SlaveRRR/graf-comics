'use client';
import { Skeleton } from '@/components/Article/components';
import TextAlign from '@canburaks/text-align-editorjs';
import EditorJS, { OutputData } from '@editorjs/editorjs';
import Embed from '@editorjs/embed';
import Header from '@editorjs/header';
import ImageTool from '@editorjs/image';
import List from '@editorjs/list';
import RawTool from '@editorjs/raw';
import Underline from '@editorjs/underline';
import FontFamily from 'editorjs-font-family';
import FontSize from 'editorjs-inline-font-size-tool';
import Strikethrough from 'editorjs-strikethrough';
import { FC, useEffect, useRef, useState } from 'react';

type Props = {
  data: OutputData;
};

const ArticleView: FC<Props> = ({ data }) => {
  const isReady = useRef(false);

  const editor = useRef<EditorJS>(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const endLoading = async () => {
      await editor.current.isReady;
      await editor.current.render(data);
      setIsLoading(false);
    };

    if (!isReady.current) {
      editor.current = new EditorJS({
        holder: 'editorjs',
        data: {
          blocks: [],
        },
        readOnly: true,
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
      endLoading();
      isReady.current = true;
    }
  }, []);

  return (
    <>
      {isLoading && <Skeleton />}
      <div
        id="editorjs"
        style={{
          marginBottom: '1em',
        }}
      ></div>
    </>
  );
};

export default ArticleView;
