/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/robo/scene.gltf
Author: TooManyDemons (https://sketchfab.com/toomanydemons)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/reap-the-whirlwind-297e1595d6cf4466bf5c7803db8c5bd8
Title: Reap the Whirlwind
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useCharacterAnimations } from '../contexts/CharacterAnimations'

const Robo = (props) => {

  const { setAnimations } = useCharacterAnimations()
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./robo/scene.gltf')
  const { actions, names } = useAnimations(animations, group)
  console.log("nameanimation", names)
  useEffect(()=>{
    setAnimations(names)
  },[names])
  useEffect(() => {
    actions[names[0]].reset().fadeIn(0.5).play()
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="94be3bf61e4544d09a63e1228bfee2b5fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="SonyRobot" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                <group name="Armature" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="Object_6">
                    <primitive object={nodes._rootJoint} />
                    <group name="Object_8" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <skinnedMesh castShadow name="Object_9" geometry={nodes.Object_9.geometry} material={materials.M_Robot_Tail} skeleton={nodes.Object_9.skeleton} />
                    <skinnedMesh castShadow name="Object_10" geometry={nodes.Object_10.geometry} material={materials.M_Robot_Head} skeleton={nodes.Object_10.skeleton} />
                    <skinnedMesh castShadow name="Object_11" geometry={nodes.Object_11.geometry} material={materials.M_Robot_Cage} skeleton={nodes.Object_11.skeleton} />
                    <skinnedMesh castShadow name="Object_12" geometry={nodes.Object_12.geometry} material={materials.M_Robot_Legs} skeleton={nodes.Object_12.skeleton} />
                    <skinnedMesh castShadow name="Object_13" geometry={nodes.Object_13.geometry} material={materials.M_Robot_Foot} skeleton={nodes.Object_13.skeleton} />
                    <skinnedMesh castShadow name="Object_14" geometry={nodes.Object_14.geometry} material={materials.M_Robot_Wings_1} skeleton={nodes.Object_14.skeleton} />
                    <skinnedMesh castShadow name="Object_15" geometry={nodes.Object_15.geometry} material={materials.M_Robot_Wings_2} skeleton={nodes.Object_15.skeleton} />
                    <skinnedMesh castShadow name="Object_16" geometry={nodes.Object_16.geometry} material={materials.M_Robot_Arms} skeleton={nodes.Object_16.skeleton} />
                    <skinnedMesh castShadow name="Object_17" geometry={nodes.Object_17.geometry} material={materials.M_Robot_Gloves} skeleton={nodes.Object_17.skeleton} />
                    <skinnedMesh castShadow name="Object_18" geometry={nodes.Object_18.geometry} material={materials.Hologram} skeleton={nodes.Object_18.skeleton} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}
export default Robo;
useGLTF.preload('./robo/scene.gltf')
