import cv2
import numpy as np
import sqlite3
from pathlib import Path


BASE_DIR = Path(__file__).resolve().parent

faceDetect = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
cam=cv2.VideoCapture(0)
rec = cv2.face.LBPHFaceRecognizer_create()

trainingData = BASE_DIR / "trainingData.yml" 
rec.read(trainingData)

fontface = cv2.FONT_HERSHEY_SIMPLEX
fontscale = 1
fontcolor = (0, 255, 0)
#cv2.putText(im, str(Id), (x,y+h), fontface, fontscale, fontcolor)

def getProfile(id):
    facedb = BASE_DIR / "FaceBase.db"
    conn=sqlite3.connect(facedb)
    fullcmd="SELECT People.ID,Name,Age,Gender,CR,Balance FROM People,Account WHERE People.ID="+str(id) +" and Account.ID="+str(id)
    cursor=conn.execute(fullcmd)
    profile=None
    for row in cursor:
        profile=row
    conn.close()
    return profile

while(True):
    ret,img=cam.read()
    gray=cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)
    faces=faceDetect.detectMultiScale(gray,1.3,5)
    for(x,y,w,h) in faces:
        cv2.rectangle(img,(x,y),(x+w,y+h),(0,255,0),2)
        id,conf=rec.predict(gray[y:y+h,x:x+w])
        profile=getProfile(id)
        if(profile!=None):
            cv2.putText(img,"Name : "+str(profile[1]),(x,y+h+20),fontface, fontscale, fontcolor)
            cv2.putText(img,"Age : "+str(profile[2]),(x,y+h+45),fontface, fontscale, fontcolor)
            cv2.putText(img,"Gender : "+str(profile[3]),(x,y+h+70),fontface, fontscale, fontcolor)
            cv2.putText(img,"Criminal : "+str(profile[4]),(x,y+h+95),fontface, fontscale, fontcolor)
            cv2.putText(img,"Balance : "+str(profile[5]),(x,y+h+120),fontface, fontscale, fontcolor)
        else:
            cv2.putText(img,"Unknown User Alert",(x,y+h+20),fontface, fontscale, fontcolor)

    cv2.imshow("Face",img)
    if(cv2.waitKey(1)==ord('q')):
        break
cam.release()
cv2.destroyAllWindows()