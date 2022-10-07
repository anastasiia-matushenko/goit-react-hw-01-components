import PropTypes from "prop-types";
import { Title, StatList, StatContainer, StatItem, Span, Percentage } from "./Statistics.styled";

export const Statistics = ({ title, stats }) => {
    return (
        <StatContainer>
            {title && <Title>{title}</Title>}

            <StatList>
                {stats.map(({id, label, percentage}) => {
                    return (
                        <StatisticsItem key={id}
                            label={label}
                            percentage={percentage}
                        />
                    )
                })}
            </StatList>
        </StatContainer>
    )
};

const StatisticsItem = ({ label, percentage }) => {
    return (
        <StatItem>
            <Span>{label}</Span>
            <Percentage>{percentage}</Percentage>
        </StatItem>
    )
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
};

StatisticsItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};