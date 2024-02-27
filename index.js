const countryCodeSelect = document.getElementById('countryCodeSelect');
const submissionForm = document.getElementById('submissionForm');

const countryCodes = {
    '🇦🇱 +355': 'ALB',
    '🇽🇰 +383': 'KS',
};

for (const code in countryCodes) {
    const option = document.createElement('option');
    option.value = countryCodes[code];
    option.textContent = code;
    countryCodeSelect.appendChild(option);
}

submissionForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const companyName = document.getElementById('companyNameInput').value;
    const phoneNumber = document.getElementById('phoneNumberInput').value;
    const selectedCountryCode = countryCodeSelect.value;
    const sector = document.getElementById('sectorInput').value;

    const formData = {
        company_name: companyName,
        phone_number: phoneNumber,
        country_code: selectedCountryCode,
        sector: sector
    };

    try {
        const response = await fetch('https://www.google.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            console.log('Form submitted successfully! Miku');
        } else {
            console.error('Form submission failed! Vari karet');
        }
    } catch (error) {
        console.error(error);
    }
});


function selectTab(event) {
    document.querySelectorAll('.topHeader a').forEach(function (link) {
        link.classList.remove('selected');
    });

    event.target.classList.add('selected');
}