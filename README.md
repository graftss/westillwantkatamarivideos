## Editing run list

The runs in the table are controlled through `runs.json`, which should
contain a flat JSON array. Each element should be either

* null, which yields a blank row in the table, or

* an object with four properties, corresponding to the four rows of the table:
  * **category**, which confusingly now refers to the mission
  * **player**, the person playing in the clip
  * **result**, the title of the clip
  * **uri**, the link to the clip

The elements of the `runs.json` array are rendered to the table in order.
