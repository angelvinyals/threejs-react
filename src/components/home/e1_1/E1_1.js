import React, {Component} from 'react';

//import threeEntryPoint from "./threejs/threeEntryPoint"
//import CanvasThree from "./threejs/CanvasThree"
import ThreeScene from "./threejs/ThreeScene"

import "../../_common/common.css"
import "./e1_1.css"

class E1_1 extends Component {
  render() {
    return (
      <div className="home-section container-e">  
        <div className="container-e"><h1>Exercise 1</h1></div>
        <div className="e-canvas">
          <ThreeScene/>
        </div>
      </div>
    );
  }
}

export default E1_1;