module.exports = {
    siteMetadata: {
        title: "Loan Site",
        mainMenu: [{
                title: "Home",
                link: "/",
            },
            {
                title: "Why Us",
                link: "/why Us",
            },
            {
                title: "Criteria",
                link: "/criteria",
            },
            {
                title: "APR",
                link: "/apr",
            },
            {
                title: "Blog",
                link: "/blogs",
            },
            {
                title: "Contact Us",
                link: "/contact",
            },
            {
                title: "Apply",
                link: "/apply",
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