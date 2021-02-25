function callAPI(url) {
    return new Promise((resolve, reject) => {
        $.getJSON(url + '&_=' + new Date().getTime(), function(data) {
            resolve(data);
        },
        function(err) {
            reject(err);
        })
    })
}

async function getStudyList(callback) {
    const patients = await callAPI('http://breastscreening.arditi.pt:8450/patients?expand')
    const p = patients.reduce((prev, next) => {
        return prev.concat(next.Studies);
    }, []).map(studyId => {
        const url = 'http://breastscreening.arditi.pt:8450/studies/' + studyId + '?';
        return callAPI(url).then(result => result);
    })

    return Promise.all(p).then(result => {
        callback(result);
        console.log("Promise Result: " + result);
    })
}

getStudyList((studyList) => {
    console.log("Get Study List From: " + studyList);
})
