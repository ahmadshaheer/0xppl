import { RoundedOutlineButton } from 'src/components/Buttons'
import React from 'react'
import styled from 'styled-components'

const PersonalDescription = ({name, description, updatable, style}) => {
    return (
        <Wrapper style={style}>
            <div className="name">{name}</div>
            <div className="description">{description}</div>
            {updatable && <RoundedOutlineButton label="UPDATE PROFILE" />  }
        </Wrapper>
    )
}
const Wrapper = styled.div`
    line-height: 0.938rem;
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
