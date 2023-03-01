import styled from '@emotion/styled'
import Icon from '../Icon/Icon'

const StyledRank = styled.div(({ theme }) => ({
    color: theme.colors.lightBlue,
    fontSize: '12px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
}))

const StyledCurrentRank = styled.div(({ theme }) => ({
    color: theme.colors.lightBlue,
    fontSize: '12px',
}))

interface BookRankProps {
    currentRank: number
    lastWeekRank: number
}

const RankIcon = ({ rankDiff }: { rankDiff: number }) => {
    if (rankDiff < 0)
        return <Icon name="arrow_downward" color="red" size={14} />
    if (rankDiff > 0)
        return <Icon name="arrow_upward" color="green" size={14} />

    return <Icon name="equal" size={12} />
}

const BookRank = ({ currentRank, lastWeekRank }: BookRankProps) => {
    const rankDiff = lastWeekRank === 0 ? 0 : lastWeekRank - currentRank

    return (
        <StyledRank>
            <StyledCurrentRank>Rank: {currentRank}</StyledCurrentRank>
            <RankIcon rankDiff={rankDiff} />
        </StyledRank>
    )
}

export default BookRank
