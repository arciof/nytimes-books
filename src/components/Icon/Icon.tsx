import styled from '@emotion/styled'

const StyledRoot = styled.span(({ theme }) => ({}))

interface LogoProps {
    name: string
    color?: string
    size?: number
    isFilled?: boolean
}

const Icon = ({
    name,
    color = 'black',
    size = 12,
    isFilled = false,
}: LogoProps) => {
    const CLASS_NAMES = [
        'material-icon',
        'material-symbols-outlined',
        isFilled ? 'filled' : null,
    ]

    return (
        <StyledRoot
            className={CLASS_NAMES.join(' ')}
            style={{ color, fontSize: `${size}px` }}
        >
            {name}
        </StyledRoot>
    )
}

export default Icon
