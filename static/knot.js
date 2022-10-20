const scene = new THREE.Scene();
const blankScene = new THREE.Scene();
blankScene.background = new THREE.Color(0xFFFFFF);
// scene.background = new THREE.Color(0xFFFFFF);

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    10000
);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 25;

const renderer = new THREE.WebGLRenderer({ antialias: true,  alpha: true});
// renderer = new THREE.CanvasRenderer();
var container = document.getElementById('canvas');

renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize(w, h);
renderer.setSize(window.innerWidth * 0.3, 1.5 * window.innerHeight * 0.3);
container.appendChild(renderer.domElement);

const lights = [];
lights[0] = new THREE.PointLight(0xffffff, 1, 0);
lights[1] = new THREE.PointLight(0xffffff, 1, 0);
lights[2] = new THREE.PointLight(0xffffff, 1, 0);

lights[0].position.set(0, 200, 0);
lights[1].position.set(100, 200, 100);
lights[2].position.set(-100, -200, -100);

scene.add(lights[0]);
scene.add(lights[1]);
scene.add(lights[2]);

const group = new THREE.Group();

var horSides = Math.floor(Math.random() * 5) * 3 +2;
var verSides = Math.floor(Math.random() * 7 + 1) * 100;
var p = 2 + Math.floor(Math.random() * 1.5);
var q = Math.floor(Math.random() * 4) * p + 1;

const geometry = new THREE.TorusKnotGeometry(9, 10/(p+q), verSides, horSides, p, q);
const lineMaterial = new THREE.LineBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.5
});
const meshMaterial = new THREE.MeshPhongMaterial({
    color: 0x6b6b6b,
    emissive: 0x072534,
    side: THREE.DoubleSide,
    flatShading: true
});

group.add(new THREE.LineSegments(geometry, lineMaterial));
group.add(new THREE.Mesh(geometry, meshMaterial));

scene.add(group);

const render = function() {

    requestAnimationFrame(render);

    group.rotation.x += 0.000 / 1.3;
    group.rotation.y -= 0.003 / 1.3;
    group.rotation.z -= 0.009 / 1.3;

    // const renderer = new THREE.WebGLRenderer({ antialias: true,  alpha: true});
    // // renderer = new THREE.CanvasRenderer();

    if (window.outerWidth > 1000){
    renderer.render(scene, camera);
    }
    else{
        renderer.render(blankScene, camera);
    }

};

render();

window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth * 0.3, 1.5 * window.innerHeight * 0.3);

}
