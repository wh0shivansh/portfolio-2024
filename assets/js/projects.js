const searchParams = new URLSearchParams(window.location.search);
const projectBanner = document.getElementById('project-banner');
const projectNameOne = document.getElementById('project-name-1');
const projectNameTwo = document.getElementById('project-name-2');
const projectDescription = document.getElementById('project-description');
const projectSliderImgOne = document.getElementById('slider-img-1');
const projectSliderImgTwo = document.getElementById('slider-img-2');
const projectSliderImgThree = document.getElementById('slider-img-3');
const projectSliderImgFour = document.getElementById('slider-img-4');
const projectExtraImgOne = document.getElementById('extra-img-1');
const projectExtraImgTwo = document.getElementById('extra-img-2');
const projectResponsibility = document.getElementById('responsibility');
const projectTimeline = document.getElementById('timeline'); 
const projectCompany = document.getElementById('project-company');

const nextProjectBanner = document.getElementById('next-project-banner');
const nextProjectNameOne = document.getElementById('next-project-name-1');
const nextProjectNameTwo = document.getElementById('next-project-name-2');
const nextProjectCompany = document.getElementById('next-project-company');

function fetchJSONData() {
    fetch("../../data/data.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => {
            const reqData = data.projects.filter((item) => item.id == id);
            const nextProjData = data.projects.filter((item) => item.id == reqData[0].nextProjectId);
            console.log(reqData,'reqdata');
            projectBanner.style.backgroundImage=`url(${reqData[0].mainBanner})`;
            projectNameOne.innerText = reqData[0].name.split(' ')[0];
            projectNameTwo.innerText = reqData[0].name.split(' ')[1];
            projectCompany.innerText = reqData[0].company;
            projectDescription.innerText = reqData[0].description;
            projectSliderImgOne.setAttribute('src', reqData[0].sliderImg1);
            projectSliderImgTwo.setAttribute('src', reqData[0].sliderImg2);
            projectSliderImgThree.setAttribute('src', reqData[0].sliderImg3);
            projectSliderImgFour.setAttribute('src', reqData[0].sliderImg4);
            projectResponsibility.innerText = reqData[0].responsibilities;
            projectTimeline.innerText = reqData[0].timeline;
            projectExtraImgOne.setAttribute('src', reqData[0].extraImg1);
            projectExtraImgTwo.setAttribute('src', reqData[0].extraImg2);

            nextProjectBanner.setAttribute('src', nextProjData[0].mainBanner);
            nextProjectNameOne.innerText = nextProjData[0].name.split(' ')[0];
            nextProjectNameTwo.innerText = nextProjData[0].name.split(' ')[1];
            nextProjectCompany.innerText = nextProjData[0].company;
            
        })
        .catch((error) =>
            console.error("Unable to fetch or process data:", error));
}
const id = searchParams.get('id');
fetchJSONData();