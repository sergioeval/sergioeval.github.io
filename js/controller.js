import homeView from "./views/homeView.js";
import aboutMeView from "./views/aboutMeView.js";
import githubView from "./views/githubView.js";
import blogView from "./views/blogView.js";
import * as model from "./model.js";

// ------------ HOME --------------------
// no need right now
// ------------ HOME --------------------
// ------------ ABOUT ME -----------------
const controlAboutMeView = async function () {
  // initi about me skills
  await model.loadSkills();
  aboutMeView.cleanSkillsTable();
  aboutMeView.showView(model.state.skills);
};
// ------------ ABOUT ME -----------------

// ------------ GITHUB View-----------------
const controlGithubView = async function () {
  await model.loadGithub();
  githubView.cleanTable();
  githubView.showView(model.state.github);
};
// ------------ GITHUB View-----------------

// ------------ Blog Data --------------
const controlBlog = async function () {
  await model.loadBlog();
  blogView.cleanTable();
  blogView.showView(model.state.blog);
};
// ------------ Blog Data --------------

//------------ INIT -------------------
const init = function () {
  aboutMeView.renderViewHtml(controlAboutMeView);
  githubView.renderViewHtml(controlGithubView);
  blogView.renderViewHtml(controlBlog);
};

init();
