import { RoundedOutlineButton } from 'src/components/Buttons'
import React from 'react'
import styled from 'styled-components'

const PersonalDescription = ({name, description, updatable, marginBottomInRem}) => {
    return (
        <Wrapper marginBottomInRem={marginBottomInRem}>
            <div className="name">{name}</div>
            <div className="description">{description}</div>
            {updatable && <RoundedOutlineButton color="#0648D7" text="UPDATE PROFILE" />  }
        </Wrapper>
    )
}
const Wrapper = styled.div`
    line-height: 0.938rem;
    ${({marginBottomInRem}) => marginBottomInRem && `
        margin-bottom: ${marginBottomInRem}rem;
    `}
    .name {
        font-size: 0.875rem;
        font-weight: 700;
        color: #141619;
    }
    .description {
        font-size: 0.688rem;
        font-weight: 500 ;
        color: #687684;
        margin-bottom: 2rem;
    }
`
export default PersonalDescription
