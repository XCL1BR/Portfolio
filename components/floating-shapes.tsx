"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function FloatingShapes() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const shapesRef = useRef<THREE.Mesh[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const currentContainer = containerRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    currentContainer.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create shapes
    const shapes: THREE.Mesh[] = [];
    const materials = [
      new THREE.MeshBasicMaterial({ color: 0x666666, wireframe: true }),
      new THREE.MeshBasicMaterial({ color: 0x888888, wireframe: true }),
    ];

    // Create multiple geometric shapes
    for (let i = 0; i < 15; i++) {
      let geometry;
      const random = Math.random();

      if (random < 0.33) {
        geometry = new THREE.BoxGeometry(1, 1, 1);
      } else if (random < 0.66) {
        geometry = new THREE.TetrahedronGeometry(0.8);
      } else {
        geometry = new THREE.OctahedronGeometry(0.7);
      }

      const shape = new THREE.Mesh(
        geometry,
        materials[Math.floor(Math.random() * materials.length)]
      );

      // Random position
      shape.position.x = (Math.random() - 0.5) * 10;
      shape.position.y = (Math.random() - 0.5) * 10;
      shape.position.z = (Math.random() - 0.5) * 5;

      // Random rotation
      shape.rotation.x = Math.random() * Math.PI;
      shape.rotation.y = Math.random() * Math.PI;

      shapes.push(shape);
      scene.add(shape);
    }
    shapesRef.current = shapes;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      shapes.forEach((shape) => {
        shape.rotation.x += 0.002;
        shape.rotation.y += 0.003;

        // Subtle floating movement
        shape.position.y += Math.sin(Date.now() * 0.001) * 0.001;
        shape.position.x += Math.cos(Date.now() * 0.001) * 0.001;
      });

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;

      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Mouse movement effect
    const handleMouseMove = (event: MouseEvent) => {
      if (!cameraRef.current) return;

      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      shapes.forEach((shape) => {
        shape.rotation.x += mouseY * 0.001;
        shape.rotation.y += mouseX * 0.001;
      });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      currentContainer.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 -z-10" />;
}
