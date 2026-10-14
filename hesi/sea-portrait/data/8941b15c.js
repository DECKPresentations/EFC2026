// Resources parsed from "Portrait Resources - Updated" (June 2026 spreadsheet).
// Split into individually-titled links per competency; x.0 rows are area-level.
// `flagged: true` items come from the "Links Needing Review" section.
(function () {
  const C = {
    '1.1': [
      { t: 'Virginia Profile of a Graduate', u: 'https://www.doe.virginia.gov/parents-students/for-students/graduation/policy-initiatives/profile-of-a-virginia-graduate' },
      { t: 'Massachusetts Graduate Profile', u: 'https://www.doe.mass.edu/ccte/graduation/default.html' },
      { t: 'South Carolina Profile of a Graduate', u: 'https://ed.sc.gov/about/profile-of-sc-graduate/' },
      { t: 'CASEL: From Vision to Action — Portraits of a Graduate, SEL and Future Readiness', u: 'https://casel.org/links/from-vision-to-action-how-portraits-of-a-graduate-align-social-and-emotional-competencies-and-future-readiness/' },
      { t: 'NewSchools Venture Fund — Expanded Definitions of Student Success', u: 'https://www.newschools.org/blog/how-an-expanded-definition-of-student-success-drives-learning-3-new-insights-from-the-newschools-portfolio/' },
    ],
    '1.2/1.3': [
      { t: 'Colorado School Performance Frameworks', u: 'https://ed.cde.state.co.us/accountability/performanceframeworks' },
      { t: 'Tennessee Report Card', u: 'https://reportcard.tnedu.gov/' },
      { t: 'Texas Academic Performance Reporting', u: 'https://tea.texas.gov/texas-schools/accountability/academic-accountability/performance-reporting' },
    ],
    '1.4': [
      { t: 'What Works Clearinghouse', u: 'https://ies.ed.gov/ncee/wwc' },
    ],
    '1.5': [
      { t: 'Louisiana Believes — Measuring Results', u: 'https://louisianabelieves.com/measuringresults' },
      { t: 'What Works Clearinghouse', u: 'https://ies.ed.gov/ncee/wwc' },
    ],
    '1.6': [
      { t: 'Delaware Report Card (DASL)', u: 'https://reportcard.doe.k12.de.us/' },
      { t: 'Kentucky Department of Education', u: 'https://www.education.ky.gov/' },
    ],
    '1.7': [
      { t: 'Louisiana ELA Guidebooks', u: 'https://www.louisianabelieves.com/academics/ela-guidebooks' },
      { t: 'OER Commons', u: 'https://www.oercommons.org/' },
    ],
    '1.8': [
      { t: 'Tennessee Regional Support', u: 'https://www.tn.gov/education/districts/regional-support.html', flagged: true },
      { t: 'Georgia RESAs', u: 'https://gadoe.org/School-Improvement/Pages/Regional-Education-Service-Agencies.aspx', flagged: true },
      { t: 'Louisiana Believes — Teaching', u: 'https://www.louisianabelieves.com/teaching', flagged: true },
    ],
    '1.9': [
      { t: 'Massachusetts Turnaround', u: 'https://www.doe.mass.edu/turnaround' },
    ],
    '2.1/2.2': [
      { t: 'Tennessee Drive to 55', u: 'https://driveto55.org/', flagged: true },
      { t: 'Denver DPS Portfolio Management', u: 'https://www.dpsk12.org/about/innovation/portfolio-management/', flagged: true },
      { t: 'Colorado Innovation Schools Act', u: 'https://ed.cde.state.co.us/choice/innovationschools', flagged: true },
    ],
    '2.1': [
      { t: 'Baltimore Community Schools', u: 'https://www.baltimorecityschools.org/community-schools', flagged: true },
      { t: 'Chicago Network for College Success', u: 'https://networkforcollegesuccess.org/', flagged: true },
    ],
    '2.3/2.4': [
      { t: 'Colorado Innovation Schools Act', u: 'https://ed.cde.state.co.us/choice/innovationschools' },
    ],
    '2.5/2.6': [
      { t: 'What Works Clearinghouse', u: 'https://ies.ed.gov/ncee/wwc' },
      { t: 'Louisiana Believes', u: 'https://louisianabelieves.com' },
    ],
    '2.7': [
      { t: 'Colorado Innovation Schools Act', u: 'https://ed.cde.state.co.us/choice/innovationschools' },
      { t: 'Massachusetts Charter Schools', u: 'https://www.doe.mass.edu/charter/' },
    ],
    '3.3/3.4': [
      { t: 'Louisiana — Career Advancement Opportunities', u: 'https://www.louisianabelieves.com/teaching/career-advancement-opportunities' },
      { t: 'Louisiana Believes — Teaching', u: 'https://www.louisianabelieves.com/teaching' },
      { t: 'DC DCPS IMPACT Guidebooks', u: 'https://dcps.dc.gov/publication/current-impact-guidebooks' },
      { t: 'Tennessee Accountability (TEAM/TVAAS)', u: 'https://www.tn.gov/education/districts/lea-operations/accountability.html' },
    ],
    '3.5': [
      { t: 'Tennessee TEAM Career Ladder', u: 'https://team.tn.gov/', flagged: true },
      { t: 'NCTQ', u: 'https://www.nctq.org/', flagged: true },
    ],
    '3.5/3.6': [
      { t: 'DC DCPS IMPACTplus', u: 'https://dcps.dc.gov/page/impact-dcps-evaluation-and-feedback-system-school-based-personnel' },
    ],
    '3.7': [
      { t: 'Interstate Teacher Mobility Compact / NASDTEC', u: 'https://www.nasdtec.net/page/Teacher_Mobility_Interstate_Compact' },
      { t: 'NCTQ', u: 'https://www.nctq.org/', flagged: true },
      { t: 'Tennessee Priority Schools', u: 'https://www.tn.gov/education/districts/lea-operations/priority-schools.html', flagged: true },
      { t: 'DC IMPACT', u: 'https://dcps.dc.gov/page/impact-dcps-evaluation-and-feedback-system-school-based-personnel', flagged: true },
    ],
    '4.2/4.3': [
      { t: 'LPI — Districts Are Investing Billions in School Safety', u: 'https://learningpolicyinstitute.org/blog/districts-are-investing-billions-school-safety-heres-what-actually-keeps-students-safe' },
      { t: 'LPI — Safe Schools, Thriving Students', u: 'https://learningpolicyinstitute.org/product/safe-schools-thriving-students-report' },
    ],
    '4.3': [
      { t: 'LPI — Keeping Schools Safe? Behavioral Threat Assessments', u: 'https://learningpolicyinstitute.org/product/behavioral-threat-assessments-report' },
      { t: 'LPI — Striving for Relationship-Centered Schools', u: 'https://learningpolicyinstitute.org/product/striving-for-relationship-centered-schools-report' },
    ],
  };

  // Area-level (x.0) resources, keyed by area number.
  const S = {
    '1': [
      { t: 'Keeping Learning Rigor in AI-Supported Learning (SSRN)', u: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6423358' },
      { t: 'Keeping Learning Rigor in AI-Supported Learning (NBER)', u: 'https://www.nber.org/papers/w34950' },
      { t: 'AI-Assisted Learning Stumbles on the Evidence (Fordham)', u: 'https://fordhaminstitute.org/national/commentary/ai-assisted-learning-stumbles-evidence' },
    ],
    '2': [
      { t: 'Educator-Created Reading Skill Curriculum (Maine Monitor)', u: 'https://themainemonitor.org/educator-created-reading-skill-curriculum/' },
      { t: 'AI and the Future of Work Roundtable (NGA)', u: 'https://www.nga.org/meetings/ai-and-the-future-of-work-roundtable/' },
    ],
    '3': [
      { t: 'Why Teachers Quit (AEI)', u: 'https://www.aei.org/education/listening-to-the-teachers-who-quit/' },
      { t: 'Thinking About Incentives (Aldeman)', u: 'https://open.substack.com/pub/aldemanoneducation/p/thinking-about-incentives' },
    ],
    '5': [
      { t: 'State Education R&D — ALI Coalition Playbook', u: 'https://www.alicoalition.org/playbook/' },
    ],
    '6': [
      { t: 'How to Be an Education Governor (Aldeman)', u: 'https://open.substack.com/pub/aldemanoneducation/p/how-to-become-an-education-governor' },
    ],
  };

  // Expand combined keys ("1.2/1.3") onto each individual competency number.
  const byComp = {};
  Object.keys(C).forEach(function (key) {
    key.split('/').forEach(function (part) {
      part = part.trim();
      // a bare "2.6" suffix on "2.5/2.6" stays as-is; "1.2/1.3" -> "1.2","1.3"
      var num = part.indexOf('.') >= 0 ? part : (key.split('.')[0] + '.' + part);
      (byComp[num] = byComp[num] || []).push.apply(byComp[num], C[key]);
    });
  });

  window.SEA_RESOURCES = {
    competency: byComp,
    section: S,
    hasFlagged: function (list) { return (list || []).some(function (r) { return r.flagged; }); },
  };
})();
