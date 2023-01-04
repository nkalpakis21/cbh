# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

1. Create custom id field in agent table || 0.25 days
- Add a new custom id in the agent table. 
- This custom id will be created by the facility to use for their own reports

2. Add new agent custom id field to the PDF generated report. || 0.5 days
- Update getShiftsByFacility query to also return the custom id field
- Update generateReport function to properly append the new custom id
- Each line should contain the shift and the following meta data. "Xxx xxx xxx new-custom-id" (This line that contains meta data will be received from the stakeholder)

3. Give the facility a way to add/update the custom userId || 1 day
- Add input field on config user facing page that lets the facility input a custom id for an agent
- Update API data model to be able to intake the new custom id param when saving an agent
- Update service and repository layer to take the custom id from the API request and add it to the agent object being saved to the table.
- Do not fail the api response if no custom id is given assuming this is a nullable field

