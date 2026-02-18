from pydantic import BaseModel
from uuid import UUID, uuid4


class TaskCreate(BaseModel):
    description: str

class TaskResponse(BaseModel):
    id: UUID
    description: str