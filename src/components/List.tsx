import React from "react";
import { EnhancedVideo } from "./Video";
import { EnhancedArticle } from "./Article";
import { IVideo, EItemType, IVideoProps } from "../types";

const List = ({ list }: IVideoProps) => {
  return (
    <>
      {list.map((item: IVideo, idx: number) => {
        switch (item.type) {
          case EItemType.video:
            return <EnhancedVideo key={idx} {...item} />;
          case EItemType.article:
            return <EnhancedArticle key={idx} {...item} />;
          default:
            return null;
        }
      })}
    </>
  );
};

export { List };
