import React from 'react'
import styled from 'styled-components'

const LeftFixedSidebar = () => {
    return (
        <Sidebar>
            <ProfileWrapper>
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="6.10352e-05" width="64" height="64" fill="#141619"/>
                    <rect x="6.10352e-05" y="17" width="64" height="25" fill="#0648D7"/>
                    <rect x="6.10352e-05" y="42" width="64" height="22" fill="#EDD557"/>
                    <rect width="64" height="5" transform="matrix(1 0 0 -1 6.10352e-05 64)" fill="#EE57AC"/>
                    <rect x="6.10352e-05" y="32" width="64" height="22" fill="#2D8690"/>
                </svg>

            </ProfileWrapper>
            <LogoWrapper>
                <svg width="176" height="55" viewBox="0 0 176 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M38.4354 36.2603C39.3712 32.9574 39.8391 29.6784 39.8391 26.4234C39.8391 23.264 39.5049 20.1287 38.8365 17.0172C38.2126 13.8579 37.1653 11.0337 35.6948 8.54451C34.2688 6.00748 32.3748 3.94914 30.013 2.36949C27.6512 0.789828 24.7546 0 21.3233 0C19.318 0 17.3795 0.430816 15.5078 1.29245C13.6808 2.15408 11.9651 3.32685 10.3608 4.81077C8.80115 6.24683 7.37514 7.94616 6.08282 9.90876C4.83506 11.8235 3.74327 13.834 2.80745 15.9402C1.9162 18.0464 1.22548 20.1765 0.735286 22.3306C0.245095 24.4847 0 26.543 0 28.5056C0 31.282 0.423346 34.178 1.27004 37.1938C1.73657 38.7473 2.30078 40.2418 2.96267 41.6772C2.41079 42.2787 1.89573 42.8536 1.42283 43.396C0.597336 44.3429 -1.68971 48.7879 3.41591 44.7199C3.65109 44.5325 3.91228 44.3212 4.19739 44.088C4.45827 44.549 4.73024 45.0034 5.01331 45.4511C6.66213 47.9402 8.64518 49.9986 10.9624 51.6261C13.2797 53.2536 15.8866 54.0674 18.7832 54.0674C22.2145 54.0674 25.2448 53.2297 27.874 51.5543C30.5032 49.9268 32.6868 47.7966 34.4247 45.1638C36.2072 42.4832 37.5441 39.5154 38.4354 36.2603ZM12.6023 36.9327C12.7176 37.2139 12.8394 37.4923 12.9678 37.7682C13.6362 39.1564 14.4829 40.3531 15.5078 41.3583C16.5773 42.3157 17.8251 42.7944 19.2511 42.7944C20.9891 42.7944 22.5265 42.2199 23.8634 41.0711C25.2448 39.8744 26.3812 38.4383 27.2724 36.7629C28.2082 35.0397 28.9212 33.2207 29.4114 31.3059C29.9016 29.3433 30.1467 27.5961 30.1467 26.0643C30.1467 24.8931 29.9973 23.5155 29.6985 21.9316C24.6041 26.4409 18.0555 32.2063 12.6023 36.9327ZM11.473 33.1206C17.2375 27.6953 23.8113 22.1561 28.9195 18.9867C28.7105 18.3869 28.4734 17.8022 28.2082 17.2326C27.5844 15.7966 26.7599 14.5759 25.735 13.5707C24.7101 12.5655 23.4846 12.0628 22.0586 12.0628C20.3206 12.0628 18.7609 12.6612 17.3795 13.8579C16.0426 15.0067 14.9062 16.4428 13.9704 18.1661C13.0346 19.8893 12.2993 21.7323 11.7646 23.6949C11.2744 25.6575 11.0293 27.4286 11.0293 29.0083C11.0293 30.2202 11.1772 31.591 11.473 33.1206Z" fill="#141619"/>
                    <path d="M176 42.1236C176 43.2565 175.529 44.3214 174.588 45.3184C173.692 46.3153 172.504 47.2216 171.025 48.0373C169.591 48.853 167.978 49.5781 166.185 50.2125C164.392 50.8016 162.622 51.3001 160.874 51.7079C159.126 52.1611 157.468 52.5009 155.899 52.7275C154.375 52.9541 153.165 53.0674 152.269 53.0674C151.417 53.0674 150.499 52.9767 149.513 52.7955C148.571 52.6595 147.787 52.3197 147.16 51.7759C146.801 51.504 146.487 50.8922 146.219 49.9406C145.95 48.9889 145.681 47.8561 145.412 46.5419C145.188 45.2277 144.986 43.8229 144.807 42.3275C144.628 40.7868 144.471 39.2913 144.336 37.8412C144.247 36.3911 144.157 35.0543 144.067 33.8308C144.022 32.6073 144 31.6556 144 30.9759C144 29.843 144.022 28.4835 144.067 26.8974C144.157 25.2661 144.269 23.5441 144.403 21.7314C144.538 19.8735 144.717 17.9929 144.941 16.0896C145.165 14.1863 145.412 12.3964 145.681 10.7197C145.994 8.99766 146.353 7.45692 146.756 6.09745C147.205 4.73797 147.675 3.67305 148.168 2.90268C149.02 1.67915 150.095 1.06738 151.395 1.06738C152.291 1.06738 153.053 1.38459 153.681 2.01902C154.308 2.60812 154.801 3.40115 155.16 4.3981C155.563 5.34974 155.854 6.43732 156.034 7.66085C156.258 8.83906 156.415 10.0173 156.504 11.1955C156.594 12.3737 156.639 13.4613 156.639 14.4582C156.639 15.4552 156.639 16.2482 156.639 16.8373C156.639 20.372 156.549 23.8839 156.37 27.3733C156.235 30.8173 156.168 34.3066 156.168 37.8412V40.4922C158.185 39.8578 160.381 39.2687 162.756 38.7249C165.132 38.1358 167.395 37.8412 169.546 37.8412C170.308 37.8412 171.07 37.8866 171.832 37.9772C172.639 38.0678 173.333 38.2717 173.916 38.589C174.543 38.8608 175.036 39.2913 175.395 39.8805C175.798 40.4242 176 41.172 176 42.1236Z" fill="#141619"/>
                    <path d="M72.0001 16.1667C72.0001 16.8853 71.8629 17.6489 71.5886 18.4575C71.3142 19.221 70.9713 20.0071 70.5598 20.8156C70.1483 21.6241 69.7139 22.4102 69.2567 23.1738C68.7995 23.8924 68.388 24.5662 68.0222 25.195C67.1077 26.6324 66.1933 28.0922 65.2788 29.5745C64.4101 31.0567 63.5185 32.5166 62.604 33.9539C63.0155 34.5827 63.5871 35.4586 64.3186 36.5816C65.0502 37.7045 65.7589 38.8948 66.4447 40.1525C67.1763 41.3653 67.7936 42.578 68.2965 43.7908C68.7995 45.0036 69.0509 46.0367 69.0509 46.8901C69.0509 47.6986 68.7309 48.4846 68.0908 49.2482C67.4506 50.0118 66.6734 50.3936 65.7589 50.3936C64.7987 50.3936 63.8157 50.0567 62.8098 49.383C61.8496 48.7092 60.8894 47.9232 59.9293 47.0248C59.0148 46.0816 58.1689 45.1158 57.3917 44.1277C56.6144 43.0946 55.9514 42.2411 55.4027 41.5674C54.8083 42.1962 54.031 43.0497 53.0709 44.1277C52.1564 45.2057 51.1505 46.2612 50.0532 47.2943C49.0015 48.3274 47.9499 49.2258 46.8983 49.9894C45.8467 50.708 44.9094 51.0674 44.0863 51.0674C43.1262 51.0674 42.3717 50.7305 41.8231 50.0567C41.2744 49.383 41.0001 48.5969 41.0001 47.6986C41.0001 46.8002 41.2973 45.6549 41.8917 44.2624C42.5318 42.87 43.2633 41.4326 44.0863 39.9504C44.9551 38.4681 45.8009 37.0532 46.624 35.7057C47.4927 34.3582 48.1557 33.3026 48.6129 32.539C48.1557 31.7305 47.5841 30.6749 46.8983 29.3723C46.2124 28.0248 45.5495 26.6324 44.9094 25.195C44.315 23.7128 43.7891 22.2754 43.3319 20.883C42.9204 19.4456 42.7147 18.2553 42.7147 17.3121C42.7147 16.279 43.0347 15.448 43.6748 14.8192C44.315 14.1903 45.1608 13.8759 46.2125 13.8759C47.3555 13.8759 48.43 14.3251 49.4359 15.2234C50.4418 16.0768 51.3791 17.1324 52.2478 18.3901C53.1166 19.6028 53.871 20.883 54.5111 22.2305C55.197 23.5331 55.7456 24.6111 56.1571 25.4645C56.7058 24.656 57.4602 23.5556 58.4204 22.1631C59.4263 20.7707 60.5465 19.4007 61.781 18.0532C63.0155 16.7057 64.2958 15.5378 65.6217 14.5497C66.9477 13.5615 68.2051 13.0674 69.3939 13.0674C70.1712 13.0674 70.7884 13.4043 71.2456 14.078C71.7486 14.7069 72.0001 15.4031 72.0001 16.1667Z" fill="#141619"/>
                    <path d="M107 15.2421C107 17.7028 106.447 20.118 105.341 22.4876C104.282 24.8573 102.853 26.999 101.056 28.913C99.2592 30.7813 97.2088 32.3307 94.905 33.5611C92.6012 34.7459 90.2283 35.4066 87.7862 35.5433C87.7402 36.3636 87.6941 37.4117 87.648 38.6876C87.648 39.918 87.5789 41.2168 87.4407 42.5838C87.3024 43.9509 87.0951 45.318 86.8186 46.6851C86.5883 48.0522 86.2196 49.2826 85.7128 50.3762C85.252 51.4699 84.63 52.3585 83.8467 53.0421C83.1095 53.7256 82.188 54.0674 81.0821 54.0674C79.792 54.0674 78.7553 53.6345 77.972 52.7687C77.2348 51.9484 76.6588 50.9459 76.2441 49.7611C75.8755 48.5762 75.6221 47.3459 75.4839 46.0699C75.3456 44.7484 75.2535 43.6319 75.2074 42.7206C75.1153 41.399 75.0461 40.1003 75.0001 38.8243C75.0001 37.5484 75.0001 36.2497 75.0001 34.9281C75.0001 34.3357 75.0001 33.2421 75.0001 31.6471C75.0001 30.0066 75.0001 28.1611 75.0001 26.1104C75.0461 24.0142 75.0922 21.8497 75.1383 19.6168C75.1844 17.3383 75.2535 15.2421 75.3456 13.3281C75.4378 11.3686 75.5299 9.70536 75.6221 8.33827C75.7603 6.97118 75.9216 6.17371 76.1059 5.94586C76.152 5.90029 76.2902 5.80915 76.5206 5.67245C76.751 5.49017 77.0044 5.33067 77.2808 5.19397C77.5573 5.01169 77.8107 4.85219 78.0411 4.71548C78.2715 4.57877 78.4328 4.48764 78.5249 4.44207C80.6444 3.25726 82.9713 2.23194 85.5055 1.36612C88.0397 0.500294 90.5508 0.0673828 93.0389 0.0673828C95.1585 0.0673828 97.0706 0.500294 98.7754 1.36612C100.526 2.18637 102.001 3.30283 103.199 4.71548C104.443 6.08257 105.387 7.70029 106.032 9.56865C106.678 11.3914 107 13.2826 107 15.2421ZM95.0433 16.8142C95.0433 15.9028 94.8129 15.1054 94.3521 14.4218C93.9374 13.7383 93.2232 13.3965 92.2096 13.3965C91.3341 13.3965 90.4587 13.5788 89.5832 13.9433C88.7078 14.2623 87.9014 14.6041 87.1642 14.9686C87.3024 16.5636 87.4176 18.113 87.5098 19.6168C87.648 21.1205 87.671 22.6699 87.5789 24.2649C88.3161 23.9003 89.1225 23.4902 89.9979 23.0345C90.8734 22.5332 91.6797 21.9864 92.4169 21.394C93.1541 20.8016 93.7762 20.1408 94.283 19.4117C94.7898 18.637 95.0433 17.7712 95.0433 16.8142Z" fill="#141619"/>
                    <path d="M141 15.2421C141 17.7028 140.464 20.118 139.393 22.4876C138.366 24.8573 136.983 26.999 135.242 28.913C133.501 30.7813 131.515 32.3307 129.283 33.5611C127.051 34.7459 124.752 35.4066 122.387 35.5433C122.342 36.3636 122.297 37.4117 122.253 38.6876C122.253 39.918 122.186 41.2168 122.052 42.5838C121.918 43.9509 121.717 45.318 121.449 46.6851C121.226 48.0522 120.869 49.2826 120.378 50.3762C119.932 51.4699 119.329 52.3585 118.57 53.0421C117.856 53.7256 116.963 54.0674 115.892 54.0674C114.642 54.0674 113.638 53.6345 112.879 52.7687C112.165 51.9484 111.607 50.9459 111.205 49.7611C110.848 48.5762 110.603 47.3459 110.469 46.0699C110.335 44.7484 110.246 43.6319 110.201 42.7206C110.112 41.399 110.045 40.1003 110 38.8243C110 37.5484 110 36.2497 110 34.9281C110 34.3357 110 33.2421 110 31.6471C110 30.0066 110 28.1611 110 26.1104C110.045 24.0142 110.089 21.8497 110.134 19.6168C110.179 17.3383 110.246 15.2421 110.335 13.3281C110.424 11.3686 110.513 9.70536 110.603 8.33827C110.737 6.97118 110.893 6.17371 111.071 5.94586C111.116 5.90029 111.25 5.80915 111.473 5.67245C111.696 5.49017 111.942 5.33067 112.21 5.19397C112.477 5.01169 112.723 4.85219 112.946 4.71548C113.169 4.57877 113.325 4.48764 113.415 4.44207C115.468 3.25726 117.722 2.23194 120.177 1.36612C122.632 0.500294 125.065 0.0673828 127.475 0.0673828C129.529 0.0673828 131.381 0.500294 133.032 1.36612C134.729 2.18637 136.157 3.30283 137.318 4.71548C138.523 6.08257 139.438 7.70029 140.063 9.56865C140.688 11.3914 141 13.2826 141 15.2421ZM129.417 15.3807C129.417 14.4693 129.194 13.6719 128.747 12.9883C128.346 12.3048 127.654 11.963 126.672 11.963C125.824 11.963 124.976 12.1453 124.127 12.5098C123.279 12.8288 122.498 13.1706 121.784 13.5352C121.918 15.1301 122.03 16.6795 122.119 18.1833C122.253 19.6871 122.275 21.2364 122.186 22.8314C122.9 22.4668 123.681 22.0567 124.529 21.601C125.377 21.0997 126.158 20.5529 126.873 19.9605C127.587 19.3681 128.189 18.7073 128.68 17.9782C129.171 17.2035 129.417 16.3377 129.417 15.3807Z" fill="#141619"/>
                </svg>

            </LogoWrapper>
            <IntroductionWrapper>
                <div className="title">
                    Welcome to 0xPeople,
                </div>
                <div className="description">
                    <p className="sub-title">
                        a decentralized social network 
                        for the crypto natives.
                    </p>
                    <br />
                    <p>
                        For the first time, you can communicate with users behind
                        the ETH addresses. Follow what 
                        the others are doing and engage 
                        in cummunication.

                    </p>
                    <br />
                    <p>
                        Service is run on a distributed proof-of-stake network.
                        There’s 
                        no central company owning 
                        the servers. 

                    </p>

                    {/* <a>Learn more</a> */}

                </div>
                
            </IntroductionWrapper>
        </Sidebar>
    )
}
const Sidebar = styled.div`
    position: fixed;
    /* margin: 5.625rem 7.188rem; */
    width: 28.125rem;
    margin: 5.625rem 7.188rem ; 
    margin-right: 6.813rem;


`
const ProfileWrapper = styled.div`
    margin-bottom: 11.5rem;
`
const LogoWrapper = styled.div`
    margin-bottom: 2.9rem;
    svg {
        width: 11rem;
        height: 3.379rem;
    }

`
const IntroductionWrapper = styled.div`
    width: 14.125rem;
    font-family: Work Sans;
    line-height: 1.25rem;
    font-size: 14px;
    
    
    .title {
        color: #141619;
        font-weight: 600;
        

    }
    .description {
        font-weight: 400;
        color: #687684;
        
        .sub-title {
            color: #141619;

        }
        

    }

`


export default LeftFixedSidebar
