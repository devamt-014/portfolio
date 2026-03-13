import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = () => {
  const ref = useRef();

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      const r = 1.5 + Math.random() * 0.5;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta * 0.05;
    ref.current.rotation.y -= delta * 0.08;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00f5ff"
          size={0.004}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
};

const NeuralNodes = () => {
  const meshRef = useRef();
  const count = 80;

  const { positions, connections } = useMemo(() => {
    const pos = [];
    for (let i = 0; i < count; i++) {
      pos.push([
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 4,
      ]);
    }

    const geom = new THREE.BufferGeometry();
    const verts = [];
    for (let i = 0; i < pos.length; i++) {
      for (let j = i + 1; j < pos.length; j++) {
        const dist = Math.sqrt(
          Math.pow(pos[i][0] - pos[j][0], 2) +
          Math.pow(pos[i][1] - pos[j][1], 2) +
          Math.pow(pos[i][2] - pos[j][2], 2)
        );
        if (dist < 2.2) {
          verts.push(...pos[i], ...pos[j]);
        }
      }
    }
    geom.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));

    return { positions: pos, connections: geom };
  }, []);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.05;
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.02) * 0.1;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Connection lines */}
      <lineSegments geometry={connections}>
        <lineBasicMaterial color="#8b5cf6" transparent opacity={0.12} />
      </lineSegments>

      {/* Nodes */}
      {positions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshBasicMaterial color={i % 3 === 0 ? '#00f5ff' : i % 3 === 1 ? '#8b5cf6' : '#f72585'} />
        </mesh>
      ))}
    </group>
  );
};

const BrainCanvas = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 60 }}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.5} />
      <ParticleField />
      <NeuralNodes />
    </Canvas>
  );
};

export default BrainCanvas;
