import './App.css';
import { useState } from 'react';

const Image = ({ children }) => {
  return <div>{children("imageWrapper")}</div>;
 };
 
 const App = () => {
  const [imageSrc, setImageSrc] = useState("someImgSrc");
 
  return (
    <Image>
      {(className) => (
        <div className={className}>
          <img src={imageSrc} />
        </div>
      )}
    </Image>
  );
 };
 







/*const Image = ({ render }) => {
  return <div>{render("imageWrapper")}</div>;
};


const App = () => {
  const [imageSrc, setImageSrc] = useState("someImgSrc");
 
  return (
    <Image
      render={(className) => (
        <div className={className}>
          <img src={imageSrc} />
        </div>
      )}
    />
  );
 };
 */

export default App;
