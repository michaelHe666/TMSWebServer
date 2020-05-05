$(document).ready(function () {
    mTownPlacesButtons();
});

function mTownPlacesButtons() {
    const homeButton=$('.mTown_places>span:nth-child(2):first');
    const mForestsButton=$('.mTown_places>span:nth-child(4):first');
    homeButton.click(function () {
        window.location.href='./mTown/home';
    });
    mForestsButton.click(function () {
        window.location.href='./mTown/mForests';
    });
}