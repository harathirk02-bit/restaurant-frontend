<<<<<<< HEAD
from fastapi import (
    APIRouter,
    Depends,
    HTTPException
)

from fastapi.security import (
    HTTPBearer,
    HTTPAuthorizationCredentials
)

=======
from fastapi import APIRouter, Depends, HTTPException
>>>>>>> 565c54d28d1d670ecf7b077dc6ed5b52709021ce
from sqlalchemy.orm import Session

from database import SessionLocal
from models.menu_item import MenuItem
<<<<<<< HEAD

=======
>>>>>>> 565c54d28d1d670ecf7b077dc6ed5b52709021ce
from schemas.menu_item import (
    MenuItemCreate,
    MenuItemUpdate,
    MenuItemResponse
)

router = APIRouter(
    prefix="/menu",
    tags=["Menu"]
)

<<<<<<< HEAD
# DATABASE
=======
# DATABASE CONNECTION
>>>>>>> 565c54d28d1d670ecf7b077dc6ed5b52709021ce
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

<<<<<<< HEAD
# TOKEN SECURITY
security = HTTPBearer()

# VERIFY TOKEN
def verify_token(
    credentials: HTTPAuthorizationCredentials = Depends(security)
):

    token = credentials.credentials

    if not token:
        raise HTTPException(
            status_code=401,
            detail="Token missing"
        )

    return token

# GET MENU ITEMS
@router.get("/", response_model=list[MenuItemResponse])
def get_menu_items(
    db: Session = Depends(get_db),
    token: str = Depends(verify_token)
):

    items = db.query(MenuItem).all()

=======
# GET ALL MENU ITEMS
@router.get("/", response_model=list[MenuItemResponse])
def get_menu_items(db: Session = Depends(get_db)):
    items = db.query(MenuItem).all()
>>>>>>> 565c54d28d1d670ecf7b077dc6ed5b52709021ce
    return items

# ADD MENU ITEM
@router.post("/", response_model=MenuItemResponse)
def create_menu_item(
    item: MenuItemCreate,
<<<<<<< HEAD
    db: Session = Depends(get_db),
    token: str = Depends(verify_token)
):

    new_item = MenuItem(**item.dict())
=======
    db: Session = Depends(get_db)
):
    new_item = MenuItem(**item.model_dump())
>>>>>>> 565c54d28d1d670ecf7b077dc6ed5b52709021ce

    db.add(new_item)
    db.commit()
    db.refresh(new_item)

    return new_item

# UPDATE MENU ITEM
@router.put("/{item_id}", response_model=MenuItemResponse)
def update_menu_item(
    item_id: int,
    updated_item: MenuItemUpdate,
<<<<<<< HEAD
    db: Session = Depends(get_db),
    token: str = Depends(verify_token)
):

    item = db.query(MenuItem).filter(
        MenuItem.id == item_id
    ).first()
=======
    db: Session = Depends(get_db)
):
    item = db.query(MenuItem).filter(MenuItem.id == item_id).first()
>>>>>>> 565c54d28d1d670ecf7b077dc6ed5b52709021ce

    if not item:
        raise HTTPException(
            status_code=404,
            detail="Menu item not found"
        )

    item.name = updated_item.name
    item.description = updated_item.description
    item.price = updated_item.price
    item.category = updated_item.category
    item.available = updated_item.available

    db.commit()
    db.refresh(item)

    return item

# DELETE MENU ITEM
@router.delete("/{item_id}")
def delete_menu_item(
    item_id: int,
<<<<<<< HEAD
    db: Session = Depends(get_db),
    token: str = Depends(verify_token)
):

    item = db.query(MenuItem).filter(
        MenuItem.id == item_id
    ).first()
=======
    db: Session = Depends(get_db)
):
    item = db.query(MenuItem).filter(MenuItem.id == item_id).first()
>>>>>>> 565c54d28d1d670ecf7b077dc6ed5b52709021ce

    if not item:
        raise HTTPException(
            status_code=404,
            detail="Menu item not found"
        )

    db.delete(item)
    db.commit()

<<<<<<< HEAD
    return {
        "message": "Menu item deleted successfully"
    }
=======
    return {"message": "Menu item deleted successfully"}
>>>>>>> 565c54d28d1d670ecf7b077dc6ed5b52709021ce
