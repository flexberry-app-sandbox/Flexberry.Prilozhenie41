import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерКарты: DS.attr('string'),
  картДоступ: DS.belongsTo('i-i-s-prilozhenie-41-карт-доступ', { inverse: 'базаДанных', async: false })
});

export let ValidationRules = {
  номерКарты: {
    descriptionKey: 'models.i-i-s-prilozhenie-41-база-данных.validations.номерКарты.__caption__',
    validators: [
      validator('ds-error'),
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
    номерКарты: attr('Номер Карты', { index: 0 })
  });
};
