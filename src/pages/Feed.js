import SeoMeta from 'src/components/SeoMeta';
import { metaTags } from 'src/helpers/seo';
import React, { Component } from 'react'
import MainLayout from '../layouts/MainLayout/MainLayout'

class Feed extends Component {

    render() {
        const meta = metaTags('feeds');
        return (
            <>
                <SeoMeta
                    title={meta.title}
                    meta={meta.meta}
                 />

                <MainLayout>
                    content
                </MainLayout>
            </>
        )
    }
}

export default Feed
