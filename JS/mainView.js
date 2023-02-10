function mainView() {
    model.jobs.forEach(myFunction)
    model.Strength.forEach(myCunction)
    for (let i = 0; i < model.Strength; i++) {
        model.about2 += <div>${model.Strength[i]}</div>
    }
    document.getElementById('scree').innerHTML = model.about;
    document.getElementById('scree').innerHTML += newAee;
}

