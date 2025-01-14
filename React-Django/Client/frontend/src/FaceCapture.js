import {React,useRef,useCallback,useState} from 'react';
import Webcam from 'react-webcam';

function Camera (){

    const webcamRef = useRef(null)
    const [image, setImage] = useState(null)

    const capturePhoto = useCallback(() => {
            const imageSrc = webcamRef.current.getScreenshot();
            setImage(imageSrc);
    }, [webcamRef])

    return (
        <>
        <center>
            <Webcam ref={webcamRef} screenshotFormat = "image/png"/>
            <button onClick={capturePhoto}>Capture Pic</button>
            {image && (
                <div>
                    <img src={image} alt = "Screenshot"/>
                </div>
            )}
           </center>
        </>
    )
    
}

export default Camera;