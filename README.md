# Overview
This repository is for the "CyberChef for Splunk" App for Splunk.  This Splunk App provides a Custom Search Command (Search Processing Language) for the [CyberChef](https://gchq.github.io/CyberChef/) node [api](https://github.com/gchq/CyberChef/wiki/Node-API), allowing you to apply CyberChef operations and recipes to your search results.

# License
This App is released under the GPL v3 license. CyberChef is released under the Apache 2.0 License and is covered by Crown Copyright.

# Installing
In most instances you will want to install this App on your Splunk servers directly from [SplunkBase](https://splunkbase.splunk.com/).  Alternately you can [download](https://github.com/NDietrich/CyberChef-for-Splunk/releases) this App (in .spl format) from github to install manually on your servers.  If you want to make your own modifications to this App, this repository has a [makefile](https://github.com/NDietrich/CyberChef-for-Splunk/blob/main/src/Makefile) that will package this App into a .spl file for you.  You really only need to clone this repository if you want to modify and package this App yourself, following these [Instructions](https://github.com/NDietrich/CyberChef-for-Splunk/blob/main/src/README.md).

# Example:
```
| makeresults count=3 
 | streamstats count
 | eval data=random()/random() 
 | cyberchef infield='data' outfield='convertedData' operation="ToBase64" 
 | table data convertedData
```
When you run the above example, you'll get something like the following output:

data                        | convertedData
--------------------------- | ------------------
1.267541990694              | MS4yNjc1NDE5OTA2OTQ=
1.233951602074389	          | MS4yMzM5NTE2MDIwNzQzODk=
1.738851991598791	          | MS43Mzg4NTE5OTE1OTg3OTE=

Here we generate three results with random data in the 'data' field (the first three lines of SPL).  We then use CyberChef's **toBase64** operation to convert the values in the *'data'* field to base-64 representation, and save the results to the *'convertedData'* field.

This is a simple example for clarity's sake.  This App has a lot of additional functionality, described in the [instructions](https://github.com/NDietrich/CyberChef-for-Splunk/blob/main/src/cyberchef/README.md).

# Requesting Help
Please submit bug and feature requests via [Github](https://github.com/NDietrich/Splunk-Snort3-TA/issues) for this project, or email Noah@SublimeRobots.com.  Please include as much information as possible with your request.  This TA is not professionally supported (it is a volunteer project), so issues may not be fixed immediately, but I will make every effort to reply.
