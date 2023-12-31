import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  фио: DS.attr('string'),
  справДолж: DS.belongsTo('i-i-s-prilozhenie-41-справ-долж', { inverse: null, async: false })
});

export let ValidationRules = {
  фио: {
    descriptionKey: 'models.i-i-s-prilozhenie-41-справ-сотр.validations.фио.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  справДолж: {
    descriptionKey: 'models.i-i-s-prilozhenie-41-справ-сотр.validations.справДолж.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СправСотрE', 'i-i-s-prilozhenie-41-справ-сотр', {
    фио: attr('Сотрудник', { index: 0 }),
    справДолж: belongsTo('i-i-s-prilozhenie-41-справ-долж', 'Должность', {
      должность: attr('Должность', { index: 2, hidden: true })
    }, { index: 1 })
  });

  modelClass.defineProjection('СправСотрL', 'i-i-s-prilozhenie-41-справ-сотр', {
    фио: attr('Сотрудник', { index: 0 }),
    справДолж: belongsTo('i-i-s-prilozhenie-41-справ-долж', 'Должность', {
      должность: attr('Должность', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
