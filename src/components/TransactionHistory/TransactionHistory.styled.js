import styled from "styled-components";

const Table = styled.table`
    width: 555px;
    margin: 0 auto;
    box-shadow: 0px 1px 4px rgba(126, 147, 255, 0.2);
    border-radius: 6px;
    border-collapse: collapse;
`;

const Head = styled.thead`
    background-color: #4CC6F5;
`;

const TableTitle = styled.th`
    padding: 8px 0 8px;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;

    letter-spacing: 0.03em;
    text-transform: uppercase;
    border: 0.5px solid #C5C5C5;;

    color: #FFFFFF;
`;

const TableItem = styled.tr`
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    letter-spacing: 0.03em;

    color: #7F8E9D;

    &:nth-child(even) {
        background-color: #ECF1F3;
    }

    td {
        border-right: 0.5px solid #C5C5C5;
        padding: 8px 0 8px;
        text-transform: capitalize;

        &:last-child {
            border-right: 0;
        }
    }
`;

export { Table, Head, TableTitle, TableItem };