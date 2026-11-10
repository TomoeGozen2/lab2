Why was it important to re-format the data from the Useless Facts API before sending it to your own client? What are the benefits of an API providing a clean, minimal response?
We reformatted it to just display the fact so it was more clean
In the catch block, why is it better to send a generic error message to the client instead of the actual error object from axios?
We didnt use axios. I dont know what that error message looked like
How might you modify this application to get a fact in a different language if the external API supported it (e.g., with a query parameter like ?language=de)?
Do something like:  ?language=de in the browser. 