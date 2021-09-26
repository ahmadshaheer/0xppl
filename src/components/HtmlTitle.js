import React from 'react'
import { Helmet } from 'react-helmet-async'
import {PropTypes} from 'prop-types'

const HtmlTitle = ({title,meta}) => {
    
    const meta_tags = meta.map((item, index) => <meta key={index} name={item.name} content={item.content}  />)

    return (
        <Helmet>
            <title>{title} - 0xPPL</title>
            {meta_tags}
        </Helmet>
    )
}
HtmlTitle.propTypes = {
    title: PropTypes.string,
    meta: PropTypes.array,
}
export default HtmlTitle
