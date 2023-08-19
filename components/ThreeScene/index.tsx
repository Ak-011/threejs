import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeScene: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // First create the scene
            const scene = new THREE.Scene();
            scene.background = new THREE.Color('red');

            // Create the Camera and set is position and functionality
            const fov = 35; // field of view
            const aspectRatio = window.innerWidth / window.innerHeight;
            const near = 0.1; // will clip all the scene near by this distance
            // will clip all the scene far by this distance
            const far = 100;

            const camera = new THREE.PerspectiveCamera(fov, aspectRatio, near, far);
            camera.position.set(0, 0, 10);

            // create the mesh using geometry and material
            const geometry = new THREE.SphereGeometry();
            const material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
            const cube = new THREE.Mesh(geometry, material);

            // add this cube to the scene so that cube will be rendered
            scene.add(cube);

            // now create the renderer and render the element on the screen
            const renderer = new THREE.WebGLRenderer();

            renderer.render(scene, camera);
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(window.devicePixelRatio);

            containerRef.current?.appendChild(renderer.domElement);

            const renderScene = () => {
                renderer.render(scene, camera);
            };

            renderScene();
        }
    }, []);
    return <div ref={containerRef} />;
};
export default ThreeScene;
