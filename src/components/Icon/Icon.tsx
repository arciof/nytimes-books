import styled from '@emotion/styled'

const StyledRoot = styled.span(({ theme }) => ({}))

interface LogoProps {
    name: string
    isFilled: boolean
}

const Logo = (props: LogoProps) => {
    const CLASS_NAMES = [
        'material-icon',
        'material-symbols-outlined',
        props.isFilled ? 'filled' : null,
    ]

    return (
        <StyledRoot className={CLASS_NAMES.join(' ')}>{props.name}</StyledRoot>
    )
}

export default Logo
