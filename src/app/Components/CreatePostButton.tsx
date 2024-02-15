'use client'
import { useFormStatus } from "react-dom"

export const CreatePostButton = () => {
    const { pending } = useFormStatus()

    return (
        <button disabled={pending} type="submit" className="bg-sky-500 disabled:opacity-40 disabled:pointer-events-none font-bold
            rounded-full px-5 py-2 self-end"
        >
            {pending ? 'Posting...' : 'Post'}
        </button>
    )
}
