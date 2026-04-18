import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial, Environment } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Group, Mesh } from "three";

function Pellet({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.4;
    ref.current.rotation.y = state.clock.elapsedTime * 0.3;
  });
  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={1.8}>
      <mesh ref={ref} position={position} scale={scale} castShadow>
        <dodecahedronGeometry args={[0.6, 0]} />
        <meshStandardMaterial color={color} roughness={0.45} metalness={0.15} />
      </mesh>
    </Float>
  );
}

function Scene() {
  const group = useRef<Group>(null);
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.08;
    }
  });

  return (
    <group ref={group}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.4} castShadow />
      <pointLight position={[-5, 3, -5]} intensity={1} color="#8be46f" />
      <pointLight position={[5, -3, 3]} intensity={0.6} color="#d6a85c" />

      <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
        <Sphere args={[1.8, 64, 64]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#3d8b3d"
            attach="material"
            distort={0.45}
            speed={1.6}
            roughness={0.3}
            metalness={0.2}
          />
        </Sphere>
      </Float>

      <Pellet position={[2.6, 1.4, 0.5]} color="#6b4423" />
      <Pellet position={[-2.8, -1.2, 0.8]} color="#8b5a2b" scale={0.85} />
      <Pellet position={[2.2, -1.6, -0.5]} color="#5a3a1f" scale={0.7} />
      <Pellet position={[-2.4, 1.6, -0.8]} color="#7a4d2a" scale={0.9} />
      <Pellet position={[0, 2.4, 1.2]} color="#a87545" scale={0.6} />
      <Pellet position={[3.2, 0, -1]} color="#8be46f" scale={0.55} />
      <Pellet position={[-3.2, 0.4, 0.6]} color="#a8d97a" scale={0.5} />

      <Environment preset="sunset" />
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
