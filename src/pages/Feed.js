import SeoMeta from 'src/components/SeoMeta';
import { metaTags } from 'src/helpers/seo';
import React, { Component } from 'react'
import {ErrorBoundary} from 'react-error-boundary'
import ErrorFallback from 'src/components/Errors/ErrorFallback';

class Feed extends Component {

    render() {
        const meta = metaTags('feeds');
        return (
            <>

                <ErrorBoundary FallbackComponent={ErrorFallback} >
                    <SeoMeta
                        title={meta.title}
                        meta={meta.meta}
                    />
                    
                </ErrorBoundary>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem quo dolore ex nihil cumque, harum, perspiciatis dicta placeat pariatur eveniet suscipit qui neque reprehenderit doloremque illum tenetur est ut vitae.
                {/* <MainLayout>
                </MainLayout> */}
            </>
        )
    }
}

export default Feed
