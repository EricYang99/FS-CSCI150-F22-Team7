#This is the Class Info Scraper -> Gets the Name, Units, When the class is offered, and repeatability
#This was made by Eric 
#Do be sure to edit it if you need to!

#Libraries that for python use
#Make sure you have python, Beautifulsoup, and Requests installed
from urllib.request import urlopen
from bs4 import BeautifulSoup 
import requests 

#Got all of the information from the catalog, Below is the URL
urlToScrape = "https://directory.csufresno.edu/users/dept/117"
requestPage = urlopen(urlToScrape) #Open the url
pageIntohtml = requestPage.read()  #Read the url and store it as a variable
requestPage.close()                #Closing the url

soup = BeautifulSoup(pageIntohtml, 'html.parser') #Parses the HTML into python to use

#This is the file creation part of the code, just making an excel sheet, basically.
fileData = "csciProfessors.csv"             #This is the name of the file, it will be in the form of a CSV file but can be read as an excel sheet
File = open(fileData, 'w')        #Opening the file so we can fill it with data
headers = 'Name\n' #These are the headers that will be at the top of the excel sheet
#,Desk Phone,Department Phone,Faculty Classification,Email Address,Office Location,Department,Mail Stop
File.write(headers)               #Writing in the headers
#NOTE: COMMAS WILL CREATE A NEW CELL TO THE RIGHT OF THE CURRENT CELL 

#This is essentially what we needed to get all the classes. {"class" : "name"} or class_="name"
csciMainContent = soup.find_all('TABLE')

print(csciMainContent)
#This for loop will load all the data into a the excel sheet
for data in csciMainContent:
    names = data.text
    File.write(names + '\n')           #Adding info into our Excel Sheet

File.close()    #Closing the Excel Sheet

