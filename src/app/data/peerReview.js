export const peerReview = {
  "title": "Essex Family Research",
  "author": "Michael",
  "reviewer": "Renan Borsato",
  "projectUrl": "https://www.essexfr.org",
  "stagingUrl": "https://staging.essexfr.org",
  "documentUrl": "/documents/essex-family-research-peer-review.docx",
  "sections": [
    {
      "heading": "Overall assessment",
      "paragraphs": [
        "Michael, I chose Essex Family Research for my peer review because it combines software engineering with historical preservation. Your proposed design, motion, and storytelling systems offer a thoughtful response to inconsistent styling and growing architectural complexity. My main recommendation is to validate the complete user experience before treating the redesign as ready for production.",
        "This evaluation assesses the technical approach, ethical integration, and progress described in your Project Enhancement report. Test counts and validation outcomes are attributed to that report; they are not independent test results from my review."
      ]
    },
    {
      "heading": "Technical skills assessment",
      "paragraphs": [
        "Architecture and maintainability: Reusable components and centralized design and motion tokens address duplicated styling at the system level. Document component responsibilities and show how a page uses the shared systems so future changes remain consistent.",
        "Frontend and interaction design: Motion for React, a timeline controller, and the homepage prototype demonstrate attention to coordinated interactions. Confirm that research information and navigation remain usable when animations are reduced or disabled.",
        "CMS integration: Presentation adapters provide a foundation for future Payload CMS integration. Demonstrate how actual records, incomplete fields, and long historical text will fit the design; a prototype alone does not establish that integration is complete.",
        "Quality assurance: You report 462 passing unit tests, including 22 new tests, plus TypeScript, changed-file ESLint, and compile-only validation. This is useful evidence of engineering discipline. Full production build validation, browser accessibility checks, and performance measurements remain outstanding in your report."
      ]
    },
    {
      "heading": "Technical priorities",
      "paragraphs": [
        "First, complete the production build and investigate any failures. Next, test a representative journey from the homepage to a research record using both keyboard navigation and a mobile viewport. Measure loading and interaction performance on animation-heavy pages, and record the findings alongside your existing validation results."
      ]
    },
    {
      "heading": "Ethical integration assessment",
      "paragraphs": [
        "Privacy and security: Recognizing sensitive family relationships and access-controlled materials is appropriate. Strengthen the evidence with a documented access policy and checks showing that restricted records cannot be accessed by unauthorized users.",
        "Accessibility: Keyboard access, screen readers, responsive layouts, and reduced-motion support are meaningful commitments. Your report describes improvements, but browser-based validation is still pending. Verify focus visibility, reading order, and access to content without motion.",
        "Historical accuracy: Your distinction between evidence and interpretation is a strong ethical foundation. Use visible citations and uncertainty labels so a visually compelling family connection is not mistaken for an established fact.",
        "Intellectual property: Respect for image licensing and attribution should be visible in the finished experience. Keep source and rights information with historical materials, and display credits where users encounter them.",
        "Responsible AI use: Human approval before significant merges or deployments supports accountability. With several agents contributing, also document who reviews shared interfaces and resolves conflicting changes. Parallel work still needs integrated verification."
      ]
    },
    {
      "heading": "Constructive feedback and suggested improvements",
      "paragraphs": [
        "Show one before-and-after page: Identify the original inconsistency, the shared component or token that resolves it, and the visible improvement. This would make the architectural benefits easier to assess.",
        "Make ethical safeguards observable: Include an example of a restricted record, an uncertain relationship with its citation, and the reduced-motion version of an interaction. Describe expected behavior without exposing sensitive information.",
        "Document completed work separately from future plans: Label the homepage as a prototype and the CMS adapters as preparation for integration until the complete flow is implemented and verified.",
        "Report results after validation: Add the production build outcome, accessibility findings, performance measurements, and remaining issues. Explain what changed in response to peer feedback and why."
      ]
    },
    {
      "heading": "Concluding evaluation",
      "paragraphs": [
        "Your report shows a promising architectural approach and thoughtful ethical priorities. The strongest next step is to connect those intentions to observable behavior and documented results. A focused before-and-after example, completed production validation, and evidence of privacy and accessibility safeguards would make your refinement report substantially stronger."
      ]
    }
  ]
};
