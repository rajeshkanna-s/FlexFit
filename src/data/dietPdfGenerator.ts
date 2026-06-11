// ---------------------------------------------------------------------------
// Premium PDF Generator for Diet Chart
// Opens a beautifully designed document in a new window for Save-as-PDF
// ---------------------------------------------------------------------------

import type { NutritionStats, WeeklyPlan, MonthlyPlan } from './dietEngine';
import type { GoalKey } from './dietFoods.data';
import { goalMeta, avoidByGoal, cookingOilGuidelines, snacksByGoal, monthlyGuidance } from './dietFoods.data';

interface PDFData {
  name: string;
  age: number;
  gender: string;
  weightKg: number;
  heightCm: number;
  dietPref: string;
  goal: GoalKey;
  stats: NutritionStats;
  weeklyPlan: WeeklyPlan;
  monthlyPlan: MonthlyPlan;
  planDuration?: 'weekly' | 'monthly' | 'both';
  proteinFocus?: string[];
}

export function generatePremiumPDF(data: PDFData) {
  const gMeta = goalMeta.find(g => g.key === data.goal)!;
  const today = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
  const guidance = monthlyGuidance[data.goal];

  // Convert logo to base64 — we use the absolute URL approach with origin
  const logoUrl = `${window.location.origin}/assets/images/logo.png`;

  const duration = data.planDuration || 'both';
  const totalPages = duration === 'both' ? 3 : 2;

  // Reusable header component
  const getHeaderHtml = (titleExtra: string = "") => `
  <div class="pdf-header">
    <div class="pdf-header-left">
      <img src="${logoUrl}" alt="FlexFit Club" />
      <div class="pdf-header-brand">
        <h1>FlexFit Club</h1>
        <p>Get Into Good Addiction • Chennai</p>
      </div>
    </div>
    <div class="pdf-header-right">
      <strong>Personalised Diet Chart</strong>${titleExtra ? `<br><span style="color:#FFD600;font-weight:700;">${titleExtra}</span>` : ''}<br>
      Generated: ${today}<br>
      Chrompet • Chitlapakkam
    </div>
  </div>
  `;

  // Reusable footer component
  const getFooterHtml = (pageNumber: number) => `
  <div class="pdf-footer">
    <span class="pdf-footer-brand">FlexFit Club • Chennai</span>
    <span>Page ${pageNumber} of ${totalPages} • © ${new Date().getFullYear()} FlexFit Club. All rights reserved.</span>
  </div>
  `;

  // Profile and Stats Block
  const profileStatsHtml = `
  <!-- Profile Card -->
  <div class="profile-card no-break">
    <div class="profile-left">
      <div class="profile-avatar">${data.name.charAt(0).toUpperCase()}</div>
      <h3>${data.name}</h3>
      <div class="goal-tag">${gMeta.emoji} ${gMeta.label} • ${data.dietPref.charAt(0).toUpperCase() + data.dietPref.slice(1)}</div>
    </div>
    <div class="profile-right">
      <div class="stats-grid">
        <div class="stat-box">
          <span class="label">BMI</span>
          <span class="value">${data.stats.bmi.toFixed(1)}</span>
          <span class="unit">${data.stats.bmiCategory}</span>
        </div>
        <div class="stat-box">
          <span class="label">BMR</span>
          <span class="value">${data.stats.bmr.toFixed(0)}</span>
          <span class="unit">kcal/day</span>
        </div>
        <div class="stat-box">
          <span class="label">TDEE</span>
          <span class="value">${data.stats.tdee.toFixed(0)}</span>
          <span class="unit">kcal/day</span>
        </div>
        <div class="stat-box highlight">
          <span class="label">Target</span>
          <span class="value">${data.stats.targetCalories.toFixed(0)}</span>
          <span class="unit">kcal/day</span>
        </div>
        <div class="stat-box">
          <span class="label">Water</span>
          <span class="value">${(data.stats.hydrationMl / 1000).toFixed(1)}</span>
          <span class="unit">litres/day</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Macro Strip -->
  <div class="macro-strip no-break">
    <div class="macro-pill protein">
      <span class="macro-label">Protein</span>
      <span class="macro-value">${data.stats.proteinGrams.toFixed(0)}<span class="macro-unit">g/day</span></span>
    </div>
    <div class="macro-pill carbs">
      <span class="macro-label">Carbohydrates</span>
      <span class="macro-value">${data.stats.carbsGrams.toFixed(0)}<span class="macro-unit">g/day</span></span>
    </div>
    <div class="macro-pill fat">
      <span class="macro-label">Fats</span>
      <span class="macro-value">${data.stats.fatGrams.toFixed(0)}<span class="macro-unit">g/day</span></span>
    </div>
  </div>

  <div class="hydration-strip no-break">
    💧 Daily Hydration Target: <strong>${(data.stats.hydrationMl / 1000).toFixed(1)} litres</strong> (${data.stats.hydrationMl} ml) — Drink water throughout the day, especially before and after workouts.
  </div>
  `;

  // Reusable Guidelines & Disclaimer Block (last page)
  const lastPageGuidelinesHtml = `
  <!-- Do's and Don'ts -->
  <div class="dos-donts no-break">
    <div class="dos-box">
      <h5>✅ Monthly Do's</h5>
      <ul>
        ${data.monthlyPlan.dos.map(d => `<li>${d}</li>`).join('')}
      </ul>
    </div>
    <div class="donts-box">
      <h5>❌ Monthly Don'ts</h5>
      <ul>
        ${data.monthlyPlan.donts.map(d => `<li>${d}</li>`).join('')}
      </ul>
    </div>
  </div>

  <!-- Foods to Avoid -->
  <div class="tags-section no-break">
    <div class="tags-title" style="color: #B91C1C;">🚫 Foods to Avoid for ${gMeta.label}</div>
    <div class="tags-wrap">
      ${avoidByGoal[data.goal].map(f => `<span class="tag tag-avoid">${f}</span>`).join('')}
    </div>
  </div>

  <!-- Healthy Snacks -->
  <div class="tags-section no-break">
    <div class="tags-title" style="color: #15803D;">🥗 Healthy Snack Ideas</div>
    <div class="tags-wrap">
      ${snacksByGoal[data.goal].map(s => `<span class="tag tag-snack">${s}</span>`).join('')}
    </div>
  </div>

  <!-- Cooking Oil -->
  <div class="tags-section no-break">
    <div class="tags-title" style="color: #92400E;">🫒 Cooking Oil Guidelines</div>
    <div class="tags-wrap">
      ${cookingOilGuidelines.map(g => `<span class="tag tag-oil">${g}</span>`).join('')}
    </div>
  </div>

  <!-- Supplements -->
  ${guidance.supplements && guidance.supplements.length > 0 ? `
  <div class="tags-section no-break">
    <div class="tags-title" style="color: #7C3AED;">💊 Supplement Suggestions</div>
    <div class="tags-wrap">
      ${guidance.supplements.map(s => `<span class="tag" style="background:#F5F3FF;border-color:#DDD6FE;color:#6D28D9">${s}</span>`).join('')}
    </div>
    <div style="font-size:8px;color:#888;margin-top:4px;font-style:italic">⚕️ Consult a doctor before taking any supplements.</div>
  </div>` : ''}

  <!-- Disclaimer -->
  <div class="disclaimer no-break">
    <strong>⚕️ Disclaimer:</strong> This diet chart has been generated by FlexFit Club's nutrition tool for general guidance only. It is not a substitute for professional medical or nutritional advice. Please consult a registered dietitian or doctor before starting this diet, especially if you have conditions like diabetes, thyroid disorders, hypertension, PCOD, or any food-related health issues. Individual results vary based on genetics, metabolism, consistency, and lifestyle. FlexFit Club is not liable for any health outcomes from following this chart.
  </div>

  <!-- Contact Info -->
  <div style="margin-top:14px;padding:12px 16px;background:linear-gradient(135deg,#0d0d0d,#1a1a2e);border-radius:8px;display:flex;justify-content:space-between;align-items:center;color:#fff;font-size:10px">
    <div>
      <strong style="color:#FFD600;font-size:12px;letter-spacing:1px">FLEXFIT CLUB</strong><br>
      <span style="color:rgba(255,255,255,0.6)">📍 Chrompet • Chitlapakkam, Chennai</span>
    </div>
    <div style="text-align:right;color:rgba(255,255,255,0.6)">
      📞 +91 99408 46719<br>
      📧 flexfitclub2k25@gmail.com<br>
      🌐 flexfitclub.in
    </div>
  </div>
  `;

  let pagesHtml = '';

  if (duration === 'weekly') {
    // Page 1: Profile/Stats + Weekly Chart Days 1-4
    pagesHtml += `
    <div class="page">
      ${getHeaderHtml(`Weekly Diet Chart`)}
      
      <div class="title-bar">
        <h2>${gMeta.emoji} FlexFit Weekly ${gMeta.label} Diet Plan</h2>
        <div class="subtitle">${gMeta.tagline} • Prepared by FlexFit Club Nutrition Team</div>
      </div>
      
      ${profileStatsHtml}
      
      <div class="section-title">📅 Weekly Diet Chart (Days 1 - 4)</div>
      
      ${data.weeklyPlan.days.slice(0, 4).map((day, di) => `
      <div class="day-block no-break">
        <div class="day-header">
          <h4>${['🟡','🟢','🔵','🟣'][di]} ${day.dayName}</h4>
          <span class="day-cal">~${day.totalCalories} kcal</span>
        </div>
        <table class="day-table">
          <thead>
            <tr>
              <th style="width:22%">Meal</th>
              <th>Food Items</th>
              <th class="center" style="width:18%">Portion</th>
              <th style="width:8%;text-align:right">Cal</th>
            </tr>
          </thead>
          <tbody>
            ${day.meals.map(m => `
            <tr>
              <td class="meal-slot">${m.slotLabel}</td>
              <td><span class="food-name">${m.food.name}</span>${m.food.nameTamil ? `<br><span class="food-tamil">(${m.food.nameTamil})</span>` : ''}</td>
              <td class="center">${m.food.portion}</td>
              <td>${m.food.calories}</td>
            </tr>`).join('')}
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3"><strong>Day Total</strong></td>
              <td><strong>~${day.totalCalories}</strong></td>
            </tr>
          </tfoot>
        </table>
      </div>`).join('')}
      
      ${getFooterHtml(1)}
    </div>
    
    <div class="page">
      ${getHeaderHtml(`Weekly Diet Chart`)}
      
      <div class="section-title">📅 Weekly Diet Chart (Days 5 - 7)</div>
      
      ${data.weeklyPlan.days.slice(4).map((day, di) => `
      <div class="day-block no-break">
        <div class="day-header">
          <h4>${['🟠','🔴','⚪'][di]} ${day.dayName}</h4>
          <span class="day-cal">~${day.totalCalories} kcal</span>
        </div>
        <table class="day-table">
          <thead>
            <tr>
              <th style="width:22%">Meal</th>
              <th>Food Items</th>
              <th class="center" style="width:18%">Portion</th>
              <th style="width:8%;text-align:right">Cal</th>
            </tr>
          </thead>
          <tbody>
            ${day.meals.map(m => `
            <tr>
              <td class="meal-slot">${m.slotLabel}</td>
              <td><span class="food-name">${m.food.name}</span>${m.food.nameTamil ? `<br><span class="food-tamil">(${m.food.nameTamil})</span>` : ''}</td>
              <td class="center">${m.food.portion}</td>
              <td>${m.food.calories}</td>
            </tr>`).join('')}
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3"><strong>Day Total</strong></td>
              <td><strong>~${day.totalCalories}</strong></td>
            </tr>
          </tfoot>
        </table>
      </div>`).join('')}
      
      <div class="section-title" style="margin-top: 10px;">📋 Diet Guidelines & Reference</div>
      ${lastPageGuidelinesHtml}
      
      ${getFooterHtml(2)}
    </div>
    `;
  } else if (duration === 'monthly') {
    // Page 1: Profile/Stats + Monthly Progression Plan Phases 1-4
    pagesHtml += `
    <div class="page">
      ${getHeaderHtml(`Monthly Progression`)}
      
      <div class="title-bar">
        <h2>${gMeta.emoji} FlexFit Monthly ${gMeta.label} Plan</h2>
        <div class="subtitle">${gMeta.tagline} • Prepared by FlexFit Club Nutrition Team</div>
      </div>
      
      ${profileStatsHtml}
      
      <div class="section-title">📆 Monthly Progression Plan</div>
      <div class="phases-grid">
        ${data.monthlyPlan.phases.map(phase => `
        <div class="phase-card no-break">
          <span class="week-badge">${phase.weekLabel}</span>
          <h5>${phase.phaseName}</h5>
          <p>${phase.focus}</p>
          <div class="phase-foods">
            ${phase.keyFoods.map(f => `<span class="phase-food-tag">${f}</span>`).join('')}
          </div>
        </div>`).join('')}
      </div>
      
      ${getFooterHtml(1)}
    </div>
    
    <div class="page">
      ${getHeaderHtml(`Monthly Progression`)}
      
      <div class="section-title">📋 Diet Guidelines & Reference</div>
      ${lastPageGuidelinesHtml}
      
      ${getFooterHtml(2)}
    </div>
    `;
  } else {
    // Both weekly and monthly (Default 3-page layout)
    pagesHtml += `
    <div class="page">
      ${getHeaderHtml(`Combined Diet Plan`)}
      
      <div class="title-bar">
        <h2>${gMeta.emoji} FlexFit ${gMeta.label} Diet Plan</h2>
        <div class="subtitle">${gMeta.tagline} • Prepared by FlexFit Club Nutrition Team</div>
      </div>
      
      ${profileStatsHtml}
      
      <div class="section-title">📅 Weekly Diet Chart (Days 1 - 4)</div>
      
      ${data.weeklyPlan.days.slice(0, 4).map((day, di) => `
      <div class="day-block no-break">
        <div class="day-header">
          <h4>${['🟡','🟢','🔵','🟣'][di]} ${day.dayName}</h4>
          <span class="day-cal">~${day.totalCalories} kcal</span>
        </div>
        <table class="day-table">
          <thead>
            <tr>
              <th style="width:22%">Meal</th>
              <th>Food Items</th>
              <th class="center" style="width:18%">Portion</th>
              <th style="width:8%;text-align:right">Cal</th>
            </tr>
          </thead>
          <tbody>
            ${day.meals.map(m => `
            <tr>
              <td class="meal-slot">${m.slotLabel}</td>
              <td><span class="food-name">${m.food.name}</span>${m.food.nameTamil ? `<br><span class="food-tamil">(${m.food.nameTamil})</span>` : ''}</td>
              <td class="center">${m.food.portion}</td>
              <td>${m.food.calories}</td>
            </tr>`).join('')}
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3"><strong>Day Total</strong></td>
              <td><strong>~${day.totalCalories}</strong></td>
            </tr>
          </tfoot>
        </table>
      </div>`).join('')}
      
      ${getFooterHtml(1)}
    </div>
    
    <div class="page">
      ${getHeaderHtml(`Combined Diet Plan`)}
      
      ${data.weeklyPlan.days.slice(4).map((day, di) => `
      <div class="day-block no-break">
        <div class="day-header">
          <h4>${['🟠','🔴','⚪'][di]} ${day.dayName}</h4>
          <span class="day-cal">~${day.totalCalories} kcal</span>
        </div>
        <table class="day-table">
          <thead>
            <tr>
              <th style="width:22%">Meal</th>
              <th>Food Items</th>
              <th class="center" style="width:18%">Portion</th>
              <th style="width:8%;text-align:right">Cal</th>
            </tr>
          </thead>
          <tbody>
            ${day.meals.map(m => `
            <tr>
              <td class="meal-slot">${m.slotLabel}</td>
              <td><span class="food-name">${m.food.name}</span>${m.food.nameTamil ? `<br><span class="food-tamil">(${m.food.nameTamil})</span>` : ''}</td>
              <td class="center">${m.food.portion}</td>
              <td>${m.food.calories}</td>
            </tr>`).join('')}
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3"><strong>Day Total</strong></td>
              <td><strong>~${day.totalCalories}</strong></td>
            </tr>
          </tfoot>
        </table>
      </div>`).join('')}
      
      <!-- Monthly Progression -->
      <div class="section-title">📆 Monthly Progression Plan</div>
      <div class="phases-grid">
        ${data.monthlyPlan.phases.map(phase => `
        <div class="phase-card no-break">
          <span class="week-badge">${phase.weekLabel}</span>
          <h5>${phase.phaseName}</h5>
          <p>${phase.focus}</p>
          <div class="phase-foods">
            ${phase.keyFoods.map(f => `<span class="phase-food-tag">${f}</span>`).join('')}
          </div>
        </div>`).join('')}
      </div>
      
      ${getFooterHtml(2)}
    </div>
    
    <div class="page">
      ${getHeaderHtml(`Combined Diet Plan`)}
      
      <div class="section-title">📋 Diet Guidelines & Reference</div>
      ${lastPageGuidelinesHtml}
      
      ${getFooterHtml(3)}
    </div>
    `;
  }

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>FlexFit Diet Plan — FlexFit Club</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'Inter', -apple-system, system-ui, sans-serif;
    color: #1a1a2e;
    background: #fff;
    font-size: 11px;
    line-height: 1.5;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }

  @page {
    size: A4;
    margin: 12mm 14mm;
  }

  .page { page-break-after: always; }
  .page:last-child { page-break-after: auto; }
  .no-break { page-break-inside: avoid; }

  /* ── Header / Footer ──────────────────────────────── */
  .pdf-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 20px;
    background: linear-gradient(135deg, #0d0d0d 0%, #1a1a2e 100%);
    border-radius: 10px;
    margin-bottom: 18px;
  }
  .pdf-header-left {
    display: flex;
    align-items: center;
    gap: 14px;
  }
  .pdf-header img {
    height: 52px;
    width: auto;
  }
  .pdf-header-brand h1 {
    font-size: 20px;
    font-weight: 900;
    color: #FFD600;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin: 0;
  }
  .pdf-header-brand p {
    font-size: 9px;
    color: rgba(255,255,255,0.6);
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 2px 0 0;
  }
  .pdf-header-right {
    text-align: right;
    color: rgba(255,255,255,0.7);
    font-size: 9px;
    line-height: 1.6;
  }
  .pdf-header-right strong {
    color: #FFD600;
  }

  .pdf-footer {
    margin-top: 16px;
    padding: 10px 16px;
    background: #f8f9fa;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 8px;
    color: #666;
  }
  .pdf-footer-brand {
    font-weight: 700;
    color: #1a1a2e;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  /* ── Title Bar ────────────────────────────────────── */
  .title-bar {
    background: linear-gradient(135deg, ${gMeta.color}15, ${gMeta.color}08);
    border: 1px solid ${gMeta.color}30;
    border-left: 4px solid ${gMeta.color};
    border-radius: 8px;
    padding: 14px 18px;
    margin-bottom: 18px;
  }
  .title-bar h2 {
    font-size: 18px;
    font-weight: 800;
    color: #1a1a2e;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 2px;
  }
  .title-bar .subtitle {
    font-size: 10px;
    color: #666;
  }

  /* ── Profile Card ─────────────────────────────────── */
  .profile-card {
    display: flex;
    gap: 0;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid #e0e0e0;
    margin-bottom: 18px;
  }
  .profile-left {
    background: linear-gradient(135deg, #0d0d0d, #1a1a2e);
    padding: 16px 20px;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .profile-avatar {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    background: ${gMeta.color};
    color: #000;
    font-weight: 900;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;
  }
  .profile-left h3 {
    color: #fff;
    font-size: 15px;
    font-weight: 800;
    text-transform: uppercase;
    margin: 0 0 2px;
  }
  .profile-left .goal-tag {
    font-size: 10px;
    color: ${gMeta.color};
    font-weight: 600;
  }
  .profile-right {
    flex: 1;
    padding: 14px 18px;
    display: flex;
    align-items: center;
  }
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 12px;
    width: 100%;
  }
  .stat-box {
    text-align: center;
    padding: 8px 6px;
    border-radius: 8px;
    background: #f8f9fa;
    border: 1px solid #eee;
  }
  .stat-box.highlight {
    background: #FFF8E1;
    border-color: #FFD600;
  }
  .stat-box .label {
    font-size: 8px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 700;
    color: #888;
    display: block;
    margin-bottom: 2px;
  }
  .stat-box .value {
    font-size: 16px;
    font-weight: 800;
    color: #1a1a2e;
    display: block;
    line-height: 1.2;
  }
  .stat-box .unit {
    font-size: 8px;
    color: #888;
  }

  /* ── Macro Strip ──────────────────────────────────── */
  .macro-strip {
    display: flex;
    gap: 10px;
    margin-bottom: 18px;
  }
  .macro-pill {
    flex: 1;
    padding: 10px 14px;
    border-radius: 8px;
    text-align: center;
    border: 1px solid;
  }
  .macro-pill.protein { background: #FEF2F2; border-color: #FECACA; }
  .macro-pill.carbs { background: #FFFBEB; border-color: #FDE68A; }
  .macro-pill.fat { background: #ECFEFF; border-color: #A5F3FC; }
  .macro-pill .macro-label {
    font-size: 9px;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0.5px;
    display: block;
    margin-bottom: 2px;
  }
  .macro-pill.protein .macro-label { color: #DC2626; }
  .macro-pill.carbs .macro-label { color: #D97706; }
  .macro-pill.fat .macro-label { color: #0891B2; }
  .macro-pill .macro-value {
    font-size: 18px;
    font-weight: 800;
    color: #1a1a2e;
  }
  .macro-pill .macro-unit { font-size: 10px; color: #888; }
  .hydration-strip {
    padding: 8px 14px;
    background: #ECFEFF;
    border: 1px solid #A5F3FC;
    border-radius: 8px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 11px;
    font-weight: 600;
    color: #0891B2;
  }

  /* ── Section Titles ───────────────────────────────── */
  .section-title {
    font-size: 14px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #1a1a2e;
    margin: 20px 0 10px;
    padding-bottom: 6px;
    border-bottom: 2px solid #FFD600;
    display: inline-block;
  }

  /* ── Day Table ────────────────────────────────────── */
  .day-block {
    margin-bottom: 14px;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid #e8e8e8;
  }
  .day-header {
    background: linear-gradient(135deg, #0d0d0d, #1a1a2e);
    color: #fff;
    padding: 8px 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .day-header h4 {
    font-size: 12px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0;
  }
  .day-header .day-cal {
    background: rgba(255,214,0,0.15);
    color: #FFD600;
    padding: 3px 10px;
    border-radius: 20px;
    font-size: 10px;
    font-weight: 700;
  }
  .day-table {
    width: 100%;
    border-collapse: collapse;
  }
  .day-table th {
    background: #f8f9fa;
    padding: 6px 10px;
    font-size: 8px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 700;
    color: #888;
    text-align: left;
    border-bottom: 1px solid #eee;
  }
  .day-table th:last-child { text-align: right; }
  .day-table th.center { text-align: center; }
  .day-table td {
    padding: 7px 10px;
    font-size: 10px;
    border-bottom: 1px solid #f3f3f3;
    vertical-align: top;
  }
  .day-table td:last-child { text-align: right; font-weight: 700; }
  .day-table td.center { text-align: center; }
  .meal-slot {
    font-weight: 700;
    color: ${gMeta.color};
    font-size: 9px;
    text-transform: uppercase;
  }
  .food-name { font-weight: 600; color: #1a1a2e; }
  .food-tamil { color: #888; font-size: 9px; font-style: italic; }
  .day-table tfoot td {
    background: #FFF8E1;
    font-weight: 800;
    color: #1a1a2e;
    border: none;
    padding: 8px 10px;
    font-size: 10px;
  }

  /* ── Phase Cards ──────────────────────────────────── */
  .phases-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-bottom: 18px;
  }
  .phase-card {
    border: 1px solid #e8e8e8;
    border-radius: 8px;
    padding: 14px;
    background: #fafafa;
  }
  .phase-card .week-badge {
    display: inline-block;
    padding: 2px 10px;
    border-radius: 20px;
    font-size: 9px;
    font-weight: 800;
    color: #000;
    background: ${gMeta.color};
    margin-bottom: 6px;
  }
  .phase-card h5 {
    font-size: 12px;
    font-weight: 800;
    text-transform: uppercase;
    margin: 0 0 4px;
    color: #1a1a2e;
  }
  .phase-card p {
    font-size: 10px;
    color: #555;
    margin: 0 0 6px;
    line-height: 1.5;
  }
  .phase-foods {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    margin-top: 6px;
  }
  .phase-food-tag {
    font-size: 8px;
    padding: 2px 8px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 20px;
    color: #555;
    font-weight: 600;
  }

  /* ── Do's / Don'ts ────────────────────────────────── */
  .dos-donts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-bottom: 18px;
  }
  .dos-box, .donts-box {
    border-radius: 8px;
    padding: 14px;
    border: 1px solid;
  }
  .dos-box {
    background: #F0FDF4;
    border-color: #BBF7D0;
  }
  .donts-box {
    background: #FEF2F2;
    border-color: #FECACA;
  }
  .dos-box h5 { color: #16A34A; }
  .donts-box h5 { color: #DC2626; }
  .dos-box h5, .donts-box h5 {
    font-size: 11px;
    font-weight: 800;
    text-transform: uppercase;
    margin: 0 0 8px;
  }
  .dos-box li, .donts-box li {
    font-size: 10px;
    color: #333;
    margin-bottom: 4px;
    list-style: none;
    padding-left: 16px;
    position: relative;
    line-height: 1.5;
  }
  .dos-box li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #16A34A;
    font-weight: 800;
  }
  .donts-box li::before {
    content: '✗';
    position: absolute;
    left: 0;
    color: #DC2626;
    font-weight: 800;
  }

  /* ── Tags ─────────────────────────────────────────── */
  .tags-section {
    margin-bottom: 14px;
  }
  .tags-title {
    font-size: 11px;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .tags-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
  .tag {
    font-size: 9px;
    padding: 4px 10px;
    border-radius: 20px;
    font-weight: 600;
    border: 1px solid;
  }
  .tag-avoid { background: #FEF2F2; border-color: #FECACA; color: #B91C1C; }
  .tag-snack { background: #F0FDF4; border-color: #BBF7D0; color: #15803D; }
  .tag-oil { background: #FFF8E1; border-color: #FFE082; color: #92400E; }

  /* ── Disclaimer ───────────────────────────────────── */
  .disclaimer {
    padding: 12px 16px;
    background: #f8f9fa;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    font-size: 9px;
    color: #666;
    line-height: 1.6;
    margin-top: 16px;
  }
  .disclaimer strong { color: #1a1a2e; }

  /* ── Print button (hide in print) ─────────────────── */
  .print-actions {
    text-align: center;
    padding: 20px;
  }
  .print-actions button {
    padding: 12px 40px;
    background: linear-gradient(135deg, #0d0d0d, #1a1a2e);
    color: #FFD600;
    border: none;
    border-radius: 8px;
    font-weight: 800;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    margin: 0 8px;
  }
  .print-actions button:hover { opacity: 0.9; }
  .print-actions button.secondary {
    background: #fff;
    color: #1a1a2e;
    border: 2px solid #1a1a2e;
  }

  @media print {
    .print-actions { display: none !important; }
    body { font-size: 10px; }
  }
</style>
</head>
<body>

${pagesHtml}

<!-- Print Actions (visible only in browser, hidden on print) -->
<div class="print-actions">
  <button onclick="window.print()">📥 Save as PDF / Print</button>
  <button class="secondary" onclick="window.close()">Close</button>
</div>

</body>
</html>`;

  // Open in a new window
  const printWindow = window.open('', '_blank', 'width=900,height=700');
  if (printWindow) {
    printWindow.document.write(html);
    printWindow.document.close();
  }
}
