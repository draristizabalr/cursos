from sqlalchemy.orm import Session
from models.user import User
from schemas.users import UserCreate


def get_user_by_id(db: Session, user_id: int):
    return db.query(User).filter(User.id == user_id).first()


def get_user_by_email(db: Session, email: str):
    return db.query(User).filter(User.email == email).first()


def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(User).offset(skip).limit(limit).all()


def create_user(db: Session, user: UserCreate):
    fake_hashed_password = user.password + "notreallyhashed"
    db_user = User(name=user.name, email=user.email,
                   password=fake_hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)

    return db_user


def delete_user(db: Session, user_id: int):
    user_to_delete = db.query(User).filter(User.id == user_id).first()
    db.delete(user_to_delete)
    db.commit()
    db.refresh()

    return {
        "message": "User deleted",
        "user": dict(user_to_delete)
    }
