// Client Script: Toggle Subcategory visibility based on Category selection
function handleCategoryChange() {
    const category = document.getElementById('category').value;
    const subcategoryGroup = document.getElementById('subcategoryGroup');

    if (category === 'software' || category === 'network') {
        subcategoryGroup.classList.remove('hidden');
    } else {
        subcategoryGroup.classList.add('hidden');
    }
}

// Client Script: Calculate Priority based on Impact and Urgency
function calculatePriority() {
    const impact = parseInt(document.getElementById('impact').value);
    const urgency = parseInt(document.getElementById('urgency').value);
    const priorityInput = document.getElementById('priority');

    const score = impact + urgency;

    if (score === 2) {
        priorityInput.value = '1 - Critical';
    } else if (score === 3) {
        priorityInput.value = '2 - High';
    } else if (score === 4) {
        priorityInput.value = '3 - Moderate';
    } else if (score === 5) {
        priorityInput.value = '4 - Low';
    } else {
        priorityInput.value = '5 - Planning';
    }
}

// Form Validation & Submission Handler
document.getElementById('incidentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const caller = document.getElementById('caller').value;
    const category = document.getElementById('category').value;
    const shortDesc = document.getElementById('shortDescription').value;
    const errorMsg = document.getElementById('errorMessage');

    if (!caller || !category || !shortDesc) {
        errorMsg.classList.remove('hidden');
    } else {
        errorMsg.classList.add('hidden');
        alert('Incident submitted successfully!');
    }
});

function resetForm() {
    document.getElementById('incidentForm').reset();
    document.getElementById('subcategoryGroup').classList.add('hidden');
    calculatePriority();
}
