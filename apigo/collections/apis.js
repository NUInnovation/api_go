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
	languages: {
		type: [Schema.LanguageSchema],
		optional: true,
	},
	sampleworks: {
		type: [Schema.SampleWorkSchema],
		label: "Examples",
		optional: true,
	},
});

Apis.attachSchema( Schema.ApisSchema );
