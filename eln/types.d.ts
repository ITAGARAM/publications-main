export type Post = {
    _id: Key | null | undefined;
    tags: any;
    title: string;
    slug: {
      current: string;
    };
    subtitle?: string;
    author?: {
      name: string;
    };
    mainImage?: {
      asset: {
        url: string;
      };
    };
    categories?: Array<{
      _ref: string;
    }>;
    readTime?: number;
    tag?:string;
    publishedAt?: string; 
    body: Array<{
      children: Array<{
        text: string;
      }>;
    }>;
  };
  
  