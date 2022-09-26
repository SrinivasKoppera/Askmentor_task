import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Header from '../Layouts/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home({ setImage }) {

  // const [otherData, setOtherData] = useState({ title: '', thumbnail: '', description: '' })
  // const { title, thumbnail, description } = otherData;

  const [data, setData] = useState("")

  // const [image, setImage] = useState(null)
  const onChangeHandler = (e) => {
    // setOtherData({ ...otherData, [e.target.id]: e.target.value })
    setData(e.target.files)
  }
  const onSubmitHandler = (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append("file", data[0])
    formData.append("upload_preset", "iaqe9d3t")
    axios.post('https://api.cloudinary.com/v1_1/dbtmnaluh/image/upload', formData)
      .then((res) => { setImage(res.data.url) })
      .then(() => { notify()})
      .catch(() =>{error()})
  }

  const notify = () => toast.success("File was added succusfully in cloudinary!", {position:'top-center'});
  const error = () => toast.error("File Error", {position:'top-center'})
  return (
    <div>
      <Header />
      <div className='formcontainer'>
        <form className='form' noValidate='novalidation' onSubmit={onSubmitHandler} >
          <h2 style={{ textShadow: "1px 1px 4px black", }}>Images and Videos Upload in Cloudinary</h2>

          {/* <div className='forminput'>
                  <label for='title'>File Title</label>
                  <input type="text" id='title' required='required' placeholder='Please Enter Title'
                 value={title}   onChange={onChangeHandler} /><br />
                  <span className='error'>Required</span><br />
                </div> */}

          {/* <div className='forminput'>
                  <label for='thumbnail'>Thumbnail</label>
                  <input type="text" id='thumbnail' required='required' maxLength={50} placeholder='Enter the Thumbnail'
                   value={thumbnail} onChange={onChangeHandler} /><br />
                  <span className='error'>Required</span><br />
                </div> */}

          <div className='forminput'>
            <label for='file'>File Upload</label>
            <input type="file" id='file' required='required' placeholder='Please Upload the File'
              onChange={onChangeHandler} /><br />
            <span>Only Accepted formates Images-jpg, png and Videos mpg, avi & mp4</span><br />
            <span className='error'></span><br />
          </div>

          {/* <div className='forminput'>
                  <label for='description'>Description</label>
                  <textarea placeholder='Description' id='description' required='required' rows={5} cols={20} maxLength={200}
                  value={description}  onChange={onChangeHandler}></textarea><br />
                  <span className='error'>Required</span>
                </div> */}
          <button className='btn' type='submit'>Upload</button>
        </form>
      </div>
      <ToastContainer />
    </div>

  )
}
