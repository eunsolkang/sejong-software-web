import axios from 'axios';

export const writePost = ({board_ix, title, contents}) => axios.post('/api/post', {
  board_ix, title, contents
},
{headers: {
        "x-access-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpeCI6NCwiaWQiOiJldW5zb2wiLCJpc19hZG1pbiI6ZmFsc2UsImlhdCI6MTU2NTg5NjM3MywiZXhwIjoxNTY2NTAxMTczLCJzdWIiOiJ1c2VySW5mbyJ9.QA53zNuwz57-kbJGvrwnoqgupPykttEts2FYMySSEmo"
      }
});
export const getPost = (id) => axios.get(`/api/post/${id}`,
  {headers: {
          "x-access-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpeCI6NCwiaWQiOiJldW5zb2wiLCJpc19hZG1pbiI6ZmFsc2UsImlhdCI6MTU2NTg5NjM3MywiZXhwIjoxNTY2NTAxMTczLCJzdWIiOiJ1c2VySW5mbyJ9.QA53zNuwz57-kbJGvrwnoqgupPykttEts2FYMySSEmo"
        }
  }
);

export const getPostList = () => axios.get('/api/post',
  {headers: {
          "x-access-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpeCI6NCwiaWQiOiJldW5zb2wiLCJpc19hZG1pbiI6ZmFsc2UsImlhdCI6MTU2NTg5NjM3MywiZXhwIjoxNTY2NTAxMTczLCJzdWIiOiJ1c2VySW5mbyJ9.QA53zNuwz57-kbJGvrwnoqgupPykttEts2FYMySSEmo"
        }
  }
)

export const editPost = ({id, board_ix,  title, contents}) => axios.put(`api/post/${id}`,{
  board_ix, title, contents
},
{headers: {
        "x-access-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpeCI6NCwiaWQiOiJldW5zb2wiLCJpc19hZG1pbiI6ZmFsc2UsImlhdCI6MTU2NTg5NjM3MywiZXhwIjoxNTY2NTAxMTczLCJzdWIiOiJ1c2VySW5mbyJ9.QA53zNuwz57-kbJGvrwnoqgupPykttEts2FYMySSEmo"
      }
}
)

export const removePost = (id) => axios.delete(`/api/post/${id}`,
  {headers: {
          "x-access-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpeCI6NCwiaWQiOiJldW5zb2wiLCJpc19hZG1pbiI6ZmFsc2UsImlhdCI6MTU2NTg5NjM3MywiZXhwIjoxNTY2NTAxMTczLCJzdWIiOiJ1c2VySW5mbyJ9.QA53zNuwz57-kbJGvrwnoqgupPykttEts2FYMySSEmo"
        }
  }
)
export const login = ({id, pw}) => axios.post('api/auth/login', {id, pw});
export const checkLogin = () => axios.get('/api/auth/check');
