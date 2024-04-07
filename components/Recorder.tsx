'use client';

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import activeAssistantIcon from '../public/active.gif'
import notActiveAssistantIcon from '../public/notactive.png'



function Recorder({ uploadAudio } : { uploadAudio: (blob: Blob) => void}) {

    const [permission, setPermission] = useState(false);
    const [stream, setStream] = useState<MediaStream | null>(null);

    useEffect(() => {
        getMicrophonePermission();
    }, [])

    const getMicrophonePermission = async () => {
        if ("MediaRecorder" in window) {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ 
                    audio: true, 
                    video: false
                });

                setPermission(true);
                setStream(stream);

            } catch (err: any) {
                console.error(err.message);
            }
        } else {
            alert('MediaRecorder not supported');
        }
    }

  return (
    <div
        className='flex items-center justify-center text-white'
    >
        {
            !permission ? (
                <button onClick={getMicrophonePermission}>Get Permission</button>
            ) :
            <Image 
                src={activeAssistantIcon}
                alt='assistant icon'
                width={350}
                height={350}
                priority
            />
        }

    </div>
  )
}

export default Recorder