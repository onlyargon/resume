import { Injectable } from '@angular/core';
import { CvHeader } from '../models/cvHeader.model';
import { CvLink } from '../models/cvLinks.model';
import { CvSkillSection } from '../models/cvSkill.model';
import { CvSection } from '../models/section.model';

@Injectable({
	providedIn: 'root',
})
export class DataService {
	constructor() {}

	HeaderDetails: CvHeader = {
		name: 'Aruna Wickramasinghe',
		currentJobRole: 'Senior Software Engineer',
		email: 'arunawickram@gmail.com',
		phone: '+94 77 1603663',
	};

	Sections: CvSection[] = [
		{
			sectionName: 'Profile',
			details: [
				{
					id: 0,
					topic: '',
					timeframe: '',
					description:
						'To be a dynamic professional, working in a challenging environment that would enable me to enhance my skills and abilities in my software development career.',
					externalLinks: '',
				},
			],
		},
		{
			sectionName: 'Employment History',
			details: [
				{
					id: 4,
					topic:
						'Senior Software Engineer - Angular, Gapstars - Conxillium B.V, Colombo',
					timeframe: 'MAY 2022 - PRESENT',
					description: '',
					externalLinks: '',
				},
				{
					id: 3,
					topic: 'Senior Software Engineer - Full stack, IDS Next, Colombo',
					timeframe: 'DECEMBER 2019 - MAY 2022',
					description: '',
					externalLinks: '',
				},
				{
					id: 2,
					topic: 'Software Engineer, Zillione Business Solution, Colombo',
					timeframe: 'OCTOMBER 2017 - DECEMBER 2019',
					description: '',
					externalLinks: '',
				},
				{
					id: 1,
					topic: 'Designer, Aerial View, Colombo',
					timeframe: 'JUNE 2014 - DECEMBER 2016',
					description: '',
					externalLinks: '',
				},
			],
		},
		{
			sectionName: 'Internships',
			details: [
				{
					id: 1,
					topic: 'Intern software engineer, Zillione Business Solutions',
					timeframe: 'APRIL 2017 - OCTOMBER 2017',
					description: '',
					externalLinks: '',
				},
			],
		},
		{
			sectionName: 'Education',
			details: [
				{
					id: 1,
					topic:
						'Bsc in IT Specialize in Software Engineering, Sri Lanka Institute of Information Technology (SLIT), Malabe',
					timeframe: 'JANUARY 2015 - FEBRUARY 2019',
					description: '',
					externalLinks: '',
				},
				{
					id: 2,
					topic: 'Physical Science Stream, Kingswood Collage, Kandy',
					timeframe: 'JANUARY 2011 - AUGUST 2013',
					description: '',
					externalLinks: '',
				},
			],
		},
		{
			sectionName: 'Projects',
			details: [
				{
					id: 1,
					topic: 'Conxillium, Reppido',
					timeframe: 'MAY 2022 - PRESENT',
					description:
						'Cloud based application for Netherland citizens to report the issues on public envirenment and local government will be handling the reports and take care about that. \n Technologies: Angular, Rest API',
					externalLinks: '',
				},
				{
					id: 1,
					topic: 'IDS Next FX Fortune Cloud',
					timeframe: 'DECEMBER 2019 - MAY 2022',
					description:
						'Cloud based ERP solution for the hospitality industry. \n Technologies: Angular, Restful API, C# .Net, MSSQL',
					externalLinks: '',
				},
				{
					id: 2,
					topic: 'TIO – Time in office',
					timeframe: 'June 2019 - Present',
					description:
						'This is a simple mobile application that allows users to track their working hours in the office. It will remind the ideal working hours and minimum working hours per week based on initial values provided by the user.\n Technologies: Xamarin.Forms, SQLite, Syncfusion UI components',
					externalLinks: '',
				},
				{
					id: 2,
					topic: 'FreedOM (Mobile POS Application)',
					timeframe: 'JUNE 2017 - DECEMBER 2019',
					description:
						'FreedOM is a mobile POS application developed using Xamarin.Forms.\n Client: Dialog Axiata PLC. \n Project status: Successfully implemented and under live operation at dialog outlets. Dialog has reduced its counter queue length by providing service through the application. customers can change their SIM if the SIM lost, damaged. And also the application provides the device sales operation. customers can search for mobile phones, tablets, etc. \n Mobile App: Xamarin.Forms, Back-end: C# .Net, REST API DB: MSSQL',
					externalLinks: '',
				},
				{
					id: 2,
					topic: 'Zillione insurance broker system',
					timeframe: 'JULY 2018 - DECEMBER 2019',
					description:
						'Project description: Zillione insurance broker system is developed using Angular and C# \n Client: George Steuart PVT. <br><br> Project status: Successfully implemented and under live operation.\n Technologies:Angular, Material Design Back-end: C# .Net, REST API DB: MSSQL',
					externalLinks: '',
				},
				{
					id: 2,
					topic: 'UOC Online Payment System',
					timeframe: 'June 2018 - December 2019',
					description:
						'Project description: A system for the University of Colombo, to process their payments through the internet. It allows users to pay various types of payments. Its integrated with a Payment gateway which owns by a leading bank in Sri Lanka. \n Client: University of Colombo. \n Project status: Successfully implemented and under live operation. \n Technologies: technologies: Angular, Restful API Back-end technologies: C# .Net, MSSQL',
					externalLinks: '',
				},
			],
		},
		{
			sectionName: 'Research',
			details: [
				{
					id: 1,
					topic:
						'Google Map and Camera Based Fuzzified Adaptive Networked Traffic Light Handling Model',
					timeframe: 'January 2018 - December 2018',
					description:
						'This research paper was published at ICITR2018 which held on 05 December 2018 at the University of Moratuwa. Authors: Wickramasinghe P.W.M A. P, Thilakarathne H.P.R.L, Nirmani A, Sachini S, Heddala P.S (Sri Lanka Institute of Information Technology - Colombo, Sri Lanka)',
					externalLinks: 'https://ieeexplore.ieee.org/document/8736158',
				},
			],
		},
		{
			sectionName: 'References',
			details: [
				{
					id: 1,
					topic:
						'Mr. Tharindu Edirisinghe from La Trobe University | Bundoora, PhD Researcher - Cyber Security Department of Computer Science and Information Technology School of Engineering and Mathematical Sciences',
					timeframe: '',
					description: 'e.edirisinghe@latrobe.edu.au | +61 444 555 793',
					externalLinks: '',
				},
				{
					id: 2,
					topic:
						'Mr. Prasanna Sumathipala from SLIIT Malabe, Faculty of Computing, Senior Lecturer, Academic Coordinator',
					timeframe: '',
					description: 'prasanna.s@sliit.lk | +94714705502',
					externalLinks: '',
				},
			],
		},
	];

	SkillSection: CvSkillSection[] = [
		{
			sectionName: 'Skills',
			details: [
				{ id: 1, name: 'Angular', level: '95' },
				{ id: 2, name: 'HTML / CSS / SCSS', level: '95' },
				{ id: 3, name: 'C# .Net Core', level: '95' },
				{ id: 4, name: 'Xamarin', level: '95' },
				{ id: 5, name: 'JavaScript', level: '90' },
				{ id: 6, name: 'SQL', level: '80' },
				{ id: 7, name: 'Python', level: '70' },
			],
		},
		{
			sectionName: 'Languages',
			details: [
				{ id: 1, name: 'English', level: '90' },
				{ id: 2, name: 'Sinhala', level: '100' },
			],
		},
	];

	CvLinks: CvLink[] = [
		{
			linkName: 'Stackoverflow',
			icon: 'fa-stack-overflow',
			link: 'https://stackoverflow.com/users/5346755/argon?tab=profile',
		},
		{
			linkName: 'Github',
			icon: 'fa-github',
			link: 'https://github.com/onlyargon',
		},
		{
			linkName: 'Medium',
			icon: 'fa-medium',
			link: 'https://medium.com/@argon.js',
		},
	];
}
