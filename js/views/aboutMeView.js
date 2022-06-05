class AboutMeView {
	// define elements for Home
	_linkAboutMe = document.getElementById("menuAboutMe");
	_aboutMeContent = document.getElementById("aboutMeContent");
	_blogContent = document.getElementById("blog");
	_githubContent = document.getElementById("githubContent");
	_homeContent = document.getElementById("homeContent");
	_skillsTable = document.getElementById("tableSkills");
	_skillsTableBody = document.getElementById("skillsTableBody");
	_currentPagename = document.getElementById("currentPageName");

	showView(skills) {
		this._homeContent.classList.add("hiden");
		this._githubContent.classList.add("hiden");
		this._blogContent.classList.add("hiden");
		this._aboutMeContent.classList.remove("hiden");
		this._currentPagename.innerText = "About Me";

		// also load skills
		let table = document.getElementById("skillsTableBody"); //this._skillsTableBody;
		let cellNumber = 0;
		let rowCount = table.rows.length;
		skills.forEach((record) => {
			let row = table.insertRow(rowCount);
			// inserting cell 0
			let cell = row.insertCell(0);
			cell.innerHTML = record.Skill;

			// inserting cell 1
			let cell2 = row.insertCell(1);
			cell2.innerHTML = record.Level;

			rowCount += 1;
		});
	}

	cleanSkillsTable() {
		const currentNumberRows =
			document.getElementById("skillsTableBody").rows.length;
		console.log("Rows are: ", currentNumberRows);
		for (let i = currentNumberRows; i > 0; i--) {
			document.getElementById("skillsTableBody").deleteRow(i - 1);
		}
	}

	renderViewHtml(handler) {
		this._linkAboutMe.addEventListener("click", handler);
	}
}

export default new AboutMeView();
