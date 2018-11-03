import request from 'superagent';

export function getPosts() {
  return request.get('https://jsonplaceholder.typicode.com/posts')
    .then(data => {
      debugger;
    });
}

export function postPosts() {
  return request.post('https://jsonplaceholder.typicode.com/posts')
    .then(data => {
      debugger;
    });
}
