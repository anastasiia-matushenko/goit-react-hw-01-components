import styled from "styled-components";

const Container = styled.div`
  width: 260px;
  margin: 20px auto;
  padding: 25px 0 0;
  box-shadow: 0px 1px 4px rgba(126, 147, 255, 0.2);
  border-radius: 6px;
`;

const Photo = styled.img`
  display: block;
  margin: 0 auto 27px;
  width: 100px;
  height: 100px;
  border-radius: 50%;

  background-color: #D9D9D9;
`;

const Description = styled.div`
  padding-bottom: 22px;
`;

const Paragraph = styled.p`
  margin: 0;
  margin-bottom: 9px;
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;

  color: #7F8E9D;
`;

const UserName = styled(Paragraph)`
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.01em;

  color: #1F3349;
`;

const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  list-style: none;
  margin: 0;
  background: #ECF1F3;

  border-top: 1px solid #7F8E9D;
`;

const StatsItem = styled.li`
  flex-basis: calc((100% / 3));
  padding: 19px 0;
  border-left: 1px solid #7F8E9D;

  &:first-child {
    border-left: 0;
  }
`;

const Label = styled.span`
  display: block;
  margin-bottom: 6px;
  text-align: center;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;

  color: #7F8E9D;
`;

const Quantity = styled.span`
  display: block;
  text-align: center;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;

  color: #1F3349;
`;

export {
  Container,
  Photo,
  Paragraph,
  Description,
  UserName,
  StatsList,
  StatsItem,
  Label,
  Quantity
};