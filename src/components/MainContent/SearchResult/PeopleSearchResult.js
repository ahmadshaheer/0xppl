
import React from 'react'
import styled from 'styled-components'
import default_profile_image from  'src/assets/search_result_default_profile.png'

const PeopleSearchResult = ({profile_image, user_name, code, total_stats, search_term}) => {
    return (
        <Wrapper href="/">
            <div className="profile-image">
                <img src={profile_image ? profile_image : default_profile_image} alt="" />
            </div>
            <div className="profile-details">
                {/* if search term is present display the last option for specific search according */}
                    {search_term && <div className="search-all">Search all activity & posts for <span className="search-term">{search_term}</span></div> }
                {/* end  */}
                <div className="info">
                    <div className="user-name">
                        {user_name}  
                    </div>
                    <div className="code">
                        {code}
                    </div>
                </div>
                <div className="total-stats">{total_stats}</div>

            </div>

        </Wrapper>
    )
}

const Wrapper = styled.a`
    display: flex;
    align-items: center;
    padding: .25rem 1.875rem .25rem 1.875rem;
    
    &:hover {
        background: var(--color-background);
    }

    .profile-image {
        padding-right: 0.813rem;
        img {
            width: 2rem;
            height: 2rem;
            vertical-align: middle;

        }
    }
    .profile-details {
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: 1;
        width: 100%;
        
        letter-spacing: -0.3px;
        color: var(--color-grey);

        .search-all {
            .search-term {
                font-weight: 600;
            }
        }

        .info {
            display: flex;

            font-size: 1rem;
            .user-name {
                color: var(--color-black);
                font-weight: 600;
                padding-right: 0.688rem;
            }
            
            .code {

            }

        }
        .total-stats {
            font-size: 0.813rem;
            color: #B6BDC4;

        }

    }
`
export default PeopleSearchResult
