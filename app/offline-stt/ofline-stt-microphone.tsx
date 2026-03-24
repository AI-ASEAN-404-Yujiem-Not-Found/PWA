/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client"

import React, { useState, useRef, useCallback } from 'react';
import { useRouter } from 'next/router'

import { PiMicrophoneFill } from "react-icons/pi";
import { usePostData } from '../connection/connection-hook';
import { SSTBodyRequest, SSTResponse } from '../type/connection-type';

export default function OflineSTTMicrophone() {
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [interimTranscript, setInterimTranscript] = useState('');
    const recognitionRef = useRef<any>(null);
    const router = useRouter()

    const startListening = useCallback(() => {
        const SpeechRecognition =
            (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

        if (!SpeechRecognition) {
            alert('Browser kamu tidak mendukung Speech Recognition. Gunakan Chrome atau Edge.');
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.lang = 'id-ID';
        recognition.continuous = true;
        recognition.interimResults = true;

        recognition.onstart = () => setIsListening(true);

        recognition.onresult = (e: any) => {
            let interim = '';
            let final = transcript;

            for (let i = e.resultIndex; i < e.results.length; i++) {
                const text = e.results[i][0].transcript;

                if (e.results[i].isFinal) {
                    final += text + ' ';
                } else {
                    interim += text;
                }
            }

            setTranscript(final.trim());
            setInterimTranscript(interim);
        };

        recognition.onerror = () => setIsListening(false);
        recognition.onend = () => {
            setIsListening(false);
            setInterimTranscript('');
        };

        recognitionRef.current = recognition;
        recognition.start();
    }, []);

    const stopListening = useCallback(() => {
        recognitionRef.current?.stop();
        setIsListening(false);
    }, []);

    const handleMicClick = () => {
        if (isListening) stopListening();
        else startListening();
    };

    const displayText = transcript || interimTranscript;

    const { exec, data, err, loading } = usePostData<SSTResponse, SSTBodyRequest>()

    const handleNextAndProcess = async (e: React.FormEvent) => {
        await exec("/sst-process", { message: displayText, role: "farmer" });
        e.preventDefault();
        router.push("/welcoming")
    }

    if (loading) return <div className='w-screen h-screen flex justify-center items-center'>loading</div>

    console.log(data, err)

    return (
        <div>
            <div className='w-full h-85.5 flex flex-col justify-center items-center gap-10'>
                {/* Mic button */}
                <button
                    onClick={handleMicClick}
                    className={`w-37.25 h-37.25 rounded-full flex justify-center items-center transition-all duration-300 ${isListening ? 'bg-[#FFE4E4] animate-pulse' : 'bg-[#E4F5FF]'
                        }`}
                >
                    <div
                        className={`w-27.5 h-27.5 rounded-full flex justify-center items-center transition-all duration-300 ${isListening ? 'bg-[#FFB2B2]' : 'bg-[#B2E3FF]'
                            }`}
                    >
                        <PiMicrophoneFill
                            className={`w-17.5 h-17.5 transition-colors duration-300 ${isListening ? 'text-red-500' : 'text-[#003A53]'
                                }`}
                        />
                    </div>
                </button>

                <div className='text-center w-full'>
                    <p className='text-[16px] font-semibold text-[#003A53]'>
                        {isListening ? 'Listening...' : 'Touch to Speak'}
                    </p>

                    <p className='text-[#625B71] text-[13px] min-h-5'>
                        {displayText ? (
                            <span>
                                &quot;{displayText}
                                {interimTranscript && (
                                    <span className='opacity-50'>{interimTranscript}</span>
                                )}
                                &quot;
                            </span>
                        ) : (
                            <span>&quot;I have a bamboo craft business with a target market...&quot;</span>
                        )}
                    </p>
                </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center gap-3 text-center pt-15.75">
                <div className="p-2 w-full max-w-100 bg-[#004868] text-white rounded-md">
                    <button onClick={handleNextAndProcess}>Continue</button>
                </div>
                <p className="text-[12px] text-gray-600">
                    Need help?{' '}
                    <span className='font-semibold text-[#005D85]'>Contact village assistance</span>
                </p>
            </div>
        </div>
    )
}
