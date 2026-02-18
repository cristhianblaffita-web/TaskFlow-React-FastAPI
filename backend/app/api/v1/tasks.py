from fastapi import APIRouter 
from app.schemas.task_schema import TaskCreate
from app.services.task_service import create_new_task, get_all_tasks

router = APIRouter(prefix="/tasks", tags=["Tasks"])

@router.post("/")
def create_task_endpoint(task: TaskCreate):
    return create_new_task(task.description)

@router.get("/")
def list_task_endpoint():
    return get_all_tasks()