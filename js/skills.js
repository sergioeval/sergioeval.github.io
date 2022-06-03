"use strict";

const mySkills = async function () {
	const res = await fetch("jsons/skills.json");
	const data = await res.json();
	return data;
};

//let table = document.querySelector("#skillsTableBody");

//console.log(table);

const addRows = async function (tableID) {
	const skills = await mySkills();
	let table = document.getElementById(tableID);

	// const numberOfRowsToAdd = skills.length;
	let cellNumber = 0;
	let rowCount = table.rows.length;
	skills.forEach((record) => {
		console.log(record);
		console.log(cellNumber);
		let row = table.insertRow(rowCount);
		// inserting cell 0
		let cell = row.insertCell(0);
		cell.innerHTML = record.Skill;

		// inserting cell 1
		let cell2 = row.insertCell(1);
		cell2.innerHTML = record.Level;

		rowCount += 1;
	});
};

addRows("tableSkills");
