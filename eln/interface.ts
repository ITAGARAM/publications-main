export interface TextBlock {
    children: { text: string }[];
  }
  
 
  export  interface Blog {
    _id: string;
    title: string;
    subtitle: string;
    mainImage: any;
    body: TextBlock[];
    publishedAt: string;
    readTime: number;
    tags: string[];
    categories: {
      _id: string;
      title: string;
    }[];
  }
  
  export interface Post {
    _id: string;
    title: string;
    subtitle: string;
    mainImage: any;
    body: TextBlock[];
    publishedAt: string;
    readTime: number;
    tags: string[];
    categories: {
      _id: string;
      title: string;
    }[];
  }
  export  interface Category {
    _id: string;
    title: string;
  }