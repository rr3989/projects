import cv2
import numpy as np
import sqlite3
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
facedb = BASE_DIR / "FaceBase.db"


conn=sqlite3.connect(facedb)


def delRecords():
    cmd_delete = "Delete from People"
    cursor = conn.execute(cmd_delete)
    conn.commit()
    conn.close()

def createTable():
    cmd_create = "CREATE TABLE PEOPLE (ID INT PRIMARY KEY NOT NULL, NAME VARCHAR NOT NULL, AGE INT NOT NULL)"
    cursor=conn.execute(cmd_create)
    conn.commit()
    conn.close()


def alterTable():
    cmd_alter = "ALTER TABLE PEOPLE(ID INT PRIMARY KEY NOT NULL, Name INT NOT NULL)"
    cursor=conn.execute(cmd_alter)
    conn.commit()
    conn.close()

#createTable()
#insertAccRecords()
delRecords()
