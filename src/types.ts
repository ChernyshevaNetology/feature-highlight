export enum EItemType {
  video = "video",
  article = "article",
}

export interface IVideoProps {
  list: IVideo[];
}

export interface IVideo {
  type: string;
  url?: string;
  title?: string;
  views: number;
}
