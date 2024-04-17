import axios from "axios";
import React from "react";
import { useState } from "react";

const Upload = () => {
    let endpoint = "http://localhost:8000/student/Upload";
    const [myFile, setMyFile] = useState("");
    const [myImage, setMyImage] = useState("");

    const handleFile = (e) => {
        //  setMyFile(e.target.files[0]);
        console.log(e.target.files[0]);
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            console.log(reader.result);
            setMyFile(reader.result);
        }

    }
    const Upload = async () => {
        axios.post(endpoint, { myFile })
        .then((res) => {
            // console.log(res);
            setMyImage(res.data.result.url);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <div>
            <input type="file" onChange={(e) => handleFile(e)}/>
            <button onClick={Upload} className="btn btn-dark ">UPLOAD</button>
            <img src={myImage} className="w-25" alt="" />
        </div>
    )
}
export default Upload;