import React from 'react'
import TextScramble, { ScrambleTexts } from '@twistezo/react-text-scramble'

const TextEffect = ({text}) => {
    const input_text = [
        text
    ]
    return (
        <>
            <TextScramble 
            texts={input_text}
            letterSpeed={5}
            nextLetterSpeed={100}
            pauseTime={1500}
            />
        </>
    )
}

export default TextEffect
