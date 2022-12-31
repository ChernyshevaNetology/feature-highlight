import React from "react";
import { withHighlight } from "../HOC/withHilight";
import { IVideo } from "../types";

function Video({ url, views }: IVideo) {
  return (
    <div className="item item-video">
      <iframe
        src={url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
      <p className="views">Просмотров: {views}</p>
    </div>
  );
}

export default withHighlight(Video);
