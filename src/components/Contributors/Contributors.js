import './Contributors.css';

const renderContributors = (contributors) => {
	return contributors.map((contributor, index) => {
		return `
			<div class="contributor-item">
				<img src="https://avatars2.githubusercontent.com/u/13524077?v=4" alt="Photo" />
			</div>
		`
	}).join('\n');
}

const Contributors = () => {
	const contributors = [
		{ name: 'Angular' },
		{ name: 'CSS3' },
		{ name: 'HTML5' },
		{ name: 'JavaScript' },
		{ name: 'MySQL' },
		{ name: 'Node.js' },
		{ name: 'Python' },
		{ name: 'React' },
		{ name: 'Ruby' },
		{ name: 'Sass' },
		{ name: 'Angular' },
		{ name: 'CSS3' },
		{ name: 'HTML5' },
		{ name: 'JavaScript' },
		{ name: 'MySQL' },
		{ name: 'Node.js' },
		{ name: 'Python' },
		{ name: 'React' },
		{ name: 'Ruby' },
		{ name: 'Sass' },
		{ name: 'Angular' },
		{ name: 'CSS3' },
		{ name: 'HTML5' },
		{ name: 'JavaScript' },
		{ name: 'MySQL' },
		{ name: 'Node.js' },
		{ name: 'Python' },
		{ name: 'React' },
		{ name: 'Ruby' },
		{ name: 'Sass' },
		{ name: 'Angular' },
		{ name: 'CSS3' },
		{ name: 'HTML5' },
		{ name: 'JavaScript' },
		{ name: 'MySQL' },
		{ name: 'Node.js' },
		{ name: 'Python' },
		{ name: 'React' },
		{ name: 'Ruby' },
		{ name: 'Sass' },
		{ name: 'Angular' },
		{ name: 'CSS3' },
		{ name: 'HTML5' },
		{ name: 'JavaScript' },
		{ name: 'MySQL' },
		{ name: 'Node.js' },
		{ name: 'Python' },
		{ name: 'React' },
		{ name: 'Ruby' },
		{ name: 'Sass' },
		{ name: 'Angular' },
		{ name: 'CSS3' },
		{ name: 'HTML5' },
		{ name: 'JavaScript' },
		{ name: 'MySQL' },
		{ name: 'Node.js' },
		{ name: 'Python' },
		{ name: 'React' },
		{ name: 'Ruby' },
		{ name: 'Sass' },
		{ name: 'Angular' },
		{ name: 'CSS3' },
		{ name: 'HTML5' },
		{ name: 'JavaScript' },
		{ name: 'MySQL' },
		{ name: 'Node.js' },
		{ name: 'Python' },
		{ name: 'React' },
		{ name: 'Ruby' },
		{ name: 'Sass' },
		{ name: 'Angular' },
		{ name: 'CSS3' },
		{ name: 'HTML5' },
		{ name: 'JavaScript' },
		{ name: 'MySQL' },
		{ name: 'Node.js' },
		{ name: 'Python' },
		{ name: 'React' },
		{ name: 'Ruby' },
		{ name: 'Sass' },
		{ name: 'Angular' },
		{ name: 'CSS3' },
		{ name: 'HTML5' },
		{ name: 'JavaScript' },
		{ name: 'MySQL' },
		{ name: 'Node.js' },
		{ name: 'Python' },
		{ name: 'React' },
		{ name: 'Ruby' },
		{ name: 'Sass' },
		{ name: 'Angular' },
		{ name: 'CSS3' },
		{ name: 'HTML5' },
		{ name: 'JavaScript' },
		{ name: 'MySQL' },
		{ name: 'Node.js' },
		{ name: 'Python' },
		{ name: 'React' },
		{ name: 'Ruby' },
		{ name: 'Sass' }
	];

	return `
		<div class="Contributors">
			<h1 class="content-subtitle"> Contributors </h1>
			<div class="contributor-list">
				${renderContributors(contributors)}
			</div>
		</div>
	`
};

export default Contributors;