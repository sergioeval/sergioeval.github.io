class HomeView {
  // define elements for Home
  _linkHome = document.getElementById("menuHome");
  _blogContent = document.getElementById("blog");
  _homeContent = document.getElementById("homeContent");
  _githubContent = document.getElementById("githubContent");
  _aboutMeContent = document.getElementById("aboutMeContent");
  _currentPagename = document.getElementById("currentPageName");

  constructor() {
    this.renderViewHandler();
  }

  showHome() {
    this._homeContent.classList.remove("hiden");
    this._githubContent.classList.add("hiden");
    this._blogContent.classList.add("hiden");
    this._aboutMeContent.classList.add("hiden");
    this._currentPagename.innerText = "Home";
  }

  renderViewHandler() {
    this._linkHome.addEventListener("click", this.showHome.bind(this));

    window.addEventListener("load", this.showHome.bind(this));
  }
}

export default new HomeView();
