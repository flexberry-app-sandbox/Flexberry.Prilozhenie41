import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерКарты: DS.attr('string'),
  справУч: DS.belongsTo('i-i-s-prilozhenie-41-справ-уч', { inverse: null, async: false }),
  картДоступ: DS.belongsTo('i-i-s-prilozhenie-41-карт-доступ', { inverse: 'базаДанных', async: false })
});

export let ValidationRules = {
  номерКарты: {
    descriptionKey: 'models.i-i-s-prilozhenie-41-база-данных.validations.номерКарты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  справУч: {
    descriptionKey: 'models.i-i-s-prilozhenie-41-база-данных.validations.справУч.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  картДоступ: {
    descriptionKey: 'models.i-i-s-prilozhenie-41-база-данных.validations.картДоступ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('БазаДанныхE', 'i-i-s-prilozhenie-41-база-данных', {
    номерКарты: attr('Номер Карты', { index: 0 }),
    справУч: belongsTo('i-i-s-prilozhenie-41-справ-уч', 'Ученик', {
      фио: attr('Фио Ученика', { index: 2 })
    }, { index: 1, displayMemberPath: 'фио Ученика' })
  });
};
