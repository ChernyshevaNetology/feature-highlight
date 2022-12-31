import React from "react";
import Video from "./Video";
import Article from "./Article";
import { IVideo, EItemType } from "../types";

const List = (props: any) => {
  return props.list.map((item: IVideo, idx: number) => {
    switch (item.type) {
      case EItemType.video:
        return <Video key={idx} {...item} />;
      case EItemType.article:
        return <Article key={idx} {...item} />;
      default:
        return null;
    }
  });
};

export { List };
