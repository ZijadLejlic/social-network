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

    async get(user_id) {
        let api_url = this.api_url + '/users/' + user_id;
        let response = await fetch(api_url);
        let data = await response.json();
            return data;

    }

    edit() {
        let data = {
            username: this.username,
            email: this.email
        };

        data = JSON.stringify(data);

        let session = new Session();
        let session_id = session.getSession();
    
        fetch(this.api_url + '/users/' + session_id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        })
            .then(response => response.json())
            .then(data => {
                alert('Update successful');
                window.location.reload();
            })
            .catch(error => {
                console.error('Error updating user:', error);
            });
    }

    login() {
        fetch(this.api_url + '/users')
            .then(response => response.json())
            .then(data => {

                let login_successful = 0;
                data.forEach(db_user => {
                    if (db_user.email === this.email && db_user.password === this.password) {
                        let session = new Session();
                        session.user_id = db_user.id;
                        session.startSession(db_user.id);
                        login_successful = 1;
                        window.location.href = 'hexa.html';
                    }
                });

                if (login_successful === 0) {
                    alert('Neispravna email adresa ili lozinka');
                }
            });
    }

    delete() {
        let session = new Session();
        let session_id = session.getSession();

        fetch(this.api_url + '/users/' + session_id, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            alert('Profile deleted successfully');
        })
        .catch(error => {
            console.error('Error deleting user:', error);
        });
    }
}

