function goBack() {
    if (window.history.length > 1) {
        window.history.back(); // Go to the previous page in the history
    } else {
        window.location.href = 'index.html'; // Redirect to a default page if no history exists
    }
}

function added(){
    alert('Added to list');
    window.location.href = 'list/updatedlist.html';
}

function added2(){
    alert('Added to list (Not Properly Implemented Yet, it will just add the recommended item)');
    window.location.href = 'list/updatedlist.html';
}