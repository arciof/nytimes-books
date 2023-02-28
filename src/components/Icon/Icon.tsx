import styled from '@emotion/styled'

const StyledRoot = styled.span(({ theme }) => ({}))

interface LogoProps {
    name: string
    isFilled?: boolean
}

const Icon = ({ name, isFilled = false }: LogoProps) => {
    const CLASS_NAMES = [
        'material-icon',
        'material-symbols-outlined',
        isFilled ? 'filled' : null,
    ]

    return <StyledRoot className={CLASS_NAMES.join(' ')}>{name}</StyledRoot>
}

export default Icon
