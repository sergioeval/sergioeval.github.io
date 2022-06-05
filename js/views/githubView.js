class GithubView {
  _linkGithub = document.getElementById("menuGithub");
  _aboutMeContent = document.getElementById("aboutMeContent");
  _blogContent = document.getElementById("blog");
  _homeContent = document.getElementById("homeContent");
  _githubContent = document.getElementById("githubContent");
  _currentPagename = document.getElementById("currentPageName");

  showView(githubData) {
    this._homeContent.classList.add("hiden");
    this._blogContent.classList.add("hiden");
    this._aboutMeContent.classList.add("hiden");
    this._githubContent.classList.remove("hiden");
    this._currentPagename.innerText = "Github Gits and Projects";

    // also load githubData
    let table = document.getElementById("githubContentBody"); //this._skillsTableBody;
    let cellNumber = 0;
    let rowCount = table.rows.length;
    githubData.forEach((record) => {
      let row = table.insertRow(rowCount);
      // inserting cell 0
      let cell = row.insertCell(0);
      cell.innerHTML = record.Name;
      // inserting cell 1
      let cell2 = row.insertCell(1);
      cell2.innerHTML = record.ProgrammingLanguage;

      //Inserting cell description
      let cell3 = row.insertCell(2);
      cell3.innerHTML = record.Description;

      // inserting link
      let cell4 = row.insertCell(3);
      let link = document.createElement("a");
      link.innerText = record.Link[0];
      link.href = record.Link[1];
      link.target = "_blank";
      cell4.appendChild(link);

      rowCount += 1;
    });
  }

  cleanTable() {
    const currentNumberRows =
      document.getElementById("githubContentBody").rows.length;
    for (let i = currentNumberRows; i > 0; i--) {
      document.getElementById("githubContentBody").deleteRow(i - 1);
    }
  }

  renderViewHtml(handler) {
    this._linkGithub.addEventListener("click", handler);
  }
}

export default new GithubView();
