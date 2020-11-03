import React from "react";
import renderer from "react-test-renderer";
import Layout from "./Layout";
import * as Gatsby from "gatsby";
import { IntlProvider } from "gatsby-plugin-intl";
import enTranslations from '../../locales/en.json';

jest.mock("./footer/LanguagePicker", () => () => jest.fn());

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
        <IntlProvider locale="en" messages={enTranslations}>
          <Layout />
        </IntlProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
