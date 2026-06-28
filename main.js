// ============================
// Zombie Escape 3D
// main.js
// ============================

import * as THREE from "https://unpkg.com/three@0.160.0/build/three.module.js";

const canvas = document.getElementById("gameCanvas");

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x050505);
scene.fog = new THREE.Fog(0x050505, 18, 60);

// Camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.set(0, 1.8, 0);

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;

// =======================
// LIGHT
// =======================

// Cahaya redup
const ambient = new THREE.AmbientLight(0xffffff,0.45);
scene.add(ambient);

// Lampu utama
const light = new THREE.DirectionalLight(0xffffff,1);
light.position.set(5,12,5);

light.castShadow = true;

scene.add(light);

// =======================
// FLOOR
// =======================

const floor = new THREE.Mesh(

    new THREE.PlaneGeometry(120,120),

    new THREE.MeshStandardMaterial({

        color:0x112244

    })

);

floor.rotation.x = -Math.PI/2;

floor.receiveShadow = true;

scene.add(floor);

// =======================
// TEST CUBE
// (akan dihapus nanti)
// =======================

const cube = new THREE.Mesh(

    new THREE.BoxGeometry(2,2,2),

    new THREE.MeshStandardMaterial({

        color:0xaa0000

    })

);

cube.position.set(0,1,-8);

cube.castShadow=true;

scene.add(cube);

// =======================
// Resize
// =======================

window.addEventListener("resize",()=>{

camera.aspect=window.innerWidth/window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(

window.innerWidth,

window.innerHeight

);

});

// =======================
// Loading selesai
// =======================

document.getElementById("loading").style.display="none";

// =======================
// Loop
// =======================

function animate(){

requestAnimationFrame(animate);

cube.rotation.y+=0.01;

renderer.render(scene,camera);

}

animate();
