const TABLE_IDENTIFIER = '{{RUNS}}';

const renderNonemptyRun = run => (
 `<tr>
    <td>${run.category}</td>
    <td>${run.result}</td>
    <td>by ${run.player}</td>
    <td style="vertical-align: top;"><a href="${run.uri}">watch here</a></td>
  </tr>`
);

const renderEmptyRun = () => `<tr><td>&nbsp;</td><td></td><td></td></tr>`;

const renderRun = run => run === null ? renderEmptyRun() : renderNonemptyRun(run);

const renderRuns = runs => runs.map(renderRun).join('\n');

const fetchRuns = () => fetch('runs.json').then(res => res.json());

const writeRuns = runs => document.getElementById('runs').innerHTML = runs;

fetchRuns().then(renderRuns).then(writeRuns);
