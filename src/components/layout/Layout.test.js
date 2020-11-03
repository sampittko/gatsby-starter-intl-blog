import React from "react";
import renderer from "react-test-renderer";
import Layout from "./Layout";
import * as Gatsby from "gatsby";

const Intl = jest.genMockFromModule("gatsby-plugin-intl");

const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");
useStaticQuery.mockImplementation(() => ({
  site: {
    siteMetadata: {
      author: {
        openToWork: true
      }
    },
  },
  allSite: {
    edges: [
      {
        node: {
          siteMetadata: {
            author: ``
          }
        }
      }
    ]
  }
}));

describe("Layout", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Intl.IntlProvider>
          <Layout />
        </Intl.IntlProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();

    fireEvent.click(queryByTestId("dark-mode-toggle-button"));
  });
});
