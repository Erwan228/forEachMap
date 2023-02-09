function mainView() {
    model.jobs.forEach(myFunction)
    document.getElementById('scree').innerHTML = model.about;
}