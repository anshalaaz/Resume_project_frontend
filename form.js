function generateResume() {
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const dob = document.getElementById('dob').value;
    const address = document.getElementById('address').value;
    const summary = document.getElementById('summary').value;
    const skills = document.getElementById('skills').value.split(',').join(', ');

    
    const intermediateDegree = document.querySelector('[name="intermediateDegree"]').value;
    const intermediateInstitution = document.querySelector('[name="intermediateInstitution"]').value;
    const intermediateYear = document.querySelector('[name="intermediateYear"]').value;

    const ugDegree = document.querySelector('[name="ugDegree"]').value;
    const ugInstitution = document.querySelector('[name="ugInstitution"]').value;
    const ugYear = document.querySelector('[name="ugYear"]').value;

    const pgDegree = document.querySelector('[name="pgDegree"]').value;
    const pgInstitution = document.querySelector('[name="pgInstitution"]').value;
    const pgYear = document.querySelector('[name="pgYear"]').value;

    
    if (!name || !email || !phone || !dob || !address || !summary || !skills ||
        !intermediateDegree || !intermediateInstitution || !intermediateYear ||
        !ugDegree || !ugInstitution || !ugYear ||
        !pgDegree || !pgInstitution || !pgYear) {
        
        alert("Please fill in all fields before generating the resume.");
        return;
    }

    
    const photoInput = document.getElementById('photo');
    const photo = photoInput.files[0];
    const reader = new FileReader();
    
    reader.onloadend = function () {
        const resumeContent = `
            <div class="resume-header">
                <img src="${reader.result}" alt="Profile Photo">
                <div>
                    <h3>${name}</h3>
                    <p>Email: ${email}</p>
                    <p>Phone: ${phone}</p>
                    <p>Date of Birth: ${dob}</p>
                </div>
            </div>
            <div class="resume-section">
                <h4>Address:</h4>
                <p>${address}</p>
            </div>
            <div class="resume-section">
                <h4>Professional Summary:</h4>
                <p>${summary}</p>
            </div>
            <div class="resume-section">
                <h4>Skills:</h4>
                <p>${skills}</p>
            </div>
            <div class="resume-section">
                <h4>Qualifications:</h4>
                <table>
                    <tr>
                        <td>Intermediate</td>
                        <td>${intermediateDegree} - ${intermediateInstitution} - ${intermediateYear}</td>
                    </tr>
                    <tr>
                        <td>Undergraduate (UG)</td>
                        <td>${ugDegree} - ${ugInstitution} - ${ugYear}</td>
                    </tr>
                    <tr>
                        <td>Postgraduate (PG)</td>
                        <td>${pgDegree} - ${pgInstitution} - ${pgYear}</td>
                    </tr>
                </table>
            </div>
        `;

        document.getElementById('resumeContent').innerHTML = resumeContent;
        document.getElementById('resumeOutput').style.display = 'block';
    };

    if (photo) {
        reader.readAsDataURL(photo);
    }
}

function downloadResume() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const dob = document.getElementById('dob').value;
    const address = document.getElementById('address').value;
    const summary = document.getElementById('summary').value;
    const skills = document.getElementById('skills').value;

   
    const intermediateDegree = document.querySelector('[name="intermediateDegree"]').value;
    const intermediateInstitution = document.querySelector('[name="intermediateInstitution"]').value;
    const intermediateYear = document.querySelector('[name="intermediateYear"]').value;

    const ugDegree = document.querySelector('[name="ugDegree"]').value;
    const ugInstitution = document.querySelector('[name="ugInstitution"]').value;
    const ugYear = document.querySelector('[name="ugYear"]').value;

    const pgDegree = document.querySelector('[name="pgDegree"]').value;
    const pgInstitution = document.querySelector('[name="pgInstitution"]').value;
    const pgYear = document.querySelector('[name="pgYear"]').value;

    const photoInput = document.getElementById('photo');
    const photo = photoInput.files[0];
    const reader = new FileReader();

    reader.onloadend = function () {
        const imgData = reader.result;

       
        if (imgData) {
            
            doc.setDrawColor(0, 0, 0); 
            doc.setLineWidth(1);
            doc.rect(10, 10, 40, 40); 
            doc.addImage(imgData, 'JPEG', 10, 10, 40, 40); 
        }

        
        doc.setFont("helvetica");

        
        doc.setFontSize(24);
        doc.setTextColor(0, 56, 102); 
        doc.text(name, 60, 20);
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0); 
        doc.text(email, 60, 30); 
        doc.text(phone, 60, 40); 
        doc.text(`DOB: ${dob}`, 60, 50); 

        
        doc.setLineWidth(0.5);
        doc.setDrawColor(52, 152, 219); 
        doc.line(10, 55, 200, 55); 

        
        doc.setFontSize(16);
        doc.setTextColor(52, 152, 219);
        doc.text('Address:', 10, 70);
        doc.setTextColor(0, 0, 0); 
        doc.text(address, 10, 80);

       
        doc.line(10, 85, 200, 85);

        
        doc.setFontSize(16);
        doc.setTextColor(52, 152, 219); 
        doc.text('Professional Summary:', 10, 100);
        doc.setTextColor(0, 0, 0); 
        doc.text(summary, 10, 110);

       
        doc.line(10, 115, 200, 115);

        
        doc.setFontSize(16);
        doc.setTextColor(52, 152, 219); 
        doc.text('Skills:', 10, 130);
        
        doc.setTextColor(0, 0, 0); 
        doc.text(skills, 10, 140);

       
        doc.line(10, 145, 200, 145);

       
        doc.setFontSize(16);
        doc.setTextColor(52, 152, 219); 
        doc.text('Qualifications:', 10, 160);
        
        doc.setTextColor(0, 0, 0);
        doc.text(`Intermediate: ${intermediateDegree} - ${intermediateInstitution} - ${intermediateYear}`, 10, 170);
        doc.text(`UG: ${ugDegree} - ${ugInstitution} - ${ugYear}`, 10, 180);
        doc.text(`PG: ${pgDegree} - ${pgInstitution} - ${pgYear}`, 10, 190);

       
        doc.line(10, 195, 200, 195);

       
        doc.save(`${name}_Resume.pdf`);
    };

    if (photo) {
        reader.readAsDataURL(photo); 
    } else {
        reader.onloadend();
    }
}
