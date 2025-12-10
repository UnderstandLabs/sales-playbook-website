import { jsPDF } from 'jspdf';

interface AssessmentData {
  prospectName: string;
  prospectCompany: string;
  prospectEmail: string;
  prospectRole?: string;
  totalScore: number;
  readinessLevel: string;
  recommendedPlay: string;
  secondaryPlay?: string;
  categoryScores: Record<string, number>;
}

const COLORS = {
  primary: [147, 51, 234], // purple
  secondary: [6, 182, 212], // cyan
  success: [34, 197, 94], // green
  warning: [234, 179, 8], // yellow
  danger: [239, 68, 68], // red
  text: [15, 23, 42], // slate-900
  textLight: [100, 116, 139], // slate-500
  background: [248, 250, 252], // slate-50
};

function getReadinessColor(level: string): number[] {
  switch (level) {
    case 'AI-Ready':
      return COLORS.success;
    case 'Good Foundation':
      return COLORS.primary;
    case 'Moderate Gaps':
      return COLORS.warning;
    case 'Critical Risk':
      return COLORS.danger;
    default:
      return COLORS.textLight;
  }
}

function drawGradientRect(
  doc: jsPDF,
  x: number,
  y: number,
  width: number,
  height: number
) {
  // Simple gradient effect using multiple rectangles
  const steps = 20;
  for (let i = 0; i < steps; i++) {
    const ratio = i / steps;
    const r = COLORS.primary[0] + (COLORS.secondary[0] - COLORS.primary[0]) * ratio;
    const g = COLORS.primary[1] + (COLORS.secondary[1] - COLORS.primary[1]) * ratio;
    const b = COLORS.primary[2] + (COLORS.secondary[2] - COLORS.primary[2]) * ratio;
    
    doc.setFillColor(r, g, b);
    doc.rect(x + (width / steps) * i, y, width / steps, height, 'F');
  }
}

function drawCircularGauge(
  doc: jsPDF,
  x: number,
  y: number,
  radius: number,
  score: number,
  maxScore: number
) {
  const centerX = x + radius;
  const centerY = y + radius;
  const percentage = score / maxScore;
  
  // Background circle
  doc.setFillColor(240, 240, 245);
  doc.circle(centerX, centerY, radius, 'F');
  
  // Progress arc (simplified as filled circle with percentage)
  const color = getReadinessColor(
    score >= 81 ? 'AI-Ready' : score >= 61 ? 'Good Foundation' : score >= 31 ? 'Moderate Gaps' : 'Critical Risk'
  );
  doc.setFillColor(color[0], color[1], color[2]);
  
  // Draw arc segments to simulate progress
  const segments = Math.floor(percentage * 360);
  for (let i = 0; i < segments; i += 10) {
    const startAngle = (i - 90) * (Math.PI / 180);
    const endAngle = ((i + 10) - 90) * (Math.PI / 180);
    
    const x1 = centerX + (radius - 8) * Math.cos(startAngle);
    const y1 = centerY + (radius - 8) * Math.sin(startAngle);
    const x2 = centerX + radius * Math.cos(startAngle);
    const y2 = centerY + radius * Math.sin(startAngle);
    const x3 = centerX + radius * Math.cos(endAngle);
    const y3 = centerY + radius * Math.sin(endAngle);
    const x4 = centerX + (radius - 8) * Math.cos(endAngle);
    const y4 = centerY + (radius - 8) * Math.sin(endAngle);
    
    doc.triangle(x1, y1, x2, y2, x3, y3, 'F');
    doc.triangle(x1, y1, x3, y3, x4, y4, 'F');
  }
  
  // Inner circle (white)
  doc.setFillColor(255, 255, 255);
  doc.circle(centerX, centerY, radius - 10, 'F');
  
  // Score text
  doc.setFontSize(32);
  doc.setTextColor(COLORS.text[0], COLORS.text[1], COLORS.text[2]);
  doc.setFont('helvetica', 'bold');
  const scoreText = score.toString();
  const scoreWidth = doc.getTextWidth(scoreText);
  doc.text(scoreText, centerX - scoreWidth / 2, centerY + 5);
  
  // "out of" text
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(COLORS.textLight[0], COLORS.textLight[1], COLORS.textLight[2]);
  const outOfText = `out of ${maxScore}`;
  const outOfWidth = doc.getTextWidth(outOfText);
  doc.text(outOfText, centerX - outOfWidth / 2, centerY + 15);
}

