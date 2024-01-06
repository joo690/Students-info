let studentsInfo = document.querySelectorAll(".info");
let studentsInfoSelect = document.querySelectorAll(".select");
let firstTerm = document.querySelectorAll(".fTerm");
let secondTerm = document.querySelectorAll(".sTerm");
let showStudent = document.querySelector(".show");
let updateBtn = document.querySelector("#Update-btn");
/*================================= CREATE =================================*/
let studentsArr = JSON.parse(localStorage.getItem("students")) || [];
function createStudent() {
  let valid = true;
  for (let i = 0; i < studentsInfo.length; i++) {
    if (studentsInfo[i].value == "") {
      valid = false;
    }
  }
  if (studentsInfoSelect[0].value == "select your gender") {
    valid = false;
  }
  if (studentsInfoSelect[1].value == "Select your year") {
    valid = false;
  }
  for (let i = 0; i < firstTerm.length; i++) {
    if (firstTerm[i].value == "") {
      valid = false;
    }
  }
  for (let i = 0; i < secondTerm.length; i++) {
    if (secondTerm[i].value == "") {
      valid = false;
    }
  }
  if (valid == true) {
    let student = {
      Name: studentsInfo[0].value,
      Email: studentsInfo[1].value,
      Id: studentsInfo[2].value,
      imageURL: studentsInfo[3].value,
      Gender: studentsInfoSelect[0].value,
      Year: studentsInfoSelect[1].value,
      fTerm: [
        firstTerm[0].value,
        firstTerm[1].value,
        firstTerm[2].value,
        firstTerm[3].value,
      ],
      sTerm: [
        secondTerm[0].value,
        secondTerm[1].value,
        secondTerm[2].value,
        secondTerm[3].value,
      ],
    };
    studentsArr.push(student);
    localStorage.setItem("students", JSON.stringify(studentsArr));
    printStudent();
  } else {
    alert("Please fill out all the fields");
  }
}
/*================================= READ =================================*/
function printStudent() {
  showStudent.innerHTML = "";
  studentsArr.forEach((element, index) => {
    showStudent.innerHTML += `
        <div class="row mt-5 bg-danger p-4 align-items-center student-card">
        <div class="col-sm-12 col-lg-6 h-100 image-caption">
        <img
        src="${element.imageURL}"
            class="img-fluid border rounded mb-3"
            style="height: 40%"
            alt=""
            />
            <p>Name : ${element.Name}</p>
            <p>ID : ${element.Id}</p>
            <p>Year : ${element.Year}</p>
            </div>
            <div class="col-sm-12 col-lg-6 h-100 tables">
            <table
            class="table table-dark table-hover text-center border-success rounded h-100"
            >
            <tr>
            <th colspan="8">First Term</th>
            </tr>
            <tr>
            <th colspan="2" class="border">first subject</th>
            <th colspan="2" class="border">second subject</th>
            <th colspan="2" class="border">third subject</th>
            <th colspan="2" class="border">fourth subject</th>
            </tr>
            <tr>
            <th colspan="2" class="border">${element.fTerm[0]}</th>
            <th colspan="2" class="border">${element.fTerm[1]}</th>
            <th colspan="2" class="border">${element.fTerm[2]}</th>
            <th colspan="2" class="border">${element.fTerm[3]}</th>
            </tr>
            </table>
            <table
            class="table table-dark table-hover text-center border-success rounded h-50"
            >
            <tr>
            <th colspan="8">Second Term</th>
            </tr>
            <tr>
            <th colspan="2" class="border">first subject</th>
            <th colspan="2" class="border">second subject</th>
            <th colspan="2" class="border">third subject</th>
            <th colspan="2" class="border">fourth subject</th>
            </tr>
            <tr>
            <th colspan="2" class="border">${element.sTerm[0]}</th>
            <th colspan="2" class="border">${element.sTerm[1]}</th>
            <th colspan="2" class="border">${element.sTerm[2]}</th>
            <th colspan="2" class="border">${element.sTerm[3]}</th>
            </tr>
            </table>
            </div>
            </div>
            <div class="row mt-4">
            <div class="col-6">
              <button type="button" onclick = "editStudent(${index})" class="button ms-auto Edit-button">
                <span class="button__text">Edit</span>
                <span class="button__icon"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke="currentColor"
                    height="24"
                    fill="none"
                    class="svg"
                  >
                    <line y2="19" y1="5" x2="12" x1="12"></line>
                    <line y2="12" y1="12" x2="19" x1="5"></line></svg
                ></span>
              </button>
            </div>
            <div class="col-6">
              <button onclick = "deleteStudent(${index})" class="button me-auto Delete-button" type="button">
                <span class="button__text">Delete</span>
                <span class="button__icon"
                  ><svg
                    class="svg"
                    height="512"
                    viewBox="0 0 512 512"
                    width="512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title></title>
                    <path
                      d="M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320"
                      style="
                        fill: none;
                        stroke: #fff;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-width: 32px;
                      "
                    ></path>
                    <line
                      style="
                        stroke: #fff;
                        stroke-linecap: round;
                        stroke-miterlimit: 10;
                        stroke-width: 32px;
                      "
                      x1="80"
                      x2="432"
                      y1="112"
                      y2="112"
                    ></line>
                    <path
                      d="M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40"
                      style="
                        fill: none;
                        stroke: #fff;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-width: 32px;
                      "
                    ></path>
                    <line
                      style="
                        fill: none;
                        stroke: #fff;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-width: 32px;
                      "
                      x1="256"
                      x2="256"
                      y1="176"
                      y2="400"
                    ></line>
                    <line
                      style="
                        fill: none;
                        stroke: #fff;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-width: 32px;
                      "
                      x1="184"
                      x2="192"
                      y1="176"
                      y2="400"
                    ></line>
                    <line
                      style="
                        fill: none;
                        stroke: #fff;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-width: 32px;
                      "
                      x1="328"
                      x2="320"
                      y1="176"
                      y2="400"
                    ></line></svg
                ></span>
              </button>
            </div>
          </div>
            `;
  });
}
/*================================= UPDATE =================================*/
function editStudent(index) {
  let student = studentsArr[index];
  studentsInfo[0].value = student.Name;
  studentsInfo[1].value = student.Email;
  studentsInfo[2].value = student.Id;
  studentsInfo[3].value = student.imageURL;
  studentsInfoSelect[0].value = student.Gender;
  studentsInfoSelect[1].value = student.Year;
  firstTerm[0].value = student.fTerm[0];
  firstTerm[1].value = student.fTerm[1];
  firstTerm[2].value = student.fTerm[2];
  firstTerm[3].value = student.fTerm[3];
  secondTerm[0].value = student.sTerm[0];
  secondTerm[1].value = student.sTerm[1];
  secondTerm[2].value = student.sTerm[2];
  secondTerm[3].value = student.sTerm[3];
  updateBtn.innerText = "Update";
  updateBtn.classList.replace("btn-outline-primary", "btn-primary");
  updateBtn.setAttribute("onclick", `updateStudent(${index})`);
}
function updateStudent(index) {
  let valid = true;
  for (let i = 0; i < studentsInfo.length; i++) {
    if (studentsInfo[i].value == "") {
      valid = false;
    }
  }
  if (studentsInfoSelect[0].value == "select your gender") {
    valid = false;
  }
  if (studentsInfoSelect[1].value == "Select your year") {
    valid = false;
  }
  for (let i = 0; i < firstTerm.length; i++) {
    if (firstTerm[i].value == "") {
      valid = false;
    }
  }
  for (let i = 0; i < secondTerm.length; i++) {
    if (secondTerm[i].value == "") {
      valid = false;
    }
  }
  if (valid == true) {
    let student = {
      Name: studentsInfo[0].value,
      Email: studentsInfo[1].value,
      Id: studentsInfo[2].value,
      imageURL: studentsInfo[3].value,
      Gender: studentsInfoSelect[0].value,
      Year: studentsInfoSelect[1].value,
      fTerm: [
        firstTerm[0].value,
        firstTerm[1].value,
        firstTerm[2].value,
        firstTerm[3].value,
      ],
      sTerm: [
        secondTerm[0].value,
        secondTerm[1].value,
        secondTerm[2].value,
        secondTerm[3].value,
      ],
    };
    studentsArr[index] = student;
    localStorage.setItem("students", JSON.stringify(studentsArr));
    printStudent();
    updateBtn.innerText = "Submit";
    updateBtn.classList.replace("btn-primary", "btn-outline-primary");
    updateBtn.setAttribute("onclick", "createStudent()");
    clearInfo();
  } else {
    alert("Please fill out all the fields");
  }
}
function clearInfo() {
  studentsInfo[0].value = null;
  studentsInfo[1].value = null;
  studentsInfo[2].value = null;
  studentsInfo[3].value = null;
  studentsInfoSelect[0].value = "Select your gender";
  studentsInfoSelect[1].value = "Select your year";
  firstTerm[1].value = null;
  firstTerm[0].value = null;
  firstTerm[2].value = null;
  firstTerm[3].value = null;
  secondTerm[0].value = null;
  secondTerm[1].value = null;
  secondTerm[2].value = null;
  secondTerm[3].value = null;
}
/*================================= DELETE =================================*/
function deleteStudent(index) {
  studentsArr.splice(index, 1);
  localStorage.setItem("students", JSON.stringify(studentsArr));
  printStudent();
}
printStudent();
