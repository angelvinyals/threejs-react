import React, {Component} from 'react';

//import threeEntryPoint from "./threejs/threeEntryPoint"
//import CanvasThree from "./threejs/CanvasThree"
import ThreeScene from "./threejs/ThreeScene"

import "../../_common/common.css"
import "./e1.css"

class E1 extends Component {
  render() {
    return (
      <div className="home-section container-e">  
        <div className="container-e">
            <h1>Chapter 1</h1>
            <h4>Rendering and viewing a 3D object</h4>
            <h4>Adding materials, lights, and shadows</h4>
            <h4>Expanding your first scene with animations</h4>
            

        </div>
        <div className="e-canvas">
          <ThreeScene/>
        </div>
      </div>
    );
  }
}

export default E1;