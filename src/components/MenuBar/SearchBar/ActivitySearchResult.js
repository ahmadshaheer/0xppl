
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import default_profile_image from  'src/assets/search_result_activity_default_profile.png'

const ActivitySearchResult = (props) => {
    const {
        profile_image, 
        user_name, 
        search_term, 
        activity_type, 
        activity_title, 
        activity_elapsed_time, 
        purchased_type, 
        purchased_amount} = props
    return (
        <Wrapper href="/">
            <div className="profile-image">
                <img src={profile_image ? profile_image : default_profile_image} alt="" />
            </div>
            <div className="profile-details">
                {/* if search term is present display the last option for specific search according */}
                    {search_term && <div className="search-all">Search all activity & posts for <span className="search-term">{search_term}</span></div>}
                {/* end  */}
                <div className="info">
                    <div className="user-name">
                        {user_name}  
                    </div>
                    <div className="activity">
                        <div className="type">{activity_type}</div>
                        <div className="title">
                            {
                                activity_type === 'posted' && <div className="text">{activity_title}</div>
                            }
                            {
                                activity_type === 'bought' && 
                                                                <div className="purchased">
                                                                    <span className="amount">{purchased_amount}</span>
                                                                    of
                                                                    <span className="type">{purchased_type}</span>
                                                                </div>
                            }
                        </div>

                        
                    </div>
                </div>
                <div className="elapsed-time">{activity_elapsed_time}</div>

            </div>

        </Wrapper>
    )
}

const Wrapper = styled.a`
    display: flex;
    align-items: center;
    padding: .25rem 1.875rem .25rem 1.875rem;
    
    &:hover .elapsed-time {
        color: #687684 !important;
    }
    &:hover .type {
        color: #687684 !important;

    }
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
                padding: 0 0.344rem ;
            }
            
            .activity {
                .type {
                    padding: 0 0.344rem ;
                }
                display: flex;
                
                .title {
                    .text {
                        font-weight: 600;
                        font-size: 0.938rem;
                    }
                    
                    .purchased {
                        span {
                            font-weight: 600;
                            padding: 0 0.344rem ;

                        }
                        .amount {
                        }
                        .type {
                            

                        }

                    }

                }

            }

        }
        .elapsed-time {
            font-size: 0.813rem;
            color: #B6BDC4;


        }

    }
`


ActivitySearchResult.propTypes = {
    profile_image: PropTypes.string,
    user_name: PropTypes.string,
    search_term: PropTypes.string,
    activity_type: PropTypes.string,
    activity_title: PropTypes.string,
    activity_elapsed_time: PropTypes.string,
    purchased_type: PropTypes.string,
    purchased_amount: PropTypes.string,
}
export default ActivitySearchResult
