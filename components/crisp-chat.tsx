"use client"

import {useEffect} from "react";
import {Crisp} from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("31451730-4789-4a7d-ab9a-e29382c3d6e0")
    }, [])

    return null
}