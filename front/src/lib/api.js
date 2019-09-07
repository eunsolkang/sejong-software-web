import axios from 'axios';
import queryString from 'query-string';

export const writePost = ({board_ix, title, contents, is_comment, is_private}, jwt) => axios.post('/api/post', {
    board_ix, title, contents, is_comment, is_private
  },
  {headers: {
          "x-access-token" : jwt
  }
});
export const getPost = ({id, jwt}) => axios.get(`/api/post/${id}`,
  {headers: {
          "x-access-token" : jwt
        }
  }
);

export const getPostList = ({page, boardIx, jwt}) => axios.get(`/api/post/?page=${page}&board_ix=${boardIx}`,
  {headers: {
          "x-access-token" : jwt
        }
  }
);

export const editPost = ({id, board_ix,  title, contents}, jwt) => axios.put(`api/post/${id}}`,{
    board_ix, title, contents
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

export const getBoardName = ({boardIx}) => axios.get(`/api/board/${boardIx}`);
export const addBoard = ({name, is_admin}, jwt) => axios.post(`/api/board`, {name, is_admin},
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
