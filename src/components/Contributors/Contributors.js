import './Contributors.css';

const renderContributors = (contributors) => {
	return contributors.map((contributor, index) => {
		const { username, githubUrl } = contributor;
		return `
			<div class="contributor-item" id="Contributors">
				<a href=${githubUrl} >
					<img src="https://avatars2.githubusercontent.com/u/13524077?v=4" alt="@${username}" />
				</a>
			</div>
		`
	}).join('\n');
}

const Contributors = () => {
	const contributors = [
		{ username: 'npranto', githubUrl: 'https://github.com/npranto' },
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