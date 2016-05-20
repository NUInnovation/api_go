Apis = new Mongo.Collection('Apis');

Schema = {};


Schema.StepSchema = new SimpleSchema({
	num: {
		type: String
	},
	title: {
		type: String
	},
	text: {
		type: String
	},
	image: {
		type: String
	},
	video: {
		type: String
	},
	code: {
		type: String
	},
	
});

Schema.PrereqSchema = new SimpleSchema({
	overview: {
		type: String,
	},
	stepsOfPrereq: {
		type: [Schema.StepSchema],
	},
	
});

Schema.TutorialSchema = new SimpleSchema({
	nameOfTutorial: {
		type: String
	},
	stepsOfTutorial: {
		type: [Schema.StepSchema],
	},
	
});


Schema.LanguageSchema = new SimpleSchema({
	nameOfLanguage: {
		type: String
	},
	prereq: {
		type: Schema.PrereqSchema,
	},
	tutorials: {
		type: [Schema.TutorialSchema],
	},
});

Schema.SampleWorkSchema = new SimpleSchema({
	textOfSampleWork: {
		type: String
	},
	linkOfSampleWork: {
		type: String
	}
});

Schema.ApisSchema = new SimpleSchema({
	nameOfApi: {
		type: String
	},
	intro: {
		type: String
	},
	languages: {
		type: [Schema.LanguageSchema],
	},
	sampleworks: {
		type: [Schema.SampleWorkSchema],
	},
});

Apis.attachSchema( Schema.ApisSchema );
