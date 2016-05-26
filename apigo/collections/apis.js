Apis = new Mongo.Collection('apis');

Schema = {};

Schema.StepSchema = new SimpleSchema({
	num: {
		type: String,
		label: "Step Number"
	},
	title: {
		type: String
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
		label: "Image link"
	},
	video: {
		type: String,
		label: "Embed video code",
		autoform: {
		  afFieldInput: {
		    type: "textarea",
		    rows: 3
		  }
		}
	},
	code: {
		type: String,
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
		label: "Step"
	},
	
});

Schema.TutorialSchema = new SimpleSchema({
	nameOfTutorial: {
		type: String,
		label: "Tutorial Name"
	},
	stepsOfTutorial: {
		type: [Schema.StepSchema],
		label: "Tutorial Steps"
	},
	
});


Schema.LanguageSchema = new SimpleSchema({
	nameOfLanguage: {
		type: String,
		label: "Language Name (i.e. Python, JavaScript, etc.)"
	},
	prereq: {
		type: Schema.PrereqSchema,
		label: "Prerequisites"
	},
	tutorials: {
		type: [Schema.TutorialSchema],
		label: "Tutorials"
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
		    class: "half-input"
		  }
		}

	},
	languages: {
		type: [Schema.LanguageSchema]
	},
	sampleworks: {
		type: [Schema.SampleWorkSchema],
		label: "Examples"
	},
});

Apis.attachSchema( Schema.ApisSchema );
