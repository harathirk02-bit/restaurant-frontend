from fastapi import FastAPI

from database import Base, engine

# IMPORT MODELS
from models.user import User
from models.menu_item import MenuItem

from routers.menu import router as menu_router

# CREATE TABLES
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Restaurant Menu Manager API"
)

# INCLUDE ROUTERS
app.include_router(menu_router)

@app.get("/")
def home():
    return {
        "message": "Restaurant API Running"
    }