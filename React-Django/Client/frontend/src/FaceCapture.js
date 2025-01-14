import { useCallback, useRef, useState } from "react"
import Webcam from "react-webcam";

const FaceCapture =() => {
    const [image, setImage] =useState(null);
    const [hasPermission, setHasPermission] = useState(null);
    const webcamRef = useRef(null)

    const capture = useCallback(() => {
        if(webcamRef.current){
            const imgSrc = webcamRef.current.getScreenshot();
            setImage(imgSrc);
        }
    }, [webcamRef])

    return 
    {
    <div>
        <>
        <Webcam ref={webcamRef} screenshotFormat = "image/jpeg"/>
        <button onClick={capture}>Capture Pic</button>
        {image && <img src={imgSrc} alt="captured"/>}
        </>
    </div>

    };

};

export default FaceCapture;