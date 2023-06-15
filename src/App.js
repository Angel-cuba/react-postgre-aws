import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import { DataStore, Amplify } from 'aws-amplify';
import { Images } from '../src/models';
import aws from './aws-exports';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import appFirebase from './credential';
import './App.css';

function App() {
  Amplify.configure(aws);
  const [images, setImages] = useState([]);
  const [name, setName] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const storage = getStorage(appFirebase);
  const fileInputRef = useRef();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);
    const refFile = ref(storage, `images/${file.name}`);
    await uploadBytes(refFile, file);
    const imgUrl = await getDownloadURL(refFile);
    if (imgUrl) {
      handleSubmit(imgUrl);
    }
    setFile(null);
    setName('');
    setTimeout(() => {
      reload();
    }, 2000);
    setLoading(false);
  };

  useEffect(() => {
    DataStore.query(Images).then(setImages);
  }, []);

  const ImageView = ({ image }) => (
    <div className="image">
      <h3>{image.name}</h3>
      <img
        src={image.url}
        alt={image.name}
        style={{
          width: '140px',
          height: '140px',
          objectFit: 'contain',
        }}
      />
    </div>
  );
  const handleSubmit = (url) => {
    DataStore.save(
      new Images({
        name,
        url,
      })
    );
    setName('');
    setFile('');
    fileInputRef.current.value = null;
  };

  const reload = () => DataStore.query(Images).then(setImages);

  return (
    <div className="App">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h2>Upload your images</h2>
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          style={{ width: '130px', height: '130px' }}
        />
      </div>
      <div className="form">
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          className="input"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="file"
          name="file"
          id=""
          ref={fileInputRef}
          className="input"
          onChange={handleFileChange}
        />
        <button className="btn" onClick={handleUpload}>
          {loading ? 'Uploading...' : 'Submit'}
        </button>
      </div>
      <div className="images">
        {!images.length
          ? 'Nothing to show'
          : images.map((image) => <ImageView key={image.id} image={image} />)}
      </div>
    </div>
  );
}

export default App;
