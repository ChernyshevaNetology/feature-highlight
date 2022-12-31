import React from "react";
import { withHighlight } from "../HOC/withHilight";
import { IVideo } from "../types";

function Article({ title, views }: IVideo) {
  return (
    <div className="item item-article">
      <h3>
        <a href="#">{title}</a>
      </h3>
      <p className="views">Прочтений: {views}</p>
    </div>
  );
}

export default withHighlight(Article);
