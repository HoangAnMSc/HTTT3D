const scene = new THREE.Scene();
scene.background = new THREE.Color( 0xffffffff );
const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 1000 );
const axesHelper = new THREE.AxesHelper(20,20 );
axesHelper.setColors(0x00f00);
const axesHelper2 = new THREE.AxesHelper(-100 );
axesHelper2.setColors(0x00f00);
scene.add( axesHelper );
scene.add( axesHelper2 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth/1.2, window.innerHeight/1.5 );
document.getElementById("GiaoDien").appendChild( renderer.domElement );
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00f00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 4;
function animate() {
	requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();
