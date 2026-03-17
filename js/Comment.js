class Comment {
  post_id = '';
  user_id = '';
  content = '';
  api_url = 'https://69b16626adac80b427c506d5.mockapi.io';

  create() {
    let data = {
      post_id: this.post_id,
      user_id: this.user_id,
      content: this.content,
    };

    data = JSON.stringify(data);

    return fetch(this.api_url + '/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  }

  async get(post_id) {
    let response = await fetch(this.api_url + '/comments?post_id=' + post_id);
    let data = await response.json();
    return data;
  }
}
