from fastapi import APIRouter, HTTPException
from app.schemas.auth_schema import RegisterRequest, LoginRequest
from app.services.auth_service import register_user,authenticate_user

router = APIRouter(prefix="/auth", tags=["Auth"])

@router.post("/signup")
def register(data: RegisterRequest):
    return register_user(data.email, data.password)

@router.post("/login")
def login(data: LoginRequest):
    token = authenticate_user(data.email, data.password)

    if not token:
        raise HTTPException(
            status_code=401,
            detail="Invalid credentials"
        )

    return {"access_token": token, "token_type": "bearer"}