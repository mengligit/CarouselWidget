import { useState, useEffect } from 'react';

import '../App.css';

import { imageData } from '../imageData';
import LeftArrow from './LeftArrow';
import RightArrow from './rightArrow';
import Center from './Center';
import Dot from './Dot';

import {getImages } from '../imageAPI';


function Container() {
  //const imageArr = imageData;
  const [index, setIndex] = useState(0);
  const [imageArr, setImageArr] = useState([]);
  const [id, setId] = useState(null);
  
  let autoplay = false;

  useEffect(() => {
    console.log("useEffect !");
    const retrive = async () => {
      const images = await getImages();
      await setImageArr(images);
      autoplay = true;

    }

    retrive();
  }, [])

  useEffect(() => {
    //if (!autoplay) return;
    if (id) {
      console.log("clearTimeout");
      clearTimeout(id);
      setId(null);
    }
    const tid = setTimeout(() => {
      console.log("setTimeout");
      moveRight();
    }, 2000);
    setId(tid);
  }, [index, imageArr])

  const moveRight =  () => {
     setIndex(old => {
      if (old + 1 < imageArr.length) return old + 1;
      else return 0;
     })
  };

  const moveLeft = () => {
    if (index - 1 >= 0) {
      setIndex(old => old -1);
    } else {
      setIndex(imageArr.length - 1);
    }
  };

  const jump = (index) => {
    setIndex(index);
  }

  return (
    <div className='parent'>
      <div className="Container">
        <LeftArrow moveLeft = {moveLeft}/>
        <Center imageSrc = {imageArr.length > 0 ? imageArr[index].path : ''}/>
        <RightArrow moveRight = {moveRight}/>
      </div>
      <div className='secondCon'>
        {
          imageArr.map((item, count) => {
            return <Dot key={count} index={count} jump={jump} select = {index === count}></Dot>
          })
        }
      </div>
    </div>
  );
}

export default Container;
