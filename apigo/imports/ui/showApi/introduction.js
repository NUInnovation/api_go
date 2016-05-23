import { Template } from 'meteor/templating';
     
import './introduction.html';
 
Template.introduction.helpers({
	paragraphs: [
		{ text: 'The IBM AlchemyVision service provides an Application Programming Interface (API) that uses deep learning innovations to understand a picture\'s content and context. The methods in the AlchemyVision API can analyze an image and return information about the objects, people, and text found within that image. The AlchemyVision API can enhance the way businesses make decisions by integrating image cognition into their applications.'},
		{ text: 'The AlchemyVision API uses the term tagging to mean identifying keywords that are associated with an image or a face within an image, not to indicate that those keywords are being added as metadata to an image.'}
	],
});