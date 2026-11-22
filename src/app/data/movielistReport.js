const repository = "https://github.com/renanborsato/movielist";
const before = "873fd7ca2c333918500e3f84ac0f4410116d2704";
const after = "ee59c2ff029d13d319687ce9c99323b0863725ae";

export const movieListReport = {
  summary: "I refined MovieList after a peer successfully created a guest list but had difficulty adding movies and encountered movie-loading and account-import errors. I focused on making the next action clear, explaining failures accurately, and protecting saved work during recovery. The changes address interaction and recovery problems; they do not establish that every live service is working.",
  investigation: "I separated the peer’s observations from the causes I could verify. During the initial investigation, the deployed movie-search endpoint returned HTTP 503 with the response ‘Movie service is not configured.’ That identified a deployment configuration problem, rather than an empty search result. Code review also found generic movie errors, clickable result text without button semantics, search inputs cleared after failed saves, and an import retry flow that still displayed required login fields to signed-in users. The exact cause of the peer’s account-import failure was not independently reproduced against their account.",
  cases: [
    {
      title: "Movie addition and search",
      before: "Results were clickable list items, with little guidance about how to add a movie. The add-movie handler cleared the query and results even when the save operation failed. Global search failures were written to the console rather than explained in the interface.",
      after: "A shared search component now labels its input, explains the two-character minimum, and shows loading, empty, and failure states. Movie results use native buttons with an explicit Add to list action. Successful saves show confirmation; failed saves keep the query and results available. Searches wait 300 milliseconds and cancel outdated requests.",
      reason: "I used one component for global search and list addition so their recovery behavior stays consistent. Native buttons support keyboard activation, while retaining a failed selection avoids forcing users to repeat their work. Cancelling older requests prevents a cleared search from repopulating with stale results.",
      verified: "Interaction tests verified keyboard selection after a failed search and retry, preservation and retry of a failed save, and rejection of stale results after clearing a query. These tests use controlled responses in a simulated browser.",
    },
    {
      title: "Movie loading and recovery",
      before: "The request helper returned the same generic error for every unsuccessful response. Movie-detail failures offered no retry action, and saved-title failures could appear as Unknown title rather than explaining the service problem.",
      after: "Errors now distinguish connection failures, service unavailability, missing movies, and rate limits. The helper rejects HTML responses that are not movie JSON. Detail pages and saved-title loading offer retry controls, and the proxy preserves upstream rate-limit status. User-facing messages avoid exposing credentials or raw upstream details.",
      reason: "A configuration failure needs a different response from a movie that does not exist. I kept credentials on the server and gave visitors a clear explanation without putting deployment instructions into their normal flow. Retry controls help with temporary failures, but cannot replace a missing service credential.",
      verified: "Service tests checked HTTP 503, 404, 429, and 502 messages; network errors; cancellation; misrouted HTML; valid movie JSON; missing-credential behavior; and proxy rate-limit handling. The initial live HTTP 503 is investigation evidence, not a claim about the current deployment.",
    },
    {
      title: "Account import and saved data",
      before: "Signed-in users were told to submit the login form again to retry an import, while credential fields remained visible and required. Existing imports already retained unsaved lists after failed uploads, but did not check whether a list had changed during the upload before deleting its local copy.",
      after: "Signed-in users now see a dedicated import action and can continue to their account without importing immediately. Messages distinguish session, permission, storage-configuration, and rate-limit problems. The importer retains unsaved lists and also keeps a local list if it was edited during upload, asking the user to close other tabs and retry.",
      reason: "Signing in and importing saved work are separate tasks. I kept import recovery independent of credential entry and preserved existing stable list IDs and partial-import behavior. Checking for intervening edits reduces the risk of deleting newer local work after uploading an older snapshot.",
      verified: "Service tests verified rated-list preservation across five import failure categories and retention of edits made during upload. Existing tests verified partial failure and retry without repeating completed lists. An interaction test verified signed-in import recovery without credential entry. Real Appwrite permissions and cross-device behavior still require live acceptance checks.",
    },
  ],
  ethics: [
    { title: "Respect for user effort", text: "Keeping failed selections and unsaved or newly edited guest lists reduces avoidable loss and repeated work. I preserved the rule that a local copy is removed only after a successful upload, with an additional check for edits made during that upload." },
    { title: "Accessibility and inclusion", text: "Labelled inputs, native result buttons, status announcements, and recovery messages in English, Spanish, and Portuguese make these flows easier to understand and operate. Keyboard selection was tested in a simulated browser; a complete accessibility audit remains outside these checks." },
    { title: "Honesty and privacy", text: "The report distinguishes peer observations, a verified configuration failure, and controlled test results. Errors avoid revealing secrets or private upstream details, and no account permissions were relaxed to make an import succeed. Production privacy and account isolation are not certified by the local tests." },
  ],
  checks: [
    { command: "npm test", result: "21 passed", scope: "Guest persistence, partial imports and retries, concurrent edits, movie errors, and proxy boundaries." },
    { command: "npm run test:ui", result: "4 passed", scope: "Keyboard selection, failed-save retry, stale-result prevention, and signed-in import recovery using controlled responses." },
    { command: "npm run lint", result: "Passed", scope: "Static code checks for the MovieList refinement." },
    { command: "npm run build", result: "Passed", scope: "Vite production bundle generated successfully; this does not validate deployed credentials or cloud permissions." },
  ],
  impact: "The verified improvement is a more recoverable interaction flow: a failed search can be retried, a failed save retains its selection, and interrupted imports retain remaining local work. Peer feedback also changed my priorities from adding features to making existing tasks understandable and dependable. No post-refinement peer retest, usability measurement, or production performance improvement is claimed.",
  nextSteps: "Before treating the live issues as resolved, confirm the server-side TMDB credential in Vercel, confirm the deployed revision, and test real movie search, addition, and account import. Check that another account cannot access private lists, and request a peer retest of the original journey. This report records completed source changes and local validation; live acceptance remains pending.",
  evidence: [
    { label: "Complete before and after source comparison", url: `${repository}/compare/${before}...${after}` },
    { label: "Refinement commit ee59c2f", url: `${repository}/commit/${after}` },
    { label: "Movie search and addition interaction code", url: `${repository}/blob/${after}/src/MovieSearch.jsx` },
    { label: "Service regression tests", url: `${repository}/blob/${after}/tests/refinements.test.js` },
    { label: "Interaction tests", url: `${repository}/blob/${after}/tests/ui/flows.test.jsx` },
  ],
};
