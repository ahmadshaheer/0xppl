import React from 'react'
import PropTypes from 'prop-types'

const Seo = ({title, meta}) => {
    const meta_tags = meta.map(item => <meta name={item.name} content={item.content}  />)

    return (
        <Helmet>
            <title>{title}</title>
            {meta_tags}
        </Helmet>
    )
}
Seo.proptypes = {
    title: PropTypes.string,
    meta: PropTypes.array,
}
export default Seo
