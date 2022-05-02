import styled from "styled-components";

export const OverviewSection = styled.div`
    background-color: #F5F8FF;
    display: flex;
    flex-direction: row;
  justify-content: space-between;
`;

export const OverviewContentSection = styled.div`
    width: 30%;
    padding-left: 60px;
  margin: 5rem;
`;

export const OverviewImageSection = styled.img`
    width: 60%;  
    display: inline;
    object-fit: contain;
    justify-content: flex-end;
    z-index: 10;
`;

export const OverviewSubHeading = styled.p`
      padding: 12px 0;
`;

export const SubscriptionSectionTitle = styled.h1`
    text-align: center;
    padding-top: 20px;
`;

export const SubscriptionSection = styled.div`
      align-items: center;
      display: flex;
      flex-direction: column;
`;

export const SubscriptionPlanGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 575px);
    gap: 150px;
    justify-content: center;
    padding-top: 80px;
`;

export const SubscriptionPlanReminder = styled.p`
    padding-top: 30px;
    text-align: center;
`;
