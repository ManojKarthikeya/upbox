import styled from "styled-components";

export const BaseBtn = styled.button`
    border-radius: ${props => props.borderRadius};
    border-color: ${props => props.borderColor};
    border-width: ${props => props.borderWidth};
    background-color: ${props => props.bgColor};
    width: ${props => props.width || 'auto'};
    padding: ${props => props.padding};
    color: ${props => props.color || 'auto'};
    margin: ${props => props.margin || 'auto'}
`;

export const SocialPostGrid = styled.div`
    display: grid;  
    grid-template-columns: repeat(4, 312px);
    gap: 20px;
    justify-content: center;
    padding-top: 40px;
`;