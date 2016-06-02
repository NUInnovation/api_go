Apis = new Mongo.Collection('apis');

Schema = {};


Schema.StepSchema = new SimpleSchema({
	num: {
		type: String,
		label: "Step Number"
	},
	title: {
		type: String,
	},
	text: {
		type: String,
		label: "Description",
		autoform: {
		  afFieldInput: {
		    type: "textarea",
		    rows: 3
		  }
		}
	},
	image: {
		type: String,
		label: "Image link",
		optional: true,
		autoform: {
		  afFieldInput: {
		    type: "url"
		  }
		}
	},
	video: {
		type: String,
		label: "Video link",
		optional: true,
		autoform: {
		  afFieldInput: {
		    type: "url"
		  }
		}
	},
	code: {
		type: String,
		optional: true,
		autoform: {
		  afFieldInput: {
		    type: "textarea",
		    rows: 3,
		    class: "code"
		  }
		}
	},
	
});

Schema.PrereqSchema = new SimpleSchema({
	overview: {
		type: String,
		label: "Overview",
		autoform: {
		  afFieldInput: {
		    type: "textarea",
		    rows: 3
		  }
		}
	},
	stepsOfPrereq: {
		type: [Schema.StepSchema],
		label: "Step",
		optional: true,
	},
	
});

Schema.TutorialSchema = new SimpleSchema({
	nameOfTutorial: {
		type: String,
		label: "Tutorial Name"
	},
	stepsOfTutorial: {
		type: [Schema.StepSchema],
		label: "Tutorial Steps",
		optional: true,
	},
	
});


Schema.LanguageSchema = new SimpleSchema({
	nameOfLanguage: {
		type: String,
		label: "Language Name (i.e. Python, JavaScript, etc.)",
	},
	prereq: {
		type: Schema.PrereqSchema,
		label: "Prerequisites",
	},
	tutorials: {
		type: [Schema.TutorialSchema],
		label: "Tutorials",
		optional: true,
	},
});

Schema.SampleWorkSchema = new SimpleSchema({
	textOfSampleWork: {
		type: String,
		label: "Description of sample work"
	},
	linkOfSampleWork: {
		type: String,
		label: "Link"
	}
});




Schema.ApisSchema = new SimpleSchema({
	nameOfApi: {
		type: String,
		label: "API Name",
		autoform: {
		  afFieldInput: {
		    class: "half-input"
		  }
		}
	},
	intro: {
		type: String,
		label: "Introduction",
		autoform: {
		  afFieldInput: {
		    type: "textarea",
		    rows: 6,
		    class: "half-input",
		  }
		}

	},

	// languages: {
	// 	type: Array,
	// 	optional: true,
	// },

	// 'languages.$': {
	// 	type: Object,
	// },
	'languages.$.nameOfLanguage': {
		type: String,
		label: "Language Name (i.e. Python, JavaScript, etc.)",
	},
	'languages.$.prereq': {
		type: Object,
		label: "Prerequisites",
	},

	'languages.$.prereq.overview': {
		type: String,
		label: "Overview",
		autoform: {
		  afFieldInput: {
		    type: "textarea",
		    rows: 3
		  }
		},
	},
	'languages.$.prereq.stepsOfPrereq': {
		type: [Schema.StepSchema],
		label: "Step",
		optional: true,
	},

	'languages.$.tutorials.$': {
		type: Object,
		label: "Tutorials",
		optional: true,
	},
	'languages.$.tutorials.$.nameOfTutorial': {
		type: String,
		label: "Tutorial Name"
	},
	'languages.$.tutorials.$.stepsOfTutorial': {
		type: [Schema.StepSchema],
		label: "Tutorial Steps",
		optional: true,
	},


	// 'steps.$': {
	// 	type: Object,
	// },

	// 'steps.$.num': {
	// 	type: String,
	// 	label: "Step Number"
	// },
	// 'steps.$.title': {
	// 	type: String,
	// },
	// 'steps.$.text': {
	// 	type: String,
	// 	label: "Description",
	// 	autoform: {
	// 	  afFieldInput: {
	// 	    type: "textarea",
	// 	    rows: 3
	// 	  }
	// 	}
	// },
	// 'steps.$.image': {
	// 	type: String,
	// 	label: "Image link",
	// 	optional: true,
	// 	autoform: {
	// 	  afFieldInput: {
	// 	    type: "url"
	// 	  }
	// 	}
	// },
	// 'steps.$.video': {
	// 	type: String,
	// 	label: "Video link",
	// 	optional: true,
	// 	autoform: {
	// 	  afFieldInput: {
	// 	    type: "url"
	// 	  }
	// 	}
	// },
	// 'steps.$.code': {
	// 	type: String,
	// 	optional: true,
	// 	autoform: {
	// 	  afFieldInput: {
	// 	    type: "textarea",
	// 	    rows: 3,
	// 	    class: "code"
	// 	  }
	// 	}
	// },


	sampleworks: {
		type: Array,
		optional: true
	},
	'sampleworks.$': {
		type: Object, 
	},
	'sampleworks.$.textOfSampleWork': {
		type: String,
		label: "Description of sample work"
	},
	'sampleworks.$.linkOfSampleWork': {
		type: String,
		label: "Link"
	},
});

Apis.attachSchema( Schema.ApisSchema );

Apis.allow({
  update: function () {
    return true;
  }
});
