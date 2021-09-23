export function metaTags(page) {
    let meta = {};
    switch(page) {
        case 'feeds':
            meta = {
                title: 'Feeds',
                meta: [
                    {
                        name: "description",
                        content: "A good description about the Feeds",
                    },
                    {
                        name: "keywords",
                        content: "feed, messages, other",
                    },   
                ]
            }
            break;
        case 'communities':
            meta = {
                title: 'Communities',
                meta: [
                    {
                        name: "description",
                        content: "A good description about the communities section",
                    },
                    {
                        name: "keywords",
                        content: "feed, messages, other",
                    },   
                ]
            }
            break;
        case 'messages':
            meta = {
                title: 'Messages',
                meta: [
                    {
                        name: "description",
                        content: "A good description about the messages",
                    },
                    {
                        name: "keywords",
                        content: "feed, messages, other",
                    },   
                ]
            }
            break;

        default:
            break;
    }
    return meta;

}