import { MeshReflectorMaterial } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { BufferAttribute } from "three";
import { TextureLoader } from "three/src/loaders/TextureLoader";

export function Ground() {
    const gridMap = useLoader(
        TextureLoader,
        process.env.PUBLIC_URL + "/textures/grid.png"
    )
    const aoMap = useLoader(
        TextureLoader,
        process.env.PUBLIC_URL + "/textures/ground-ao.png"
    )
    const alphaMap = useLoader(
        TextureLoader,
        process.env.PUBLIC_URL + "/textures/alpha-map.png"
    )

    useEffect(()=>{
        gridMap.anisotropy = 16;
    }, [gridMap])

    return(
        <></>
    );
}