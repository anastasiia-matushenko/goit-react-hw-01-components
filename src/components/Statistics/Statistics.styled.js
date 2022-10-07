import styled from "styled-components";

const StatContainer = styled.section`
    margin: 50px auto 0;
    width: 260px;
    box-shadow: 0px 1px 4px rgba(126, 147, 255, 0.2);
    border-radius: 6px;
`;

const StatList = styled.ul`
    font-size: 14px;
    list-style: none;
    padding: 0;
    margin: 0;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h2`
    padding: 32px 0;
    margin: 0;
    text-align: center;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;

    letter-spacing: 0.03em;
    text-transform: uppercase;

    color: #7F8E9D;
`;

const StatItem = styled.li`
    flex-basis: calc((100% / 4));
    padding: 0;
    margin: 0;
    padding-top: 6px;
    font-size: 14px;
    line-height: 21px;
    background-color: #7F8E9D;
`;

const Span = styled.span`
    display: block;
    text-align: center;
    margin-bottom: 7px;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;

    color: #FFFFFF;
`;

const Percentage = styled(Span)`
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
`;

export { Title, StatList, StatContainer, StatItem, Span, Percentage };