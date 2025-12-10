// PDF Generation utility for Playbook Selector recommendations
// Uses browser's print functionality to generate PDF

interface RecommendationData {
  pillarName: string;
  confidence: number;
  reason: string;
  talkTrack: string;
  discoveryQuestions: string[];
  valueProps: string[];
  persona: string;
  painPoint: string;
  industry: string;
}

export function generateRecommendationPDF(data: RecommendationData) {
  // Create a new window for PDF generation
  const printWindow = window.open('', '_blank');
  
  if (!printWindow) {
    alert('Please allow popups to download the PDF');
    return;
  }

  // Build HTML content for PDF
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Playbook Recommendation - ${data.pillarName}</title>
      <style>
        @page {
          size: A4;
          margin: 20mm;
        }
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
          line-height: 1.6;
          color: #1a1a1a;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        
        .header {
          text-align: center;
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 3px solid #e91e63;
        }
        
        .logo {
          font-size: 24px;
          font-weight: bold;
          color: #e91e63;
          margin-bottom: 10px;
        }
        
        .recommendation-badge {
          background: linear-gradient(135deg, #e91e63, #00bcd4);
          color: white;
          padding: 20px;
          border-radius: 12px;
          margin-bottom: 30px;
          text-align: center;
        }
        
        .recommendation-badge h1 {
          margin: 0 0 10px 0;
          font-size: 32px;
        }
        
        .confidence {
          font-size: 48px;
          font-weight: bold;
          margin: 10px 0;
        }
        
        .reason {
          font-size: 16px;
          opacity: 0.95;
        }
        
        .section {
          margin-bottom: 30px;
          page-break-inside: avoid;
        }
        
        .section-title {
          font-size: 20px;
          font-weight: bold;
          color: #e91e63;
          margin-bottom: 15px;
          padding-bottom: 8px;
          border-bottom: 2px solid #f0f0f0;
        }
        
        .talk-track {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
          border-left: 4px solid #e91e63;
          font-style: italic;
          margin-bottom: 15px;
        }
        
        .question-list, .value-list {
          list-style: none;
          padding: 0;
        }
        
        .question-list li, .value-list li {
          padding: 12px 0;
          border-bottom: 1px solid #e0e0e0;
        }
        
        .question-list li:last-child, .value-list li:last-child {
          border-bottom: none;
        }
        
        .question-number {
          display: inline-block;
          width: 28px;
          height: 28px;
          background: #e91e63;
          color: white;
          border-radius: 50%;
          text-align: center;
          line-height: 28px;
          margin-right: 12px;
          font-weight: bold;
        }
        
        .bullet {
          color: #e91e63;
          margin-right: 10px;
          font-weight: bold;
        }
        
        .selections-box {
          background: #f0f7ff;
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 30px;
        }
        
        .selections-box h3 {
          margin-top: 0;
          color: #1976d2;
        }
        
        .selection-item {
          margin: 10px 0;
        }
        
        .selection-label {
          font-weight: bold;
          color: #666;
        }
        
        .footer {
          margin-top: 40px;
          padding-top: 20px;
          border-top: 2px solid #e0e0e0;
          text-align: center;
          font-size: 12px;
          color: #666;
        }
        
        .qr-note {
          margin-top: 20px;
          padding: 15px;
          background: #fff3e0;
          border-radius: 8px;
          font-size: 14px;
        }
        
        @media print {
          body {
            padding: 0;
          }
          
          .no-print {
            display: none;
          }
        }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="logo">GoodData Playbook</div>
        <p style="margin: 0; color: #666;">Playbook Selector Recommendation</p>
      </div>
      
      <div class="recommendation-badge">
        <h1>${data.pillarName}</h1>
        <div class="confidence">${data.confidence}% Match</div>
        <p class="reason">${data.reason}</p>
      </div>
      
      <div class="selections-box">
        <h3>Your Profile</h3>
        <div class="selection-item">
          <span class="selection-label">Buyer Persona:</span> ${data.persona}
        </div>
        <div class="selection-item">
          <span class="selection-label">Primary Challenge:</span> ${data.painPoint}
        </div>
        <div class="selection-item">
          <span class="selection-label">Industry:</span> ${data.industry}
        </div>
      </div>
      
      <div class="section">
        <h2 class="section-title">💬 Your Opening Talk Track</h2>
        <div class="talk-track">
          "${data.talkTrack}"
        </div>
      </div>
      
      <div class="section">
        <h2 class="section-title">❓ Top ${data.discoveryQuestions.length} Discovery Questions</h2>
        <ul class="question-list">
          ${data.discoveryQuestions.map((q, i) => `
            <li>
              <span class="question-number">${i + 1}</span>
              ${q}
            </li>
          `).join('')}
        </ul>
      </div>
      
      <div class="section">
        <h2 class="section-title">⭐ Key Value Proposition</h2>
        <ul class="value-list">
          ${data.valueProps.map(vp => `
            <li>
              <span class="bullet">•</span>
              ${vp}
            </li>
          `).join('')}
        </ul>
      </div>
      
      <div class="qr-note">
        <strong>Next Steps:</strong> Visit the full ${data.pillarName} playbook at gooddataai.manus.space for detailed positioning, competitive landmines, and objection responses.
      </div>
      
      <div class="footer">
        <p>Generated by GoodData Sales Playbook | ${new Date().toLocaleDateString()}</p>
        <p>For internal use only - Not for distribution to customers</p>
      </div>
    </body>
    </html>
  `;

  // Write content and trigger print
  printWindow.document.write(htmlContent);
  printWindow.document.close();
  
  // Wait for content to load, then print
  printWindow.onload = function() {
    setTimeout(() => {
      printWindow.print();
      // Close window after printing (user can cancel)
      printWindow.onafterprint = function() {
        printWindow.close();
      };
    }, 250);
  };
}
