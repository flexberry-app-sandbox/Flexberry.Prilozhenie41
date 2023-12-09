import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISPrilozhenie_41СправДолжLForm from './forms/i-i-s-prilozhenie-41-справ-долж-l';
import IISPrilozhenie_41СправСотрLForm from './forms/i-i-s-prilozhenie-41-справ-сотр-l';
import IISPrilozhenie_41СправДолжEForm from './forms/i-i-s-prilozhenie-41-справ-долж-e';
import IISPrilozhenie_41СправСотрEForm from './forms/i-i-s-prilozhenie-41-справ-сотр-e';
import IISPrilozhenie_41СправДолжModel from './models/i-i-s-prilozhenie-41-справ-долж';
import IISPrilozhenie_41СправСотрModel from './models/i-i-s-prilozhenie-41-справ-сотр';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-prilozhenie-41-справ-долж': IISPrilozhenie_41СправДолжModel,
    'i-i-s-prilozhenie-41-справ-сотр': IISPrilozhenie_41СправСотрModel
  },

  'application-name': 'Prilozhenie_41',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Prilozhenie_41',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Prilozhenie_41',
          title: 'Prilozhenie_41'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'prilozhenie-41': {
          caption: 'Prilozhenie_41',
          title: 'Prilozhenie_41',
          'i-i-s-prilozhenie-41-справ-долж-l': {
            caption: 'Справ долж',
            title: ''
          },
          'i-i-s-prilozhenie-41-справ-сотр-l': {
            caption: 'Справочник Сотрудники',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-prilozhenie-41-справ-долж-l': IISPrilozhenie_41СправДолжLForm,
    'i-i-s-prilozhenie-41-справ-сотр-l': IISPrilozhenie_41СправСотрLForm,
    'i-i-s-prilozhenie-41-справ-долж-e': IISPrilozhenie_41СправДолжEForm,
    'i-i-s-prilozhenie-41-справ-сотр-e': IISPrilozhenie_41СправСотрEForm
  },

});

export default translations;
