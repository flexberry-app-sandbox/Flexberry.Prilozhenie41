import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISPrilozhenie_41КартДоступLForm from './forms/i-i-s-prilozhenie-41-карт-доступ-l';
import IISPrilozhenie_41СправДолжLForm from './forms/i-i-s-prilozhenie-41-справ-долж-l';
import IISPrilozhenie_41СправСотрLForm from './forms/i-i-s-prilozhenie-41-справ-сотр-l';
import IISPrilozhenie_41КартДоступEForm from './forms/i-i-s-prilozhenie-41-карт-доступ-e';
import IISPrilozhenie_41СправДолжEForm from './forms/i-i-s-prilozhenie-41-справ-долж-e';
import IISPrilozhenie_41СправСотрEForm from './forms/i-i-s-prilozhenie-41-справ-сотр-e';
import IISPrilozhenie_41КартДоступModel from './models/i-i-s-prilozhenie-41-карт-доступ';
import IISPrilozhenie_41СправДолжModel from './models/i-i-s-prilozhenie-41-справ-долж';
import IISPrilozhenie_41СправСотрModel from './models/i-i-s-prilozhenie-41-справ-сотр';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-prilozhenie-41-карт-доступ': IISPrilozhenie_41КартДоступModel,
    'i-i-s-prilozhenie-41-справ-долж': IISPrilozhenie_41СправДолжModel,
    'i-i-s-prilozhenie-41-справ-сотр': IISPrilozhenie_41СправСотрModel
  },

  'application-name': 'Prilozhenie_41',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Prilozhenie_41',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Prilozhenie_41',
          title: 'Prilozhenie_41'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
          },
          'i-i-s-prilozhenie-41-карт-доступ-l': {
            caption: 'База Данных',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-prilozhenie-41-карт-доступ-l': IISPrilozhenie_41КартДоступLForm,
    'i-i-s-prilozhenie-41-справ-долж-l': IISPrilozhenie_41СправДолжLForm,
    'i-i-s-prilozhenie-41-справ-сотр-l': IISPrilozhenie_41СправСотрLForm,
    'i-i-s-prilozhenie-41-карт-доступ-e': IISPrilozhenie_41КартДоступEForm,
    'i-i-s-prilozhenie-41-справ-долж-e': IISPrilozhenie_41СправДолжEForm,
    'i-i-s-prilozhenie-41-справ-сотр-e': IISPrilozhenie_41СправСотрEForm
  },

});

export default translations;
