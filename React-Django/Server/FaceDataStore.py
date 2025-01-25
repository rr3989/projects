import cv2
import numpy as np
import sqlite3
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
print("base - ", BASE_DIR)

#faceDetect=cv2.CascadeClassifier('haarcascade_frontalface_default.xml');
faceDetect = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

cam=cv2.VideoCapture(0);

def insertOrUpdate(Id,Name,Age):
    facedb = BASE_DIR / "FaceBase.db"
    conn=sqlite3.connect(facedb)
    
    params = (Id,Name,Age)
    cmd="INSERT INTO People(ID,NAME,AGE) Values(?, ?, ?)"
    conn.execute(cmd, params)
    conn.commit()
    conn.close()

Id=input('Enter User Id : ')
name=input('Enter User Name : ')
age=input('Enter User Age : ')

sampleNum=0
faceimg = str(BASE_DIR / "face/User.")
print("faceimg - ", faceimg)    
while(True):
    ret,img=cam.read();
    gray=cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)
    faces=faceDetect.detectMultiScale(gray,1.3,5);
    for(x,y,w,h) in faces:
        sampleNum=sampleNum+1;
        cv2.imwrite(faceimg+str(Id)+"."+str(sampleNum)+".jpg",gray[y:y+h,x:x+w])
        cv2.rectangle(img,(x,y),(x+w,y+h),(0,255,0),2)
        cv2.waitKey(200);
    cv2.imshow("Face",img);
    cv2.waitKey(200);
    if(sampleNum>10):
        break;
cam.release()
cv2.destroyAllWindows()
insertOrUpdate(Id,name,age)
print("Data Stored")