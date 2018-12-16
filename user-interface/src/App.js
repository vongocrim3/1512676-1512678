import React, { Component } from 'react';
import Navbar from './component/navbar'
import UserDetails from './component/user-detailts'
import NewPost from './component/newPost'
import OldPost from './component/postHistory'
import Footer from './component/footer'
import Trends from './component/trends'

import Slideshow from './component/slideshow/slideshow';
import img1 from './images/logo.png';
import img2 from './images/image1.png';
import img3 from './images/image2.png';
import img4 from './images/image3.png';

const collection = [
  { src: img1, caption: "Logo" },
  { src: img2, caption: "1512678-1512676" },
  { src: img3, caption: "1512676" },
  { src: img4, caption: "1512678" },
];

class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>

      <div class="row">
        <div class="col">
          <UserDetails></UserDetails>
          <Trends></Trends>
        </div>
        <div class="col-6">
          <NewPost></NewPost>
          <OldPost></OldPost>
        </div>
        <div class="col" style={{marginTop: 40 + 'px'}}>
          <Slideshow 
            input={collection}  
            ratio={`3:2`}
            mode={`automatic`}
            timeout={`3000`}
          />
          <Footer></Footer>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
