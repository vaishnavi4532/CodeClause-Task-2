function generateResume() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const experience = document.getElementById('experience').value;
  const education = document.getElementById('education').value;

  const resumeContent = `
      <h1>${name}</h1>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <h2>Experience</h2>
      <p>${experience}</p>
      <h2>Education</h2>
      <p>${education}</p>
  `;

  document.getElementById('resumeContent').innerHTML = resumeContent;
  document.getElementById('resumeOutput').style.display = 'block';
  document.getElementById('exportBtn').style.display = 'block';
}

document.getElementById('exportBtn').addEventListener('click', function() {
  const resumeContent = document.getElementById('resumeContent').innerHTML;
  
  const doc = new jsPDF();
  doc.fromHTML(resumeContent, 15, 15, {
      'width': 170
  });
  doc.save('resume.pdf');
});
