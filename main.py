from fastapi import FastAPI

from database import Base, engine

<<<<<<< HEAD
from routers.menu import router as menu_router
from routers.auth import router as auth_router
from routers.orders import router as orders_router

=======
# IMPORT MODELS
from models.user import User
from models.menu_item import MenuItem

from routers.menu import router as menu_router

# CREATE TABLES
>>>>>>> 565c54d28d1d670ecf7b077dc6ed5b52709021ce
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Restaurant Menu Manager API"
)

<<<<<<< HEAD
app.include_router(menu_router)
app.include_router(auth_router)
app.include_router(orders_router)
=======
# INCLUDE ROUTERS
app.include_router(menu_router)
>>>>>>> 565c54d28d1d670ecf7b077dc6ed5b52709021ce

@app.get("/")
def home():
    return {
        "message": "Restaurant API Running"
    }