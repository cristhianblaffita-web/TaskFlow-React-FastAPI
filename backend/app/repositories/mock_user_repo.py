_fake_users = {}

def create_user(email: str, hashed_password: str):
    _fake_users[email] = {
        "email": email,
        "password": hashed_password
    }

    return _fake_users[email]

def get_user(email: str):
    return _fake_users.get(email)