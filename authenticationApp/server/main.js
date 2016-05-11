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