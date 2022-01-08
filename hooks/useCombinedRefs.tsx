import { useEffect, useRef } from 'react'

// Hook to merge given refs into one ref
// It is useful when using a component with react forwardRef, and we need to use the forwarded ref inside the component
const useCombinedRefs = (...refs: any[]) => {
    const targetRef = useRef(null)

    useEffect(() => {
        refs.forEach(ref => {
            if (!ref) return

            if (typeof ref === 'function') {
                ref(targetRef.current)
            } else {
                ref.current = targetRef.current
            }
        })
    }, [refs])

    return targetRef
}

export default useCombinedRefs
