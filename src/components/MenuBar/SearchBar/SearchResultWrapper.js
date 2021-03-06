import React from 'react'
import styled from 'styled-components';
import {ActivitySearchResult, PeopleSearchResult} from './'
import PropTypes from 'prop-types'
const SearchResultWrapper = ({results, type}) => {

    const results_length = results.length
    let render_result
    if(type === 'people') {
        render_result = results.map( (item, index) => {
            
            if(results_length === index+1) {
                /**
                 * display the last option in search result i.e.
                 * Search all people for search_term
                 * 
                 *  */  
                return <PeopleSearchResult
                        search_term={item.search_term}
                        key={index}
                    />
            }
    
            return <PeopleSearchResult
                    profile_image={item.profile_image}
                    user_name={item.user_name}
                    code={item.code}
                    total_stats={item.total_stats}
                    key={index}
                />
            }
        )
    }
    else {
        render_result = results.map( (item, index) => {
            
            if(results_length === index+1) {
                 /**
                 * display the last option in search result i.e.
                 * Search all activity & posts for search_term
                 * 
                 *  */  
                return <ActivitySearchResult
                        search_term={item.search_term}
                        key={index}
                    />
            }
    
            return <ActivitySearchResult
                    profile_image={item.profile_image}
                    user_name={item.user_name}
                    activity_type={item.activity_type}
                    activity_title={item.activity_title}
                    activity_elapsed_time={item.activity_elapsed_time}
                    purchased_type={item.purchased_type}
                    purchased_amount={item.purchased_amount}
                    key={index}
                />
            }
        )
    }


    return (
        <Wrapper>
            <div className="result-criteria">
                {/* <div className="people">PEOPLE</div> */}

                <div className="title">
                    {type === 'people' ?  'PEOPLE' : 'POSTS & ACTIVITY' }
                </div>
                {type === 'people' && <div className="parameters">Search parameters</div>}
            </div>
            <div className="search-result">
                {render_result}
            </div>
            {type === 'people' && <div className="break"></div>}

            
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .result-criteria {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
        font-weight: 400;
        line-height: 1rem;
        padding: 0 1.875rem;
        .title {
            font-size: 0.875rem;
            color: #687684;

        }
        .parameters {
            color: #B6BDC4;
            font-size: 0.75rem;

        }

    }
    .break {
        border-bottom: 1px dashed #BDC5CD;
        margin: 1rem 0;
    }
`

SearchResultWrapper.propTypes = {
    results: PropTypes.array, 
    type: PropTypes.string 
}

export default SearchResultWrapper
