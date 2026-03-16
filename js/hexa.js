let session = new Session();
session_id = session.getSession();

if (session_id !== '') {
  async function populateUserData() {
    let user = new User();
    user = await user.get(session_id);

    document.querySelector('#username').innerText = user['username'];
    document.querySelector('#email').innerText = user['email'];

    document.querySelector('#korisnicko_ime').value = user['username'];
    document.querySelector('#edit_email').value = user['email'];
  }

  populateUserData();
} else {
  window.location.href = '/';
}

document.querySelector('#logout').addEventListener('click', (e) => {
  e.preventDefault();

  session.destroySession();
  window.location.href = '/';
});

document.querySelector('#editAccount').addEventListener('click', () => {
  document.querySelector('.custom-modal').style.display = 'block';
});

document.querySelector('#close-modal').addEventListener('click', () => {
  document.querySelector('.custom-modal').style.display = 'none';
});

document.querySelector('#editForm').addEventListener('submit', (e) => {
  e.preventDefault();

  let user = new User();
  user.username = document.querySelector('#korisnicko_ime').value;
  user.email = document.querySelector('#edit_email').value;
  user.edit();
});

document.querySelector('#deleteProfile').addEventListener('click', () => {
  let text = 'Are you sure you want to delete your profile?';
  if (confirm(text) === true) {
    let user = new User();
    user.delete();
  }

  session.destroySession();
  window.location.href = '/';
});

document.querySelector('#postForm').addEventListener('submit', (e) => {
  e.preventDefault();

  async function createPost() {
    let content = document.querySelector('#postContent').value;
    document.querySelector('#postContent').value = '';
    let post = new Post();
    post.content = content;
    post = await post.create(content);

    let current_user = new User();
    current_user = await current_user.get(session_id);

    let delete_post_html = '';

    if (current_user['user_id'] === post['user_id']) {
      delete_post_html = `<button class ="remove-btn" onclick="removeMyPost(this)">Delete</button>`;
    }

    document.querySelector('#allPostsWrapper').innerHTML =
      `<div class="single-post" data-post-id="${post['post_id']}">
                                                            <div class="post-content">${post.content}</div>
                                                            
                                                            <div class="post-actions">
                                                            <p><b>Autor:</b> ${current_user['username']}</p>
                                                            <div>
                                                            <button onclick="likePost(this)" class="likePostJS like-btn"><span class="likes-count">${post.likes}</span>Likes</button>
                                                            <button class = "comment-btn" onclick="commentPost(this)">Comment</button>
                                                            ${delete_post_html}
                                                            </div>
                                                            </div>

                                                            <div class="post-comments">
                                                            <form>
                                                            <input placeholder="Write a comment..." type="text" class="comment-input" />
                                                            <button onclick="commentPostSubmit(event)">Comment</button>
                                                            </form>
                                                            </div>
                                                            
                                                            </div>
                                                            `;
  }

  createPost();
});

const commentPostSubmit = (event) => {};

const removeMyPost = (el) => {};

// 2:00:00
