class Post {
  post_id = '';
  post_content = '';
  user_id = '';
  likes = '';
  api_url = 'https://69b16626adac80b427c506d5.mockapi.io';

  async create(post_content) {
    let session = new Session();
    let session_id = session.getSession();

    let data = {
      user_id: session_id,
      content: post_content,
      likes: 0,
    };
    data = JSON.stringify(data);
    let response = await fetch(this.api_url + '/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    });

    data = await response.json();
    return data;
  }

  async getAllPosts() {
    let response = await fetch(this.api_url + '/posts');
    let data = await response.json();
    return data;
  }

  like(post_id) {
    fetch(this.api_url + '/posts/' + post_id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ likes: this.likes + 1 }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Post liked:', data);
      })
      .catch((error) => {
        console.error('Error liking post:', error);
      });
  }

  delete(post_id) {
    fetch(this.api_url + '/posts/' + post_id, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Post deleted:', data);
      })
      .catch((error) => {
        console.error('Error deleting post:', error);
      });
  }
}
