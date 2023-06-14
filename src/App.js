import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { DataStore, Amplify } from 'aws-amplify';
import { Images } from '../src/models';
import aws from './aws-exports';
import './App.css';

function App() {
  Amplify.configure(aws)
  const [images, setImages] = useState([]);

  useEffect(() => {
    DataStore.query(Images).then(setImages);
  }, []);


  const ImageView = ({ image }) => (
    <div className="image">
      <h3>{image.name}</h3>
      <img src={image.url} alt="" style={{
        width: '150px',
        height: '150px',
        objectFit: 'cover',

      }}/>
    </div>
  );


  return (
    <div className="App">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h2>Uploading images</h2>
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          style={{ width: '130px', height: '130px' }}
        />
      </div>
      <input type="file" name="" id="" />
        <h1>All images downloaded from db</h1>
      <div className="images">
        {!images.length ? 'Nothing to show' : images.map((image) => (
          <ImageView key={image.id} image={image} />
        )) }
      </div>
    </div>
  );
}

export default App;
