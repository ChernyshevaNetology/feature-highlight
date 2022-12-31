import React from "react";
import { Popular } from "../components/Popular";
import { New } from "../components/New";
import { IVideo } from "../types";

export const withHighlight = (WrappedComponent: React.FC<IVideo>) => {
  return ({ ...props }: IVideo) => {
    if (props.views > 100) {
      return (
        <Popular {...props}>
          <WrappedComponent {...props} />
        </Popular>
      );
    } else {
      return (
        <New {...props}>
          <WrappedComponent {...props} />
        </New>
      );
    }
  };
};
