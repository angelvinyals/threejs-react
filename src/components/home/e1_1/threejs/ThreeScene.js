import React, { Component } from 'react';
import * as THREE from 'three';

class ThreeScene extends Component{

  constructor(props) {
    super(props);

    this.canvasRef = null;

    this.setcanvasRef = element => {
      this.canvasRef = element;
    };

    this.step = 0
  }

  componentDidMount() {

    this.canvasRef.style.width = '100%'
    this.canvasRef.style.height = '100%'

    const width = this.canvasRef.offsetWidth
    const height = this.canvasRef.offsetHeight

    //ADD SCENE
    this.scene = new THREE.Scene()

    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(
      45,
      width / height,
      0.1,
      1000
    )
    // position and point the camera to the center of the scene
    this.camera.position.set(-30, 40, 30);
    this.camera.lookAt(this.scene.position);

    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setClearColor('#000')
    this.renderer.setSize(width, height)
    this.renderer.shadowMap.Enabled = true;

    // add the output of the renderer to the html element
    this.canvasRef.appendChild(this.renderer.domElement)

    //ADD AXES
    this.axes = new THREE.AxesHelper(20);
    this.scene.add(this.axes)

    //ADD PLANE
    const planeGeometry = new THREE.PlaneGeometry(60, 20);
    const planeMaterial = new THREE.MeshLambertMaterial({ 
      color: 0xffffff,
    })
    this.plane = new THREE.Mesh(planeGeometry, planeMaterial)
    this.plane.rotation.x = -0.5 * Math.PI;
    this.plane.position.set(15, 0, 0);
    this.plane.castShadow = true
    this.plane.receiveShadow = true
    this.scene.add(this.plane)

    //ADD CUBE
    const cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
    const cubeMaterial = new THREE.MeshLambertMaterial({ 
      color: '#FF0000',
      wireframe: false
    })
    this.cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
    this.cube.position.set(-4, 3, 0);
    this.cube.castShadow = true
    this.cube.receiveShadow = true
    this.scene.add(this.cube)

    //ADD A SPHERE
    const sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
    const sphereMaterial = new THREE.MeshLambertMaterial({ 
      color: '#7777FF',
      wireframe: false
    })
    this.sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
    this.sphere.position.set(2, 4, 2);
    this.sphere.castShadow = true
    this.sphere.receiveShadow = true
    this.scene.add(this.sphere)

    //ADD SPOTLIGHT
    this.spotLight = new THREE.SpotLight(0xFFFFFF)
    this.spotLight.position.set(-40 , 40, -15)
    this.spotLight.castShadow = true
    this.spotLight.shadow.mapSize = new THREE.Vector2(1024, 1024)
    this.spotLight.shadow.camera.far = 130
    this.spotLight.shadow.camera.near = 40
    // If you want a more detailled shadow you can increase the 
    //mapSize used to draw the shadows.
    // spotLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
    this.scene.add(this.spotLight);
    
    //ADD AMBIENTLIGHT
    this.ambienLight = new THREE.AmbientLight(0x353535);
    this.scene.add(this.ambienLight);
    
    //start ANIMATION
    this.start()   

  }

  componentWillUnmount(){
    this.stop()
    this.canvasRef.removeChild(this.renderer.domElement)
  }

  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }

  stop = () => {
    cancelAnimationFrame(this.frameId)
  }

  animate = () => {
    this.cube.rotation.x += 0.02;
    this.cube.rotation.y += 0.02;
    this.cube.rotation.z += 0.02;
    
    this.step += 0.04
    this.sphere.position.x = 20 + 10*(Math.cos(this.step))
    this.sphere.position.y = 2 + 10*Math.abs(Math.sin(this.step))

    this.renderScene()
    this.frameId = window.requestAnimationFrame(this.animate)
  }

  renderScene = () => {
    this.renderer.render(this.scene, this.camera)
  }

  render(){
    return(
      <div ref={this.setcanvasRef}/>
    )
  }
}
export default ThreeScene