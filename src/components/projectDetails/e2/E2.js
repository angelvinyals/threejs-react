import React, {Component} from 'react';

//import threeEntryPoint from "./threejs/threeEntryPoint"
//import CanvasThree from "./threejs/CanvasThree"
import ThreeScene from "./threejs/ThreeScene"

import "../../_common/common.css"
import "./e2.css"

class E2 extends Component {
  render() {
    return (
      <div className="home-section container-e">  
        <div className="container-e">
            <h1>Chapter 2</h1>
            <h4>R</h4>
            <h4>A</h4>
            <h4>E</h4>
            

        </div>
        <div className="e-canvas">
          <ThreeScene/>
        </div>
      </div>
    );
  }
}

export default E2;