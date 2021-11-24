module.exports = {
    siteMetadata: {
        title: "E-com site",
        mainMenu: [{
                title: "Home",
                link: "/",
            },

            {
                title: "Blogs",
                link: "/blogs",
            },
            {
                title: "About Us",
                link: "/About Us",
            },
            {
                title: "FAQs",
                link: "/criteria",
            },

            {
                title: "Contact Us",
                link: "/contact",
            },
        ],
    },
    plugins: [
        `gatsby-plugin-postcss`,
        {
            resolve: `gatsby-source-filesystem`,
            options: { name: `images`, path: `${__dirname}/src/images` },
        },
    ],
};