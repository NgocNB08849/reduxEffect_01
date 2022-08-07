export interface Articles {
    id: number,
    title: string,
    description: string,
    readable_publish_date: any,
    social_image: any,
  }
  export interface ArticlesState {
    list: Articles[];
    error: string;
    isSuccess: boolean,
    isLoading: boolean,
  }