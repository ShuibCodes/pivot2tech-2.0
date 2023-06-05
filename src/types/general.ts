export interface ICourse {
    _id: string;
    _type: 'course';
    title: string;
    subtitle: string;
    spaces: string;
    courseTime: string;
    duration: string;
    courseDate: Date;
    mainImageUrl : string; 
    purchaseLink: string;
    slug: {
      _type: 'slug';
      current: string;
    };
    author: {
      _type: 'reference';
      _ref: string;
    };
    mainImage: {
      _type: 'image';
      asset: {
        _type: 'reference';
        _ref: string;
      };
      alt: string;
    };
    categories: {
      _type: 'array';
      _ref: string;
    }[];
    kv: {
      _type: 'array';

    }[]
    // Additional fields can be added here as needed
  }