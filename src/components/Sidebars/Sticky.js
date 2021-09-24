import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
const Left = (props) => {
    const {widthInRem, topInRem, marginLeftInRem, marginRightInRem, contentsComponent} = props
    return (
        <Wrapper 
            widthInRem={widthInRem}
            topInRem={topInRem}
            marginLeftInRem={marginLeftInRem}
            marginRightInRem={marginRightInRem}
        >
            {contentsComponent && contentsComponent()}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: sticky;
    /* concat rem with props*/
    flex-basis: ${({widthInRem}) => `${widthInRem}rem`};
    top: ${({topInRem}) => topInRem}rem;
    margin-left: ${({marginLeftInRem}) => `${marginLeftInRem}rem`};
    margin-right: ${({marginRightInRem}) => `${marginRightInRem}rem`};
    height: 18.25rem;
    

`

Left.propTypes = {
    widthInRem: PropTypes.number,
    topInRem: PropTypes.number,
    marginLeftInRem: PropTypes.number,
    marginRightInRem: PropTypes.number
}
export default Left
