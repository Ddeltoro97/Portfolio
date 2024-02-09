import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'
import './index.css'

import navBar_en from "./translations/en/navBar.json";
import navBar_es from "./translations/es/navBar.json";

import home_en from "./translations/en/home.json";
import home_es from "./translations/es/home.json";

import about_en from "./translations/en/about.json";
import about_es from "./translations/es/about.json";

import contact_en from "./translations/en/contact.json";
import contact_es from "./translations/es/contact.json";

import projects_en from "./translations/en/projects.json";
import projects_es from "./translations/es/projects.json";

import certificates_en from "./translations/en/certificates.json";
import certificates_es from "./translations/es/certificates.json";


i18next.init({
  interpolation: {escapeValue: true},
  lng: "en",
  resources: {
    en: {
      navBar: navBar_en,
      home: home_en,
      about: about_en,
      contact: contact_en,
      projects: projects_en,
      certificates: certificates_en
    },
    es: {
      navBar: navBar_es,
      home: home_es,
      about: about_es,
      contact: contact_es,
      projects: projects_es,
      certificates: certificates_es
    }
  }
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <I18nextProvider i18n={i18next}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
    </I18nextProvider>
)
