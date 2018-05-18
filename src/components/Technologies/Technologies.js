import Angular from './../../assets/images/angular-icon.png';
import Css3 from './../../assets/images/css3-icon.png';
import Html5 from './../../assets/images/html5-icon.png';
import Javascript from './../../assets/images/javascript-icon.png';
import MySql from './../../assets/images/mysql-icon.png';
import NodeJs from './../../assets/images/nodejs-icon.png';
import Python from './../../assets/images/python-icon.png';
import React from './../../assets/images/react-icon.png';
import Ruby from './../../assets/images/ruby-icon.png';
import Sass from './../../assets/images/sass-icon.png';
import './Technologies.css';

const renderTechnologies = (technologies) => {
	return technologies.map((technology, index) => {
		const { name, photo } = technology;
		return `
			<div class="technology-item">
				<img src=${photo} alt=${name} />
			</div>
		`
	}).join('\n');
}

const Technologies = () => {
	const technologies = [
		{ name: 'Angular', photo: Angular },
		{ name: 'CSS3', photo: Css3 },
		{ name: 'HTML5', photo: Html5 },
		{ name: 'JavaScript', photo: Javascript },
		{ name: 'MySQL', photo: MySql },
		{ name: 'Node.js', photo: NodeJs },
		{ name: 'Python', photo: Python },
		{ name: 'React', photo: React },
		{ name: 'Ruby', photo: Ruby },
		{ name: 'Sass', photo: Sass }
	];

	return `
		<div class="Technologies">
			<h1 class="content-subtitle"> Technologies </h1>
			<div class="technology-list">
				${renderTechnologies(technologies)}
			</div>
		</div>
	`
};

export default Technologies;