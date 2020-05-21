const fs = require('fs');

const paths = {
  TEMPLATE: './template.html',
  RUNS: './runs.json',
  INDEX_OUT: './index.html',
};

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

const build = () => {
  const runs = JSON.parse(fs.readFileSync(paths.RUNS).toString());

  const out = fs.readFileSync(paths.TEMPLATE)
    .toString()
    .replace(TABLE_IDENTIFIER, renderRuns(runs));

  fs.writeFileSync(paths.INDEX_OUT, out);
};

build();
