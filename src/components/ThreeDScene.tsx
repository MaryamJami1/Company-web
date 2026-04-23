"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";

function FloatingShape({ position, color, speed, distort, radius, factor }: { position: [number, number, number], color: string, speed: number, distort: number, radius: number, factor?: number }) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01 * speed;
      mesh.current.rotation.y += 0.01 * speed;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={2} floatIntensity={2}>
      <mesh position={position} ref={mesh}>
        <Sphere args={[radius, 64, 64]}>
          <MeshDistortMaterial
            color={color}
            speed={speed * 2}
            distort={distort}
            radius={radius}
            metalness={0.8}
            roughness={0.2}
          />
        </Sphere>
      </mesh>
    </Float>
  );
}

function WobbleShape({ position, color, speed, factor, radius }: { position: [number, number, number], color: string, speed: number, factor: number, radius: number }) {
  return (
    <Float speed={speed} rotationIntensity={1} floatIntensity={1}>
      <mesh position={position}>
        <Sphere args={[radius, 64, 64]}>
          <MeshWobbleMaterial
            color={color}
            speed={speed}
            factor={factor}
          />
        </Sphere>
      </mesh>
    </Float>
  );
}

function Rig() {
  return useFrame((state) => {
    state.camera.position.lerp(new THREE.Vector3(state.mouse.x * 3, state.mouse.y * 3, 12), 0.05);
    state.camera.lookAt(0, 0, 0);
  });
}

export default function ThreeDScene() {
  const shapes = useMemo(() => [
    { position: [-5, 3, -4] as [number, number, number], color: "#00D2FF", speed: 1, distort: 0.4, radius: 1.8 },
    { position: [6, -3, -5] as [number, number, number], color: "#00cba9", speed: 1.5, distort: 0.5, radius: 1.4 },
    { position: [-3, -4, -2] as [number, number, number], color: "#8B0000", speed: 0.8, distort: 0.3, radius: 1 },
    { position: [4, 4, -6] as [number, number, number], color: "#00D2FF", speed: 1.2, distort: 0.6, radius: 1.2 },
    { position: [0, 0, -8] as [number, number, number], color: "#ffffff", speed: 0.5, distort: 0.2, radius: 3 },
  ], []);

  const wobbles = useMemo(() => [
    { position: [-8, 0, -5] as [number, number, number], color: "#00D2FF", speed: 2, factor: 0.6, radius: 0.5 },
    { position: [8, 2, -4] as [number, number, number], color: "#00cba9", speed: 2.5, factor: 0.8, radius: 0.4 },
  ], []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <spotLight position={[20, 20, 20]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-20, -20, -20]} intensity={0.5} />
        <directionalLight position={[0, 5, 5]} intensity={0.5} />
        
        {shapes.map((shape, i) => (
          <FloatingShape key={`shape-${i}`} {...shape} />
        ))}

        {wobbles.map((wobble, i) => (
          <WobbleShape key={`wobble-${i}`} {...wobble} />
        ))}
        
        <Rig />
      </Canvas>
    </div>
  );
}
