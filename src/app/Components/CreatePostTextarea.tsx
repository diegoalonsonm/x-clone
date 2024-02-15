'use client'

import { useEffect, useRef } from 'react'
import { useFormStatus } from 'react-dom';

export const CreatePostTextarea = () => {
    const { pending } = useFormStatus()
    const alreadySent = useRef(false)
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (textAreaRef.current === null) return

        if (!pending && alreadySent.current) {
            alreadySent.current = false
            textAreaRef.current.value = ''
            return
        }

        alreadySent.current = pending
    }, [pending])

    return (
        <textarea ref={textAreaRef} name="post" rows={4} className="ml-4 w-full text-xl bg-black placeholder-gray-500 p-2"
            placeholder="Share a tweet">
        </textarea>
  )
}
