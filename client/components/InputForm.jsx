import React, { useState } from 'react';
import axios from 'axios';

function InputForm({ refreshPetData }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [file, setFile] = useState();
  const [uploadedFileURL, setUploadedFileURL] = useState();
  function handleChange(event){
    console.log('Adding files to setFile')
    setFile(event.target.files[0])
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(name!=''||age!=''||description!=''||url!=''){
    try {
      await fetch('http://localhost:3000/pets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, age, description, url }),
      });
      refreshPetData();
      setName('');
      setAge('');
      setDescription('');
      setUrl('');
    } catch (error) {
      console.log('Error:', error);
    }}
    if(!(file==undefined)){
    console.log('Reached axios')
    const config = {headers:{'content-type':'multipart/form-data',},};
    const url = 'http://localhost:3000/client/public/images';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name)
    console.log(formData)
    const data = await axios.post(url, formData, config).then((response)=>console.log(response))}
    
  };

  return (
    <div className="input-form">
      <form onSubmit={handleSubmit}>
        <label className="label name">
          Enter your pet's name:
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="label age">
          Enter your pet's age:
          <input
            type="text"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <label className="label desc">
          Briefly describe your pet:
          <textarea
            type="text"
            placeholder="Description"
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label className="label url">
          Link to a photo of your pet (URL):
          <input
            type="text"
            placeholder="Photo URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>
        <label className='label file upload'>
          Upload a photo of your pet! 
          <input
            type="file"
            onChange={handleChange}
          />
        </label>
        <button className="submitBtn" type="submit">
          Submit Pet
        </button>
      </form>
    </div>
  );
}

export default InputForm;
