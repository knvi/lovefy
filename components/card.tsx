"use client"

import { CardProps } from "@/types/card";
import { PanInfo, motion, useMotionValue, useTransform } from "framer-motion";
import { Music } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const Card: React.FC<CardProps> = ({ active, remove, track }) => {
    const x = useMotionValue(0);
    const [leaveX, setLeaveX] = useState(0);
    const xInput = [-200, 0, 200];
    const background = useTransform(x, xInput, [
        "linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)",
        "linear-gradient(180deg, #7700ff 0%, rgb(68, 0, 255) 100%)",
        "linear-gradient(180deg, rgb(230, 255, 0) 0%, rgb(3, 209, 0) 100%)"
    ]);

    const rotate = useTransform(x, xInput, [
        "-20deg",
        "0deg",
        "20deg"
    ], {
        clamp: false
    });

    const onDragEnd = (_e: any, info: PanInfo) => {
        if (info.offset.x > 200) {
            setLeaveX(1000);
            remove(track, "yay");
        } else if (info.offset.x < -200) {
            setLeaveX(-1000);
            remove(track, "nay");
        }
    };

    return (
        <>
            <motion.div
                drag={true}
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                onDragEnd={onDragEnd}
                style={{
                    x,
                    background,
                    rotate,
                }}
                initial={{ scale: 1 }}
                animate={{ scale: 1.05 }}
                exit={{
                    x: leaveX,
                    opacity: 0,
                    scale: 0.5,
                    transition: { duration: 0.2 },
                }}
                className="absolute h-[430px] w-[300px] bg-white shadow-xl rounded-2xl flex flex-col justify-center items-center cursor-grab"
            >
                <h3 className="mt-5 font-bold truncate">{track.name}</h3>
                <h6 className="mt-1 text-xs font-semibold truncate text-gray">
                    {track.artists[0].name}
                </h6>
            </motion.div>
        </>
    );
};

export default Card;