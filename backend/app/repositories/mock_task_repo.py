from uuid import uuid4
from app.schemas.task_schema import TaskResponse

_fake_tasks = []

def create_task(description: str):
    task = TaskResponse(
        id = uuid4(),
        description = description
    )

    _fake_tasks.append(task)

    return task

def list_tasks():
    return _fake_tasks