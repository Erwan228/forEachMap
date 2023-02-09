foreachfunction()
function foreachfunction() {
    model.jobs.forEach(myFunction)
    model.state = 'mainView';
    updateView;
}

function myFunction() {
    model.about += 'a'
}