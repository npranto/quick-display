import Angular from './../../assets/images/angular-icon.png';
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
		{ name: 'Angular', photo: Angular },
		{ name: 'Angular', photo: Angular },
		{ name: 'Angular', photo: Angular },
		{ name: 'Angular', photo: Angular },
		{ name: 'Angular', photo: Angular },
		{ name: 'Angular', photo: Angular },
		{ name: 'Angular', photo: Angular },
		{ name: 'Angular', photo: Angular },
		{ name: 'Angular', photo: Angular }
	];

	return `
		<div class="Technologies">
			<h1 class="content-subtitle"> Technologies </h1>
			<div class="technology-list">
				${renderTechnologies(technologies)}
				<div class="technology-item">
					<img src=${Angular} alt="Icon" />
				</div>
				<div class="technology-item">
					<img src=${Angular} alt="Icon" />
				</div>
				<div class="technology-item">
					<img src=${Angular} alt="Icon" />
				</div>
				<div class="technology-item">
					<img src=${Angular} alt="Icon" />
				</div>
				<div class="technology-item">
					<img src=${Angular} alt="Icon" />
				</div>
			</div>
		</div>
	`
};

export default Technologies;