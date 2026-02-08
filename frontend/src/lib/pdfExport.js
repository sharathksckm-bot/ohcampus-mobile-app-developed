import jsPDF from 'jspdf';
import 'jspdf-autotable';

const formatCurrency = (amount) => {
  if (!amount) return '—';
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

export const exportFeeToPDF = (college, feeSummary, courses) => {
  const doc = new jsPDF();
  
  // Header
  doc.setFontSize(20);
  doc.setTextColor(0, 102, 204); // OhCampus blue
  doc.text('OhCampus', 14, 20);
  
  doc.setFontSize(10);
  doc.setTextColor(100);
  doc.text('Counselor Platform - Fee Structure', 14, 27);
  
  // College Name
  doc.setFontSize(16);
  doc.setTextColor(0, 0, 0);
  doc.text(college.name, 14, 40);
  
  // College Details
  doc.setFontSize(10);
  doc.setTextColor(100);
  doc.text(`${college.city}, ${college.state}`, 14, 47);
  if (college.address) {
    doc.text(college.address, 14, 53);
  }
  if (college.accreditation) {
    doc.text(`Accreditation: ${college.accreditation}`, 14, 59);
  }
  
  let yPosition = 70;
  
  // Fee Summary for each course
  feeSummary.forEach((summary, index) => {
    const { course, fee_type, fees, admission_charges, totals } = summary;
    
    // Check if we need a new page
    if (yPosition > 250) {
      doc.addPage();
      yPosition = 20;
    }
    
    // Course Header
    doc.setFontSize(12);
    doc.setTextColor(0, 102, 204);
    doc.text(`${course.name}`, 14, yPosition);
    
    doc.setFontSize(9);
    doc.setTextColor(100);
    doc.text(`${course.level} | ${course.duration} | ${fee_type === 'annual' ? 'Annual Fees' : 'Semester Fees'}`, 14, yPosition + 5);
    
    yPosition += 12;
    
    // Fee Table
    const feeTableData = fees.map(fee => [
      fee_type === 'annual' ? `Year ${fee.year_or_semester}` : `Semester ${fee.year_or_semester}`,
      formatCurrency(fee.amount),
      fee.hostel_fee ? formatCurrency(fee.hostel_fee) : '—'
    ]);
    
    doc.autoTable({
      startY: yPosition,
      head: [[fee_type === 'annual' ? 'Year' : 'Semester', 'Tuition Fee', 'Hostel Fee']],
      body: feeTableData,
      theme: 'grid',
      headStyles: { 
        fillColor: [0, 102, 204],
        textColor: [255, 255, 255],
        fontSize: 9
      },
      bodyStyles: { fontSize: 9 },
      columnStyles: {
        0: { cellWidth: 40 },
        1: { cellWidth: 50, halign: 'right' },
        2: { cellWidth: 50, halign: 'right' }
      },
      margin: { left: 14, right: 14 }
    });
    
    yPosition = doc.lastAutoTable.finalY + 5;
    
    // Admission Charges
    if (admission_charges) {
      const chargeItems = [];
      if (admission_charges.registration_fee) chargeItems.push(['Registration Fee', formatCurrency(admission_charges.registration_fee)]);
      if (admission_charges.admission_fee) chargeItems.push(['Admission Fee', formatCurrency(admission_charges.admission_fee)]);
      if (admission_charges.caution_deposit) chargeItems.push(['Caution Deposit', formatCurrency(admission_charges.caution_deposit)]);
      if (admission_charges.uniform_fee) chargeItems.push(['Uniform Fee', formatCurrency(admission_charges.uniform_fee)]);
      if (admission_charges.library_fee) chargeItems.push(['Library Fee', formatCurrency(admission_charges.library_fee)]);
      if (admission_charges.lab_fee) chargeItems.push(['Lab Fee', formatCurrency(admission_charges.lab_fee)]);
      if (admission_charges.other_charges) chargeItems.push([admission_charges.other_charges_description || 'Other Charges', formatCurrency(admission_charges.other_charges)]);
      
      if (chargeItems.length > 0) {
        doc.setFontSize(10);
        doc.setTextColor(128, 0, 128);
        doc.text('Admission Charges (One-time)', 14, yPosition + 5);
        yPosition += 8;
        
        doc.autoTable({
          startY: yPosition,
          body: chargeItems,
          theme: 'plain',
          bodyStyles: { fontSize: 9 },
          columnStyles: {
            0: { cellWidth: 60 },
            1: { cellWidth: 40, halign: 'right' }
          },
          margin: { left: 14, right: 14 }
        });
        
        yPosition = doc.lastAutoTable.finalY + 5;
      }
    }
    
    // Totals
    doc.setFillColor(240, 248, 255);
    doc.rect(14, yPosition, 182, 25, 'F');
    
    doc.setFontSize(9);
    doc.setTextColor(100);
    doc.text('Total Tuition:', 20, yPosition + 7);
    doc.text('Total Hostel:', 70, yPosition + 7);
    doc.text('Admission Charges:', 120, yPosition + 7);
    
    doc.setFontSize(10);
    doc.setTextColor(0);
    doc.text(formatCurrency(totals.tuition_total), 20, yPosition + 14);
    doc.setTextColor(0, 102, 204);
    doc.text(formatCurrency(totals.hostel_total), 70, yPosition + 14);
    doc.setTextColor(128, 0, 128);
    doc.text(formatCurrency(totals.admission_total), 120, yPosition + 14);
    
    doc.setFontSize(10);
    doc.setTextColor(0, 102, 204);
    doc.text(`Grand Total (excl. Hostel): ${formatCurrency(totals.grand_total_without_hostel)}`, 20, yPosition + 22);
    
    yPosition += 35;
  });
  
  // Footer
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(150);
    doc.text(`Generated by OhCampus Counselor Platform | Page ${i} of ${pageCount}`, 14, 290);
    doc.text(new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' }), 170, 290);
  }
  
  // Save the PDF
  const fileName = `${college.name.replace(/[^a-zA-Z0-9]/g, '_')}_Fee_Structure.pdf`;
  doc.save(fileName);
  
  return fileName;
};

export const exportComparisonToPDF = (compareData) => {
  const doc = new jsPDF('landscape');
  
  // Header
  doc.setFontSize(20);
  doc.setTextColor(0, 102, 204);
  doc.text('OhCampus', 14, 20);
  
  doc.setFontSize(12);
  doc.setTextColor(100);
  doc.text('College Comparison Report', 14, 27);
  
  // College Names Row
  const collegeNames = compareData.map(d => d.college.name);
  const tableHead = [['Attribute', ...collegeNames]];
  
  // Build comparison data
  const tableBody = [
    ['Location', ...compareData.map(d => `${d.college.city}, ${d.college.state}`)],
    ['Category', ...compareData.map(d => d.college.category)],
    ['Accreditation', ...compareData.map(d => d.college.accreditation || '—')],
    ['Established', ...compareData.map(d => d.college.established || '—')],
    ['Courses', ...compareData.map(d => d.courses.length.toString())],
  ];
  
  // Add fee summary for first course of each college
  compareData.forEach((data, idx) => {
    const firstCourseId = Object.keys(data.fees_by_course)[0];
    if (firstCourseId) {
      const feeData = data.fees_by_course[firstCourseId];
      const course = data.courses.find(c => c.id === firstCourseId);
      if (idx === 0) {
        tableBody.push(['Fee Example', ...compareData.map(d => {
          const firstId = Object.keys(d.fees_by_course)[0];
          if (firstId) {
            const fd = d.fees_by_course[firstId];
            return `${formatCurrency(fd.total_tuition)} (Total)`;
          }
          return '—';
        })]);
      }
    }
  });
  
  doc.autoTable({
    startY: 35,
    head: tableHead,
    body: tableBody,
    theme: 'grid',
    headStyles: { 
      fillColor: [0, 102, 204],
      textColor: [255, 255, 255],
      fontSize: 9,
      halign: 'center'
    },
    bodyStyles: { fontSize: 8 },
    columnStyles: {
      0: { fontStyle: 'bold', fillColor: [245, 245, 245] }
    },
    margin: { left: 14, right: 14 }
  });
  
  // Footer
  doc.setFontSize(8);
  doc.setTextColor(150);
  doc.text(`Generated by OhCampus Counselor Platform | ${new Date().toLocaleDateString('en-IN')}`, 14, 200);
  
  doc.save('College_Comparison.pdf');
};

export default { exportFeeToPDF, exportComparisonToPDF };
