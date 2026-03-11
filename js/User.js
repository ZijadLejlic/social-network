class User {
    user_id = '';
    username = '';
    email = '';
    password = '';
    api_url = 'https://69b16626adac80b427c506d5.mockapi.io';

    create() {
        let data = {
            username: this.username,
            email: this.email,
            password: this.password
        };

        fetch(this.api_url + '/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {

            let session = new Session();
            session.user_id = data.id;
            session.startSession(data.id);

            window.location.href = 'hexa.html';
        })
        .catch(error => {
            console.error('Error creating user:', error);
        });

    }

    
}