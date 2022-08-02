export interface ArticlePostModleBody {
    // {
    //     "slug": "New-Article-Title-1-52349",
    //     "title": "New Article Title 1",
    //     "description": "Test Article",
    //     "body": "It is my test article",
    //     "tagList": [],
    //     "createdAt": "2022-06-06T12:19:42.166Z",
    //     "updatedAt": "2022-06-06T12:19:42.166Z",
    //     "favorited": true,
    //     "favoritesCount": 1,
    //     "author": {
    //         "username": "conduittst",
    //         "bio": null,
    //         "image": "https://api.realworld.io/images/smiley-cyrus.jpeg",
    //         "following": false
    //     }
    // }

    // {
    //     "article": {
    //       "slug": "blala-52349",
    //       "title": "blala",
    //       "description": "adasda",
    //       "body": "asasd",
    //       "tagList": [],
    //       "createdAt": "2022-06-07T14:17:36.749Z",
    //       "updatedAt": "2022-06-07T14:17:36.749Z",
    //       "favorited": true,
    //       "favoritesCount": 1,
    //       "author": {
    //         "username": "conduittst",
    //         "bio": null,
    //         "image": "https://api.realworld.io/images/smiley-cyrus.jpeg",
    //         "following": false
    //       }
    //     }
    //   }

    // {
    //     "article": {
    //       "slug": "blala-52349",
    //       "title": "blala",
    //       "description": "adasda",
    //       "body": "asasd",
    //       "tagList": [],
    //       "createdAt": "2022-06-07T14:17:36.749Z",
    //       "updatedAt": "2022-06-07T14:17:36.749Z",
    //       "favorited": false,
    //       "favoritesCount": 0,
    //       "author": {
    //         "username": "conduittst",
    //         "bio": null,
    //         "image": "https://api.realworld.io/images/smiley-cyrus.jpeg",
    //         "following": false
    //       }
    //     }
    //   }
    slug: string; title: string; description: string; body: string; tagList: []; createdAt: string;
    updatedAt: string; favorited: boolean; favoritesCount: number; author: { username: string; bio: string; image: string; following: boolean }
}
