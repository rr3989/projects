import cv2
import numpy as np
import sqlite3
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
facedb = BASE_DIR / "FaceBase.db"


conn=sqlite3.connect(facedb)


def delRecords():
    cmd_delete = "DELETE from People where ID in(1)"
    cursor = conn.execute(cmd_delete)
    conn.commit()
    conn.close()

def createTable():
    cmd_create = "CREATE TABLE Account(ID INT PRIMARY KEY NOT NULL, Balance INT NOT NULL)"
    cursor=conn.execute(cmd_create)
    conn.commit()
    conn.close()


def insertAccRecords():
    cmd_insert="INSERT INTO Account(ID,Balance) Values(4, 7000)"
    conn.execute(cmd_insert)
    conn.commit()
    conn.close()


#createTable()
#insertAccRecords()
delRecords()
