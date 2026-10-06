// SEA Change — content data (R8)
(function () {
  const AREA_DEFS = [
    {
      id: 'organize',
      num: 1,
      label: 'Organize\nfor Student\nOutcomes',
      title: 'Organize for Student Outcomes',
      color: '#2fb2ff',
      desc: 'The structures, systems, and mechanisms used to align strategy, policy, funding, accountability, and support to drive strong student outcomes.',
    },
    {
      id: 'flip',
      num: 2,
      label: 'Flip the\nSystem / Grow\nLocal Capacity',
      title: 'Flip the System / Grow Local Capacity and Agency',
      color: '#ec578b',
      desc: 'The conditions, authorities, supports, and relationships that enable districts, schools, and communities to make decisions, take action and drive improvement.',
    },
    {
      id: 'professionalism',
      num: 3,
      label: 'New\nProfessionalism\nfor K-12',
      title: 'New Professionalism for K-12',
      color: '#e8832d',
      desc: 'The systems, practices, and conditions that develop educator expertise, leadership, collaboration, and workforce effectiveness.',
    },
    {
      id: 'safe',
      num: 4,
      label: 'Safe and\nHealthy\nSchools',
      title: 'Safe and Healthy Schools',
      color: '#f6d03e',
      desc: 'The commitments, supports, environments, and partnerships that promote student and staff wellbeing, safety, and belonging.',
    },
    {
      id: 'operations',
      num: 5,
      label: 'Internal\nOperations',
      title: 'Internal Operations',
      color: '#7c4cdc',
      desc: 'The internal systems, talent, data infrastructure, and fiscal stewardship required to run an SEA that can actually deliver on its commitments to students and the field.',
    },
    {
      id: 'vision',
      num: 6,
      label: 'Vision, Engagement\nand Strategic\nAlignment',
      title: 'Visioning, Engagement and Strategic Alignment',
      color: '#37a561',
      desc: 'The leadership, communication, and coalition-building work that sets direction, sustains public trust, and brings the internal and external will needed to transform how the system serves students.',
    },
  ];

  // Real content comes from sea-content.js (parsed from the June 2026 spreadsheet).
  const CONTENT = window.SEA_CONTENT || {};
  const RES = (window.SEA_RESOURCES && window.SEA_RESOURCES.competency) || {};
  const areas = AREA_DEFS.map(function (def) {
    var AIC = (window.SEA_AI && window.SEA_AI.competency) || {};
    const comps = (CONTENT[def.id] || []).map(function (c) {
      return { num: c.num, text: c.text, ai: !!AIC[c.num], res: !!(RES[c.num] && RES[c.num].length), fns: c.fns || [] };
    });
    return Object.assign({}, def, { comps: comps });
  });

  // Resource accessors for chips/modals. Flagged ("needs review") items are
  // excluded so no red "+ Resources" pills render.
  function noFlag(list) { return (list || []).filter(function (r) { return !r.flagged; }); }
  function competencyResources(num) { return noFlag(RES[num]); }
  function sectionResources(areaNum) {
    return noFlag(window.SEA_RESOURCES && window.SEA_RESOURCES.section[String(areaNum)]);
  }

  // Intro ("read more") panels — final R8 copy
  const DIAGRAM_THUMB = 'imgs/diagram-thumb.webp';
  const intros = [
    {
      id: 'intro',
      layout: 'overview',
      title: 'What is\nSEA Change?',
      eyebrow: 'Overview',
      panelTitle: 'What is SEA Change?',
      teaser: [
        'SEA Change is ',
        { b: 'a functional blueprint for how a high-capacity, future-ready SEA must operate in order to improve student outcomes.' },
      ],
      lead: 'SEA Change is a functional blueprint for how a high-capacity, future-ready SEA must operate to improve student outcomes.',
      paras: [
        [
          { b: 'SEA Change is a functional blueprint for how a high-capacity, future-ready SEA must operate to improve student outcomes.' },
          ' Drawing on the idea of a "Portrait of a Graduate," this blueprint seeks to define the competencies an SEA must possess and the functions it must perform to lead effectively across policy, implementation, innovation, operations, data, and public trust.',
        ],
        [
          'SEA Change was informed by current and former state chiefs across varied policy contexts and political landscapes. While states differ in structure, priorities, and constraints, co-creators consistently affirmed the same core direction: stronger student-outcomes focus, deeper local capacity-building, more strategic leadership, and more adaptive, future-ready agencies.',
        ],
      ],
      listLabel: 'The model centers on three core commitments:',
      list: [
        "Centering the agency's work on student learning and long-term outcomes",
        'Embedding innovation and responsible AI-enabled improvement as expected practice',
        'Building the capacity and agency of local leaders, educators, and communities',
      ],
      thumb: 'imgs/intro-photo.webp',
      thumbKey: 'introPhoto',
    },
    {
      id: 'why',
      layout: 'standard',
      title: "Why it's Needed",
      panelTitle: "Why It's Needed",
      teaser: [
        'Public education is entering a new era, but many of the systems responsible for leading it were ',
        { b: 'designed for a different time.' },
      ],
      lead: 'Public education is entering a new era, but many of the systems responsible for leading it were designed for a different time.',
      paras: [
        [
          'Over the past fifteen years, ', { b: 'student outcomes have declined' }, ' even as schools have taken on increasing complexity: evolving workforce demands, rapid advances in technology, widening outcome gaps, growing student needs, and rising public expectations for responsiveness and results. At the same time, decades of layered compliance requirements and fragmented initiatives have often pushed education systems toward ', { b: 'administration over responsiveness' }, ' and process over learning.',
        ],
        [
          'Historically, SEAs have often been asked to respond to change more than drive it. But the scale and pace of today\u2019s challenges ', { b: 'require something different.' },
        ],
        [
          'As artificial intelligence, demographic shifts, workforce transformation, and declining trust in institutions continue to reshape the educational landscape, SEAs must become more ', { b: 'proactive leaders of coherent, adaptive learning systems' }, ' \u2014 strengthening local capacity, modernizing infrastructure, stewarding innovation responsibly, and helping communities adapt to rapid change.',
        ],
        [
          'If learning happens locally, then SEAs cannot improve outcomes simply by directing change from afar. They must increasingly organize around ', { b: 'enabling local leaders, educators, schools, and communities' }, ' to do their best work while maintaining coherence, accountability, and strategic direction across the system.',
        ],
      ],
      thumb: 'imgs/why-photo.webp',
      thumbKey: 'whyPhoto',
    },
    {
      id: 'how',
      layout: 'howto',
      title: 'How to Use SEA Change',
      panelTitle: 'How to Use SEA Change',
      teaser: [
        'SEA Change provides a shared framework for reflection, planning, and long-term organizational development. Because every state education agency operates in a different context, leaders can use it to assess current capabilities, identify priorities, guide modernization efforts, make strategic investments, and strengthen their agency over time.',
      ],
      lead: "This site isn't a checklist. Every state faces its own challenge, so this blueprint is designed to help orient strategy, assess current capacity, prioritize investments, guide modernization efforts, and support long-term organizational development.",
      left: {
        paras: [
          [
            'It is intentionally ambitious and should not be approached as a checklist. Rather, leadership teams can use it to ', { b: 'orient strategy, assess current capacity, prioritize investments, guide modernization efforts, and support long-term organizational development.' },
          ],
        ],
        listLabel: 'States may use this blueprint to:',
        list: [
          [{ b: 'Assess' }, ' organizational strengths and gaps'],
          [{ b: 'Clarify' }, ' priorities and sequencing'],
          [{ b: 'Align' }, ' leadership teams around a shared vision'],
          [{ b: 'Guide' }, ' modernization and organizational redesign'],
          [{ b: 'Inform' }, ' investments in talent, data, technology, and operations'],
          [{ b: 'Structure' }, ' conversations with policymakers and stakeholders'],
          [{ b: 'Support' }, ' continuity across leadership transitions'],
        ],
        closing: [
          'The ', { b: 'sections are deeply interconnected' }, ' and should not be viewed in isolation. Several foundational capabilities \u2014 particularly data infrastructure, AI governance, cybersecurity, internal operations, and continuous improvement systems \u2014 ', { b: 'create enabling conditions' }, ' for the rest of the work.',
        ],
      },
      right: {
        label: 'Two additional resources accompany this blueprint:',
        cards: [
          { chip: 'ai', title: 'AI Callouts:', text: 'Illustrative examples of how AI can transform how SEAs operate, build capacity, steward innovation, and support local systems in achieving better outcomes for students.' },
          { chip: 'resources', title: 'Resources:', text: 'Examples of competencies and functions already emerging across states in varied contexts and stages of development.' },
        ],
        closing: [
          'States will naturally begin in different places. The goal is not uniformity, but ', { b: 'progress toward a more coherent, responsive, modern, and student-centered SEA' }, ' capable of improving outcomes for every student it serves.',
        ],
      },
    },
  ];

  // ---------- AI / Resources popup placeholder content ----------
  function resourceItems(context) {
    return [
      { kind: 'Example', title: 'Placeholder — a competency or function already emerging in practice' },
      { kind: 'Toolkit', title: 'Placeholder — a self-assessment or planning tool' },
      { kind: 'Case study', title: 'Placeholder — a state implementation example' },
      { kind: 'Reading', title: 'Placeholder — related research and references' },
    ];
  }

  function aiParas(context) {
    return [
      'Placeholder \u2014 how AI applies to ' + context + ': illustrative examples of how AI-enabled tools can reduce manual burden, surface patterns earlier, and free staff time for higher-judgment work.',
      'Placeholder \u2014 responsible adoption starts with clear use policies, human review of consequential decisions, and transparency with districts, educators, and families about where AI is used.',
      'Placeholder \u2014 practical near-term applications include drafting and summarization, data quality checks, knowledge-base search, translation and accessibility, and early-warning signal detection.',
      'Placeholder \u2014 SEA Change treats AI fluency as an institutional competency: agencies should build shared literacy, pilot deliberately, measure impact, and scale only what demonstrably improves outcomes.',
    ];
  }

  window.SEA_DATA = { areas: areas, intros: intros, aiParas: aiParas, resourceItems: resourceItems, competencyResources: competencyResources, sectionResources: sectionResources };
})();
