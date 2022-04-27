/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    mesh_id48_instance_0: THREE.Mesh;
    mesh_id48_instance_1: THREE.Mesh;
    mesh_id48_instance_2: THREE.Mesh;
    mesh_id48_instance_3: THREE.Mesh;
    mesh_id48_instance_4: THREE.Mesh;
    mesh_id48_instance_5: THREE.Mesh;
    mesh_id48_instance_6: THREE.Mesh;
    mesh_id48_instance_7: THREE.Mesh;
    mesh_id48_instance_8: THREE.Mesh;
    mesh_id48_instance_9: THREE.Mesh;
    mesh_id48_instance_10: THREE.Mesh;
    mesh_id48_instance_11: THREE.Mesh;
    mesh_id43: THREE.Mesh;
    mesh_id140: THREE.Mesh;
  };
  materials: {
    ["127"]: THREE.MeshStandardMaterial;
    ["135"]: THREE.MeshStandardMaterial;
    ["153"]: THREE.MeshStandardMaterial;
  };
};

export default function Model({ ...props }: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(
    "/turbine-transformed.glb"
  ) as unknown as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.mesh_id48_instance_0.geometry}
        material={materials["127"]}
        position={[0.01, 0.15, 0.21]}
        rotation={[-Math.PI, 0.42, -Math.PI / 2]}
        scale={0}
      />
      <mesh
        geometry={nodes.mesh_id48_instance_1.geometry}
        material={materials["127"]}
        position={[0.01, 0.15, 0.21]}
        rotation={[Math.PI, 0.42, -Math.PI / 2]}
        scale={0}
      />
      <mesh
        geometry={nodes.mesh_id48_instance_2.geometry}
        material={materials["127"]}
        position={[-0.02, -0.14, 0.21]}
        rotation={[-Math.PI, -0.42, Math.PI / 2]}
        scale={0}
      />
      <mesh
        geometry={nodes.mesh_id48_instance_3.geometry}
        material={materials["127"]}
        position={[-0.14, 0.02, 0.21]}
        rotation={[-2.72, 0, Math.PI]}
        scale={0}
      />
      <mesh
        geometry={nodes.mesh_id48_instance_4.geometry}
        material={materials["127"]}
        position={[-0.02, -0.14, 0.21]}
        rotation={[-Math.PI, -0.42, Math.PI / 2]}
        scale={0}
      />
      <mesh
        geometry={nodes.mesh_id48_instance_5.geometry}
        material={materials["127"]}
        position={[-0.11, -0.09, 0.21]}
        rotation={[-2.84, -0.3, 2.4]}
        scale={0}
      />
      <mesh
        geometry={nodes.mesh_id48_instance_6.geometry}
        material={materials["127"]}
        position={[-0.14, 0.02, 0.21]}
        rotation={[-2.72, 0, Math.PI]}
        scale={0}
      />
      <mesh
        geometry={nodes.mesh_id48_instance_7.geometry}
        material={materials["127"]}
        position={[-0.1, 0.12, 0.21]}
        rotation={[-2.83, 0.29, -2.41]}
        scale={0}
      />
      <mesh
        geometry={nodes.mesh_id48_instance_8.geometry}
        material={materials["127"]}
        position={[0.01, 0.15, 0.21]}
        rotation={[Math.PI, 0.42, -Math.PI / 2]}
        scale={0}
      />
      <mesh
        geometry={nodes.mesh_id48_instance_9.geometry}
        material={materials["127"]}
        position={[0.1, 0.1, 0.21]}
        rotation={[2.84, 0.3, -0.74]}
        scale={0}
      />
      <mesh
        geometry={nodes.mesh_id48_instance_10.geometry}
        material={materials["127"]}
        position={[0.13, 0, 0.21]}
        rotation={[2.72, 0, 0]}
        scale={0}
      />
      <mesh
        geometry={nodes.mesh_id48_instance_11.geometry}
        material={materials["127"]}
        position={[0.09, -0.1, 0.21]}
        rotation={[2.83, -0.29, 0.73]}
        scale={0}
      />
      <mesh
        geometry={nodes.mesh_id43.geometry}
        material={materials["135"]}
        position={[0, 0.01, 0.2]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0}
      />
      <mesh
        geometry={nodes.mesh_id140.geometry}
        material={materials["153"]}
        position={[-0.01, 0, 0.2]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0}
      />
    </group>
  );
}

useGLTF.preload("/turbine-transformed.glb");
