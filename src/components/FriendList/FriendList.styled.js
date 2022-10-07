import styled from "styled-components";

const Friends = styled.ul`
    width: 260px;
    list-style: none;
    padding: 0;
    margin: 50px auto 50px;
`;

const Item = styled.li`
    display: flex;
    align-items: center;

    padding: 0;
    margin: 0;
    margin-bottom: 8px;
    box-shadow: 0px 1px 4px rgba(126, 147, 255, 0.2);
    border-radius: 6px;
`;

const Status = styled.span`
    display: block;
    margin: 0 14px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${({isOnline}) => isOnline ? "#56AB56" : "#E54C65"};
`;

const Avatar = styled.img`
    display: block;
    margin-right: 15px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: #D9D9D9;
`;

const Paragraph = styled.p`
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.01em;

    color: #1F3349;
`;

export { Friends, Item, Status, Avatar, Paragraph };