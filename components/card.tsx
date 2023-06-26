"use client"

import { useStore } from "@/lib/zustand";
import { CardProps } from "@/types/card";
import { Track } from "@/types/spotify";
import { PanInfo, motion, useMotionValue, useTransform } from "framer-motion";
import { Music } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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

    const audioRef = useRef<HTMLAudioElement | null>(null);
    const isPlayingRef = useRef<boolean>(false);
    const setCurrentTrack = useStore((state) => state.setCurrentTrack);

    const onDragEnd = (_e: any, info: PanInfo) => {
        if (info.offset.x > 200) {
            setLeaveX(1000);
            remove(track, "yay");
        } else if (info.offset.x < -200) {
            setLeaveX(-1000);
            remove(track, "nay");
        }
    };

    useEffect(() => {
        if (audioRef.current) {
            console.log("playing audio ", track)
            if (active) {
                playAudio();
            } else {
                pauseAudio();
            }
        }
    }, [active]);

    const playAudio = () => {
        if (audioRef.current && !isPlayingRef.current) {
            audioRef.current.currentTime = 0;
            const playPromise = audioRef.current.play();
            if (playPromise) {
                playPromise
                    .then(() => {
                        isPlayingRef.current = true;
                        setCurrentTrack(track);
                    })
                    .catch((error) => {
                        console.error("Failed to play audio:", error);
                    });
            }
        }
    };

    const pauseAudio = () => {
        if (audioRef.current && isPlayingRef.current) {
            audioRef.current.pause();
            isPlayingRef.current = false;
            setCurrentTrack(null);
        }
    };

    const handlePlayButtonClick = () => {
        playAudio();
    };

    return (
        <>
            {active ? (
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
                    {track.album.images.length > 0 ? (
                        <Image
                            src={track.album.images[0].url}
                            alt={track.name}
                            height={160}
                            width={160}
                            className="object-cover w-full rounded-md aspect-square pointer-events-none"
                        />
                    ) : (
                        <div className="w-full h-40">
                            <Music className="w-full h-full bg-paper " />
                        </div>
                    )}

                    <h3 className="mt-5 font-bold truncate">{track.name}</h3>
                    <h6 className="mt-1 text-xs font-semibold truncate text-gray">
                        {track.artists[0].name}
                    </h6>

                    <audio ref={audioRef}>
                        <source src={track.preview_url} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                </motion.div>
            ) : (
                <div className="absolute h-[430px] w-[300px] bg-white shadow-xl rounded-2xl flex flex-col justify-center items-center cursor-grab bg-gradient-to-r from-purple-600 to-indigo-900">
                    {track.album.images.length > 0 ? (
                        <Image
                            src={track.album.images[0].url}
                            alt={track.name}
                            height={160}
                            width={160}
                            className="object-cover w-full rounded-md aspect-square pointer-events-none"
                        />
                    ) : (
                        <div className="w-full h-40">
                            <Music className="w-full h-full bg-paper " />
                        </div>
                    )}

                    <h3 className="mt-5 font-bold truncate">{track.name}</h3>
                    <h6 className="mt-1 text-xs font-semibold truncate text-gray">
                        {track.artists[0].name}
                    </h6>
                </div>
            )}
        </>
    );
};

export default Card;