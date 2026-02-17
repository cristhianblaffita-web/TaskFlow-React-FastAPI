from app.repositories.mock_task_repo import create_task, list_tasks

def create_new_task(description: str):
    return create_task(description)

def get_all_tasks():
    return list_tasks()