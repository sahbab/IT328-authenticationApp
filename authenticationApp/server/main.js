import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  
});


Meteor.publish('userData', function(){
	//if someone is logged in?
	if( this.userId){
		return Meteor.users.find({'_id' : this.userId});
	}
	else{
		this.ready();//done
	}
});

Accounts.onCreateUser( function(option, user){
	
	user.profile = option.profile;
	user.profile.userType = 'basic_user';
	user.profile.address = {
		'street' : "",
		'city' :"",
		'state': "",
		'zip':''
	};
	user.profile.siteVisited = 1;
	
});