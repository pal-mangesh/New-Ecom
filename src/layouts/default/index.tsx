import React from "react";
import Header from "../../hoc/header";
import HelmetContainer from "../../hoc/helmet";
import { useStaticQuery, graphql } from "gatsby";
import Footer from "../../hoc/footer";


interface IDefaultLayoutProps {
  title: string;
  children?: any;
}

export default (props: IDefaultLayoutProps) => {
  const safeAreaPadding = 80;
  const data = useStaticQuery(graphql`
    query DefaultLayoutQuery {
      site {
        siteMetadata {
          title
          mainMenu {
            title
            link
          }
        }
      }
    }
  `);
  const { title, mainMenu } = data?.site?.siteMetadata || {};

  return (
    <>
      <HelmetContainer>
        <title>{title} {props.title}</title>
      </HelmetContainer>
      <Header safeAreaPadding={safeAreaPadding} mainMenu={mainMenu} />
      <div style={{ paddingTop: safeAreaPadding + "px" }}>{props.children}</div>
      <Footer />
    </>
  );
};
