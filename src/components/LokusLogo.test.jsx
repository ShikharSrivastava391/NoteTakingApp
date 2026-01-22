import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import NoteMakingAppLogo from './NoteMakingAppLogo'

describe('NoteMakingAppLogo Component', () => {
    it('renders without crashing', () => {
        const { container } = render(<NoteMakingAppLogo />)
        const svg = container.querySelector('svg')
        expect(svg).toBeInTheDocument()
    })

    it('applies default classes', () => {
        const { container } = render(<NoteMakingAppLogo />)
        const svg = container.querySelector('svg')
        expect(svg).toHaveClass('w-5')
        expect(svg).toHaveClass('h-5')
    })

    it('accepts custom className', () => {
        const { container } = render(<NoteMakingAppLogo className="w-10 h-10 text-red-500" />)
        const svg = container.querySelector('svg')
        expect(svg).toHaveClass('w-10')
        expect(svg).toHaveClass('h-10')
        expect(svg).toHaveClass('text-red-500')
    })

    it('accepts custom color', () => {
        const { container } = render(<NoteMakingAppLogo color="#ff0000" />)
        const svg = container.querySelector('svg')
        expect(svg).toHaveAttribute('fill', '#ff0000')
    })
})
