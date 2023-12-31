const categories = [
	["All", "light"],
	["Web", "success"],
	["Python", "warning"],
	["HTML/CSS", "primary"],
	["Javascript", "danger"],
	// ["C/C++", "info"]
]

const projects = [
	{
		"img": require('./img/projects/NYCTaxi.jpg'),
		"title": "New York City Taxi Ride Time Analysis, Class Project",
		"description": "Implemented spatial analysis using Apache Spark and Hadoop systems to assist small NYC cab services in optimizing operational decisions and increasing revenue. ",
		"techstack": "Tech Stack: Apache Spark, Hadoop, Python.",
		"link": "",
		// "category": "Android"
	},
	{
		"img": require('./img/projects/OnlineCar.jpg'),
		"title": "Online Car Parking System, Class Project",
		"description": "Developed an advanced web-based Car Parking System with real-time space monitoring, reservations, user authentication, and availability notifications.",
		"techstack": "Tech Stack: Java, NetBeans, PostgreSQL.",
		"link": "https://github.com/sreyasukavasi3/CarParking",
		// "category": "Python"
	},
	{
		"img": require('./img/projects/browserext.jpg'),
		"title": "Social Browser Extension, Class Project",
		"description": "This project creates a personalized news recommendation system using NLP, web scraping, and machine learning to deliver relevant news articles based on the user's browsing history.",
		"techstack": "Tech Stack: Natural Language Processing, Web Scraping, Chrome history API, HTTP Server.",
		"link": "https://github.com/sreyasukavasi3/Social_Browser_Extention/tree/main",
		// "category": "HTML/CSS"
	},
	{
		"img": require('./img/projects/Steg.jpg'),
		"title": "Steganography: Image Processing using Python, Personal Project",
		"description": "Implemented steganography techniques to encrypt data and conceal it within images, enhancing data security.",
		"techstack": "Tech Stack: Python, Digital Image Processing, Vigenere cipher algorithm.",
		"link": "https://drive.google.com/file/d/1QxOG57uhsvEym-Zhpju4O4LJJzO_BR4l/view?usp=sharing",
		// "category": "HTML/CSS"
	},
	{
		"img": require('./img/projects/SER.jpg'),
		"title": "Speech Emotion Recognition System, Personal Project",
		"description": "Programmed a speech emotion recognition system utilizing Convolutional Neural Network (CNN) to classify individuals emotions into 6 categories with 89% accuracy using speech signal features from the RAVDESS and TESS datasets.",
		"techstack": "Tech Stack: Python, Machine Learning, NumPy, Pandas, TensorFlow, Jupyter Notebook.",
		"link": "https://colab.research.google.com/drive/1pE8FLzAtvirzpFPbVqBJUTZIQffhHeFQ?usp=sharing",
		// "category": "Python"
	},
	// {
	// 	"img": "",
	// 	"title": "Formula 1 Dashboard",
	// 	"description": "",
	// 	"link": "https://ninkuk.github.io/F1-Viz-Dashboard/",
	// 	"category": "Javascript"
	// },
	// {
	// 	"img": "",
	// 	"title": "American Food Access Visualizations",
	// 	"description": "",
	// 	"link": "https://github.com/Ninkuk/American-Food-Access-Visualization",
	// 	"category": "Javascript"
	// },
	// {
	// 	"img": require('./img/projects/asu.png'),
	// 	"title": "ASU Automation Scripts",
	// 	"description": "Python scripts to automate myASU and Canvas tasks. Includes utilities for class search and availability.",
	// 	"link": "https://github.com/Ninkuk/ASU_Scripts",
	// 	"category": "Python"
	// },
	// {
	// 	"img": "",
	// 	"title": "Photoshelter Migration",
	// 	"description": "",
	// 	"link": "",
	// 	"category": "Python"
	// },
]

const workExperience = [
	{
		"title": "Coding and Research Aide",
		"description": "Employer: Arizona State University",
		"period": "May 2022 - Present",
		"link": "",
		"category": "Part-time"
	},
	{
		"title": "Decision Analytics Associate",
		"description": "Employer: ZS Associates",
		"period": "Jul 2021 - Dec 2021",
		"link": "",
		"category": "Full-time"
	},
	{
		"title": "Decision Analytics Associate Intern",
		"description": "Employer: ZS Associates",
		"period": "Jan 2021 - Jun 2021",
		"link": "",
		"category": "Internship"
	},
	// {
	// 	"title": "Student Graphic Designer",
	// 	"description": "",
	// 	"startDate": "",
	// 	"endDate": "",
	// 	"link": "",
	// 	"category": "Student Job"
	// },
]

const certifications = [
	{
		"img": require('./img/certifications/ML.jpg'),
		"title": "Fundamentals of Machine Learning",
		"description": "",
		"link": "https://coursera.org/share/6d38b9c3e8d7127c30be4e9baa263a87",
		"date": ""
	},
	{
		"img": require('./img/certifications/DL.jpg'),
		"title": "Fundamentals of Deep Learning for Computer Vision",
		"description": "",
		"link": "https://courses.nvidia.com/certificates/4570289b652d441db1c8a10144716ff2",
		"date": ""
	},
	// {
	// 	"img": "",
	// 	"title": "FBLA E-Business",
	// 	"description": "",
	// 	"date": ""
	// },
	// {
	// 	"img": "",
	// 	"title": "FBLA Mobile Application Development",
	// 	"description": "",
	// 	"date": ""
	// }
]

export {categories, projects, workExperience, certifications};
