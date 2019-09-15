import axios from 'axios';
import queryString from 'query-string';

export const writePost = ({board_ix, title, contents, is_comment, is_private, is_anon, vote_ix}, jwt) => axios.post('/api/post', {
    board_ix, title, contents, is_comment, is_private, is_anon, vote_ix
  },
  {headers: {
          "x-access-token" : jwt
  }
});
export const getPost = ({id, jwt}) => axios.get(`/api/post/${id}`, jwt ?
  {headers: {
          "x-access-token" : jwt
        }
  } : null
);

export const getPostList = ({page, boardIx, jwt}) => axios.get(`/api/post/?page=${page}&board_ix=${boardIx}`,
  {headers: {
          "x-access-token" : jwt
        }
  }
);
export const getHotPostList = () => axios.get(`/api/hot_post`);


export const editPost = ({id, board_ix,  title, contents, is_comment, is_private, is_anon}, jwt) => axios.put(`api/post/${id}}`,{
    board_ix, title, contents, is_comment, is_private, is_anon
  },
  {headers: {
          "x-access-token" : jwt
        }
  }
)

export const removePost = ({id, jwt}) => axios.delete(`/api/post/${id}`,
  {headers: {
          "x-access-token" : jwt
        }
  }
)
export const login = ({id, pw}) => axios.post('api/auth/login', {id, pw});

export const checkLogin = ({jwt}) => axios.get('/api/auth/check',
  {headers: {
          "x-access-token" : jwt
        }
  }
);

export const logout = ({jwt}) => axios.get('/api/auth/logout',
  {headers: {
          "x-access-token" : jwt
        }
  }
);

export const register = ({name, id, pw}) => axios.post('/api/auth/register', {name, id, pw})

export const userInfo = ({user_ix}) => axios.get(`/api/user/${user_ix}`);

export const getCommentList = ({id}) => axios.get(`/api/comment?post_ix=${id}`);

export const writeComment = ({post_ix, parent_ix, is_private, is_anon, contents, is_comment_parent}, jwt) => axios.post(`/api/comment`,
  {post_ix, parent_ix, is_private, is_anon, contents},
  {headers: {
          "x-access-token" : jwt
  }
}
);
export const removeComment = ({id, jwt}) => axios.delete(`/api/comment/${id}`,
  {headers: {
          "x-access-token" : jwt
  }
}
);

export const getBoardName = ({boardIx}) => axios.get(`/api/board/${boardIx}`);
export const addBoard = ({name, is_admin, parent_name}, jwt) => axios.post(`/api/board`, {name, is_admin, parent_name},
  {headers: {
          "x-access-token" : jwt
  }
});

export const removeBoard = ({ix}, jwt) => axios.delete(`/api/board/${ix}`,
  {headers: {
          "x-access-token" : jwt
  }
});
export const editBoard = ({ix, name}, jwt) => axios.put(`/api/board/${ix}`,
  {
    name
  },
  {headers: {
          "x-access-token" : jwt
  }
});
export const getBoardList = () => axios.get('/api/board');

export const getVote = ({vote_ix}) => axios.get(`/api/vote/${vote_ix}`);
export const getVoteItem = ({vote_ix}) => axios.get(`/api/vote_item?vote_ix=${vote_ix}`);
export const toVote = ({vote_item_ix}, jwt) => axios.post(`/api/vote_to_item`, {vote_item_ix},
  {headers: {
          "x-access-token" : jwt
  }
}
);
export const addVote = ({title}, jwt) => axios.post(`/api/vote`, {title},
  {headers: {
          "x-access-token" : jwt
  }
});
export const addVoteItem = ({contents, vote_ix}, jwt) => axios.post(`/api/vote_item`, {contents, vote_ix},
  {headers: {
          "x-access-token" : jwt
  }
}


);