function drawBarChart(
  doc: jsPDF,
  x: number,
  y: number,
  width: number,
  height: number,
  categories: string[],
  scores: number[],
  maxScore: number
) {
  const barHeight = 12;
  const spacing = 8;
  const labelWidth = 80;
  const chartWidth = width - labelWidth - 40;
  
  categories.forEach((category, index) => {
    const barY = y + index * (barHeight + spacing);
    const score = scores[index];
    const barWidth = (score / maxScore) * chartWidth;
    
    // Category label
    doc.setFontSize(9);
    doc.setTextColor(COLORS.text[0], COLORS.text[1], COLORS.text[2]);
    doc.setFont('helvetica', 'normal');
    doc.text(category, x, barY + 8);
    
    // Bar background
    doc.setFillColor(240, 240, 245);
    doc.roundedRect(x + labelWidth, barY, chartWidth, barHeight, 2, 2, 'F');
    
    // Bar fill (gradient effect)
    if (barWidth > 0) {
      const steps = Math.min(10, Math.floor(barWidth));
      for (let i = 0; i < steps; i++) {
        const ratio = i / steps;
        const r = COLORS.primary[0] + (COLORS.secondary[0] - COLORS.primary[0]) * ratio;
        const g = COLORS.primary[1] + (COLORS.secondary[1] - COLORS.primary[1]) * ratio;
        const b = COLORS.primary[2] + (COLORS.secondary[2] - COLORS.primary[2]) * ratio;
        
        doc.setFillColor(r, g, b);
        const segmentWidth = barWidth / steps;
        doc.roundedRect(
          x + labelWidth + (segmentWidth * i),
          barY,
          segmentWidth,
          barHeight,
          2,
          2,
          'F'
        );
      }
    }
    
    // Score text
    doc.setFontSize(9);
    doc.setTextColor(COLORS.text[0], COLORS.text[1], COLORS.text[2]);
    doc.setFont('helvetica', 'bold');
    const scoreText = `${score.toFixed(1)}/${maxScore}`;
    doc.text(scoreText, x + labelWidth + chartWidth + 5, barY + 8);
  });
}

