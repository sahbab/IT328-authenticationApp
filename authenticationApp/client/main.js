import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
Meteor.subscribe('userData');
userData = new Mongo.Collection('userData');

//Accounts.ui.config({
	//passwordSignupFields:'EMAIL_ONLY';
	//'USERNAME_ONLY'
//});