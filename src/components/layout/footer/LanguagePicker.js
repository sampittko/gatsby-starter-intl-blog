import React from "react";
import { injectIntl, changeLocale } from "gatsby-plugin-intl";
import {
  getSupportedLanguages,
  getSupportedLanguageStrings,
} from "../../../utils/i18n";

const supportedLanguages = getSupportedLanguages();
const supportedLanguageStrings = getSupportedLanguageStrings();

const LanguagePicker = ({ intl }) => (
  <select
    className="block text-gray-600 text-xs appearance-none w-auto bg-white rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer text-center hover:underline"
    onChange={(event) => changeLocale(event.target.value)}
    value={intl.locale}
  >
    {supportedLanguages.map((supportedLanguage, index) => {
      const language = supportedLanguageStrings[index];
      return (
        <option key={supportedLanguage} value={supportedLanguage}>
          {language}
        </option>
      );
    })}
  </select>
);

export default injectIntl(LanguagePicker);
