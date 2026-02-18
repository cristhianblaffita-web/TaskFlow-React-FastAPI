from app.repositories.mock_user_repo import create_user, get_user
from app.utils.hashing import hash_password, verify_password
from app.core.security import create_access_token

def register_user(email: str, password: str):
    hashed = hash_password(password)
    return create_user(email, hashed)

def authenticate_user(email: str, password: str):
    user = get_user(email)

    if not user:
        return None

    if not verify_password(password, user["password"]):
        return None

    token = create_access_token({"sub": email})
    return token