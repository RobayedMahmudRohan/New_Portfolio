import { useEffect, useState } from 'react'

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 600)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <button
      type="button"
      className="button back-to-top"
      onClick={() => window.scrollTo({ top: 0 })}
    >
      <span aria-hidden="true">↑</span> Top
    </button>
  )
}

export default BackToTop
