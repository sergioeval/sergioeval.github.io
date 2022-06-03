"use strict";

let portFolio = [
	{
		Name: "Mongo to Dataframe",
		ProgrammingLanguage: "Python",
		Description: "Transformming mongo table to dataframe",
		Link: [
			"Gist",
			"https://gist.github.com/sergioeval/98d99fe1b46093e2abef8d2ae1f46c50",
		],
	},
];

//let table = document.querySelector("#portfolioTableBody");

//console.log(table);

const addRows = function (tableID, portfolio) {
	let table = document.getElementById(tableID);

	const numberOfRowsToAdd = portfolio.length;
	console.log(numberOfRowsToAdd);

	let cellNumber = 0;
	let rowCount = table.rows.length;
	portfolio.forEach((record) => {
		console.log(record);
		console.log(cellNumber);
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
};

addRows("tablePortfolio", portFolio);