export async function generateAssessmentPDF(data: AssessmentData): Promise<void> {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });
  
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  
  // ===== PAGE 1: Cover Page =====
  
  // Header gradient
  drawGradientRect(doc, 0, 0, pageWidth, 60);
  
  // Logo/Title
  doc.setFontSize(28);
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.text('GoodData', margin, 25);
  
  doc.setFontSize(16);
  doc.setFont('helvetica', 'normal');
  doc.text('AI Readiness for Data', margin, 35);
  
  // Date
  doc.setFontSize(10);
  const date = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  doc.text(date, margin, 45);
  
  // Prospect Information
  let currentY = 80;
  
  doc.setFontSize(20);
  doc.setTextColor(COLORS.text[0], COLORS.text[1], COLORS.text[2]);
  doc.setFont('helvetica', 'bold');
  doc.text('Assessment Report', margin, currentY);
  
  currentY += 15;
  
  // Info box
  doc.setFillColor(COLORS.background[0], COLORS.background[1], COLORS.background[2]);
  doc.roundedRect(margin, currentY, pageWidth - 2 * margin, 50, 3, 3, 'F');
  
  currentY += 10;
  
  doc.setFontSize(11);
  doc.setTextColor(COLORS.textLight[0], COLORS.textLight[1], COLORS.textLight[2]);
  doc.setFont('helvetica', 'normal');
  doc.text('Prepared for:', margin + 10, currentY);
  
  currentY += 8;
  
  doc.setFontSize(14);
  doc.setTextColor(COLORS.text[0], COLORS.text[1], COLORS.text[2]);
  doc.setFont('helvetica', 'bold');
  doc.text(data.prospectName, margin + 10, currentY);
  
  if (data.prospectRole) {
    currentY += 6;
    doc.setFontSize(11);
    doc.setTextColor(COLORS.textLight[0], COLORS.textLight[1], COLORS.textLight[2]);
    doc.setFont('helvetica', 'normal');
    doc.text(data.prospectRole, margin + 10, currentY);
  }
  
  currentY += 6;
  doc.setFontSize(11);
  doc.setTextColor(COLORS.textLight[0], COLORS.textLight[1], COLORS.textLight[2]);
  doc.text(data.prospectCompany, margin + 10, currentY);
  
  currentY += 6;
  doc.setTextColor(COLORS.primary[0], COLORS.primary[1], COLORS.primary[2]);
  doc.text(data.prospectEmail, margin + 10, currentY);
  
  // AI Readiness Score
  currentY += 30;
  
  doc.setFontSize(16);
  doc.setTextColor(COLORS.text[0], COLORS.text[1], COLORS.text[2]);
  doc.setFont('helvetica', 'bold');
  doc.text('Overall AI Readiness Score', margin, currentY);
  
  currentY += 10;
  
  // Draw circular gauge
  const gaugeSize = 50;
  drawCircularGauge(doc, pageWidth / 2 - gaugeSize / 2, currentY, gaugeSize / 2, data.totalScore, 120);
  
  currentY += gaugeSize + 10;
  
  // Readiness level badge
  const badgeColor = getReadinessColor(data.readinessLevel);
  doc.setFillColor(badgeColor[0], badgeColor[1], badgeColor[2]);
  doc.roundedRect(pageWidth / 2 - 30, currentY, 60, 10, 2, 2, 'F');
  
  doc.setFontSize(11);
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  const levelText = data.readinessLevel;
  const levelWidth = doc.getTextWidth(levelText);
  doc.text(levelText, pageWidth / 2 - levelWidth / 2, currentY + 7);
  
  // ===== PAGE 2: Gap Analysis =====
  doc.addPage();
  currentY = margin;
  
  // Header
  doc.setFontSize(20);
  doc.setTextColor(COLORS.text[0], COLORS.text[1], COLORS.text[2]);
  doc.setFont('helvetica', 'bold');
  doc.text('Gap Category Breakdown', margin, currentY);
  
  currentY += 5;
  
  doc.setFontSize(11);
  doc.setTextColor(COLORS.textLight[0], COLORS.textLight[1], COLORS.textLight[2]);
  doc.setFont('helvetica', 'normal');
  doc.text('Detailed analysis of your organization\'s AI readiness across key categories', margin, currentY);
  
  currentY += 15;
  
  // Bar chart
  const categories = Object.keys(data.categoryScores);
  const scores = Object.values(data.categoryScores);
  
  drawBarChart(
    doc,
    margin,
    currentY,
    pageWidth - 2 * margin,
    categories.length * 20,
    categories,
    scores,
    10
  );
  
  currentY += categories.length * 20 + 20;
  
  // Key Insights
  doc.setFontSize(16);
  doc.setTextColor(COLORS.text[0], COLORS.text[1], COLORS.text[2]);
  doc.setFont('helvetica', 'bold');
  doc.text('Key Insights', margin, currentY);
  
  currentY += 10;
  
  // Find strengths and weaknesses
  const sortedCategories = categories
    .map((cat, idx) => ({ name: cat, score: scores[idx] }))
    .sort((a, b) => b.score - a.score);
  
  const strengths = sortedCategories.slice(0, 2);
  const weaknesses = sortedCategories.slice(-2).reverse();
  
  // Strengths
  doc.setFontSize(12);
  doc.setTextColor(COLORS.success[0], COLORS.success[1], COLORS.success[2]);
  doc.setFont('helvetica', 'bold');
  doc.text('✓ Strengths', margin, currentY);
  
  currentY += 7;
  
  doc.setFontSize(10);
  doc.setTextColor(COLORS.text[0], COLORS.text[1], COLORS.text[2]);
  doc.setFont('helvetica', 'normal');
  
  strengths.forEach((item) => {
    doc.text(`• ${item.name}: ${item.score.toFixed(1)}/10`, margin + 5, currentY);
    currentY += 6;
  });
  
  currentY += 5;
  
  // Areas for Improvement
  doc.setFontSize(12);
  doc.setTextColor(COLORS.warning[0], COLORS.warning[1], COLORS.warning[2]);
  doc.setFont('helvetica', 'bold');
  doc.text('⚠ Areas for Improvement', margin, currentY);
  
  currentY += 7;
  
  doc.setFontSize(10);
  doc.setTextColor(COLORS.text[0], COLORS.text[1], COLORS.text[2]);
  doc.setFont('helvetica', 'normal');
  
  weaknesses.forEach((item) => {
    doc.text(`• ${item.name}: ${item.score.toFixed(1)}/10`, margin + 5, currentY);
    currentY += 6;
  });
  
  // ===== PAGE 3: Recommendations =====
  doc.addPage();
  currentY = margin;
  
  // Header
  doc.setFontSize(20);
  doc.setTextColor(COLORS.text[0], COLORS.text[1], COLORS.text[2]);
  doc.setFont('helvetica', 'bold');
  doc.text('Recommended GoodData Plays', margin, currentY);
  
  currentY += 5;
  
  doc.setFontSize(11);
  doc.setTextColor(COLORS.textLight[0], COLORS.textLight[1], COLORS.textLight[2]);
  doc.setFont('helvetica', 'normal');
  doc.text('Based on your assessment, here are the recommended approaches', margin, currentY);
  
  currentY += 15;
  
  // Primary recommendation
  doc.setFillColor(COLORS.primary[0], COLORS.primary[1], COLORS.primary[2]);
  doc.roundedRect(margin, currentY, pageWidth - 2 * margin, 8, 2, 2, 'F');
  
  doc.setFontSize(10);
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.text('PRIMARY RECOMMENDATION', margin + 5, currentY + 5.5);
  
  currentY += 15;
  
  doc.setFontSize(16);
  doc.setTextColor(COLORS.text[0], COLORS.text[1], COLORS.text[2]);
  doc.setFont('helvetica', 'bold');
  doc.text(data.recommendedPlay, margin, currentY);
  
  currentY += 10;
  
  // Play descriptions
  const playDescriptions: Record<string, string> = {
    'AI Modernization': 'Transform your legacy BI infrastructure with an AI-native Intelligence Layer. Perfect for organizations looking to modernize their data stack and enable AI-driven insights across the enterprise.',
    'Decision Intelligence': 'Empower your internal teams with self-service analytics and AI-powered decision-making capabilities. Ideal for organizations seeking to democratize data access and reduce analyst dependency.',
    'AI Architecture': 'Build a scalable, enterprise-grade AI infrastructure that supports advanced capabilities. Best for organizations with strong foundations ready to scale AI initiatives enterprise-wide.',
    'Embedded Intelligence': 'Integrate analytics and AI capabilities directly into your products and customer-facing applications. Perfect for software companies looking to differentiate with embedded intelligence.',
  };
  
  doc.setFontSize(10);
  doc.setTextColor(COLORS.text[0], COLORS.text[1], COLORS.text[2]);
  doc.setFont('helvetica', 'normal');
  const description = playDescriptions[data.recommendedPlay] || '';
  const splitDescription = doc.splitTextToSize(description, pageWidth - 2 * margin);
  doc.text(splitDescription, margin, currentY);
  
  currentY += splitDescription.length * 5 + 10;
  
  // Why this play?
  doc.setFontSize(12);
  doc.setTextColor(COLORS.text[0], COLORS.text[1], COLORS.text[2]);
  doc.setFont('helvetica', 'bold');
  doc.text('Why This Play?', margin, currentY);
  
  currentY += 7;
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  
  const reasons: string[] = [];
  
  if (data.totalScore >= 81) {
    reasons.push('Your strong AI readiness foundation positions you well for advanced initiatives');
    reasons.push('You have the infrastructure to support enterprise-scale AI deployment');
  } else if (data.totalScore >= 61) {
    reasons.push('Your solid foundation can be enhanced with targeted improvements');
    reasons.push('This play addresses your key gaps while leveraging existing strengths');
  } else if (data.totalScore >= 31) {
    reasons.push('This approach will help you build critical missing capabilities');
    reasons.push('Focuses on foundational elements needed for AI success');
  } else {
    reasons.push('Addresses critical gaps in your current data architecture');
    reasons.push('Provides a clear path from legacy systems to AI-ready infrastructure');
  }
  
  reasons.forEach((reason) => {
    doc.text(`• ${reason}`, margin + 5, currentY);
    currentY += 6;
  });
  
  // Secondary recommendation
  if (data.secondaryPlay) {
    currentY += 10;
    
    doc.setFillColor(COLORS.secondary[0], COLORS.secondary[1], COLORS.secondary[2]);
    doc.roundedRect(margin, currentY, pageWidth - 2 * margin, 8, 2, 2, 'F');
    
    doc.setFontSize(10);
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.text('SECONDARY RECOMMENDATION', margin + 5, currentY + 5.5);
    
    currentY += 15;
    
    doc.setFontSize(14);
    doc.setTextColor(COLORS.text[0], COLORS.text[1], COLORS.text[2]);
    doc.setFont('helvetica', 'bold');
    doc.text(data.secondaryPlay, margin, currentY);
    
    currentY += 8;
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const secondaryDesc = playDescriptions[data.secondaryPlay] || '';
    const splitSecondary = doc.splitTextToSize(secondaryDesc, pageWidth - 2 * margin);
    doc.text(splitSecondary, margin, currentY);
  }
  
  // Next Steps
  currentY = pageHeight - 70;
  
  doc.setFillColor(COLORS.background[0], COLORS.background[1], COLORS.background[2]);
  doc.roundedRect(margin, currentY, pageWidth - 2 * margin, 50, 3, 3, 'F');
  
  currentY += 10;
  
  doc.setFontSize(14);
  doc.setTextColor(COLORS.text[0], COLORS.text[1], COLORS.text[2]);
  doc.setFont('helvetica', 'bold');
  doc.text('Next Steps', margin + 5, currentY);
  
  currentY += 8;
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('1. Review the detailed play pages in the GoodData Playbook', margin + 5, currentY);
  currentY += 6;
  doc.text('2. Schedule a consultation to discuss your specific needs', margin + 5, currentY);
  currentY += 6;
  doc.text('3. Explore how GoodData can help you achieve AI readiness', margin + 5, currentY);
  
  // Footer on all pages
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(COLORS.textLight[0], COLORS.textLight[1], COLORS.textLight[2]);
    doc.setFont('helvetica', 'normal');
    doc.text(
      `AI Readiness for Data Report | ${data.prospectCompany} | Page ${i} of ${totalPages}`,
      pageWidth / 2,
      pageHeight - 10,
      { align: 'center' }
    );
  }
  
  // Save the PDF
  const fileName = `GoodData_Assessment_${data.prospectCompany.replace(/[^a-z0-9]/gi, '_')}_${Date.now()}.pdf`;
  doc.save(fileName);
}
