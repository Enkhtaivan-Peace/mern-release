'use client'
import React, { useRef } from 'react'
import { Button } from '../../button'

function ParticleButton() {
    const buttonRef = useRef<HTMLButtonElement>(null)

    const createParticle = (x: number, y: number) => {
        const particle = document.createElement('particle')
        particle.classList.add('particle')
        document.body.appendChild(particle)

        const size = Math.floor(Math.random() * 20 + 5)
        particle.style.width = `${size}px`
        particle.style.height = `${size}px`
        particle.style.background = `hsl(${Math.random() * 90 + 180}, 70%, 60%)`

        const destinationX = x + (Math.random() - 0.5) * 2 * 75
        const destinationY = y + (Math.random() - 0.5) * 2 * 75

        const animation = particle.animate(
            [
                {
                    transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                    opacity: 1,
                },
                {
                    transform: `translate(${destinationX}px, ${destinationY}px)`,
                    opacity: 0,
                },
            ],
            {
                duration: Math.random() * 1000 + 500,
                easing: 'cubic-bezier(0, .9, .57, 1)',
                delay: Math.random() * 200,
            }
        )

        animation.onfinish = () => {
            particle.remove()
        }
    }

    const pop = (e: React.MouseEvent<HTMLButtonElement>) => {
        const button = buttonRef.current
        if (!button) return

        const bbox = button.getBoundingClientRect()
        const x = bbox.left + bbox.width / 2
        const y = bbox.top + bbox.height / 2

        for (let i = 0; i < 30; i++) {
            createParticle(e.clientX || x, e.clientY || y)
        }
    }

    return (
        <div className="particle-btn-wrapper">
            <Button id="button" ref={buttonRef} onClick={pop}>
                Click on me
            </Button>
        </div>
    )
}

export default ParticleButton
