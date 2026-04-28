import{W as e}from"./jh0OCD2W.js";var t=e({default:()=>n}),n=`---
title: Teacher's Pet; The worst application you have never heard of. 
date: 2026-04-27
---
# Teacher's Pet; The worst application you have never heard of. 
I had the deadline for one of my high school projects on this very date five years ago. So I can confidently say that I have been acquianted with the concept of programming for five years now (although my earlier work can only be called programming out of courtesy as you will shortly see).


So, to celebrate this milestone (or in europe: meterstone) I thought it could be a good idea to poke fun at the first "proper" codebase I ever made.

## The goal

Its was the Spring of 2021. The mission was simple, just make an application that helps at least one person in the world (you pick the person). Simple enough right?  So, what I decided to do was to make an application for the teachers of my school to help them track the performance of the students (their grades or feedback).
![entrance page](/images/teacherspetwelcome.png)

*Page that you were greeted by upon running the application*


One problem was, I didn't know programming. I mean okay, I could tell you what a Java was (thingy that you need to download to play Minecraft) but this was the limit of my knowledge. So, I arbitrarily chose Python as my stack. Yes, you heard it correct (or read it ig), the full app was going to be in Python. In retrospect, the teacher seeing me pick Python was probably the equivalent of watching a basket of little kittens floating on the water towards a waterfall. In Python you don't have to have types, classes, or any sort of respect for the version of yourself thats going to read your produce. Let's roll.

## Pip pip, array!
Viewing the code is pretty easy. All you have to do is first head to the \`venv\` folder and you can find it next to all the other libraries used. Yes, the full source code is in the same directory as where you download the external libraries. This is like cooking a succelent meal and then storing it in your fork drawer. An excellent start.

![directory structure](/images/teacherspetdir.png)
You can see the codebase has everything you need, everything in the same directory, we even have \`GUI.py\`, even \`GUI2.py\`(and \`GuiThings.py\` which wasn't cool enough to be part of the family).

## Opening Pandora's box
The apple does not fall far from the tree. At least this apple didn't as the code is somehow even more dreadful. The application opens with the following line:
\`\`\`python
#Using try except to make sure the database is created once and doesn't give an error if a database already exists
try:
     createtables()
except:
     pass
\`\`\`
Which in programming terms is saying: "Try to create the database tables, if you couldn't thats fine, who needs to anyway? At least you tried".
For the following code segment, I have no comments. Please let me know if you can figure out what the code does (or what an assNumberREM is).
\`\`\`python
def removalofatask(tIDREM,Classid):
    cur.execute("SELECT id from TASKINFO where taskclassid=?",(str(Classid)))
    idlist=cur.fetchall()
    y=0
    for x in idlist:
        x=str(x).replace("[", "").replace("(", "").replace("'", "").replace(")","").replace(" ", "").replace("]", "").replace(",","")
        if tIDREM==x:
            cur.execute("DELETE FROM stugradinfo WHERE taskid=?",(str(tIDREM),))
            cur.execute("DELETE FROM TASKINFO WHERE id=?",(str(tIDREM),))
            cur.execute("SELECT numberofassignments FROM classinfo WHERE id=?", (Classid,))
            global assNumberREM
            assNumberREM = int(str(cur.fetchall()).replace("[", "").replace("(", "").replace("'", "").replace(",", "").replace(")","").replace(" ", "").replace("]", ""))
            assNumberREM = assNumberREM -1
            cur.execute("UPDATE classinfo SET numberofassignments = ? where id=?", (assNumberREM, Classid,))
            con.commit()
        else:
            y=y+1
    if y==len(idlist):
        errorpopup=Tk()
        Label(errorpopup,text="Please Enter a Valid ID!").grid(column=0,row=0)
\`\`\`
I want to also point out that, believe it or not, this code has some problems. Not only are the queries vulnerable to SQL injections, the same replace thing is spammed all over and over again (common theme in the application) but also the database util also makes GUI elements appear.
This was the problem, I learned how to do something one way and I never looked back.
## The code speaks for itself
I also want to point out that this code was written by an angsty 17 year old at 3-4am. So, the code variable names were also not the best. I feel like this following line should give you the full story:
\`\`\`python
    addfeedbutton=Button(second_frame,text='Add Feedback',font=GuiThings.Gthing.SmallFont,command=feedbackaddinator)
\`\`\`
What the code does is pretty simple, It adds a font from \`GuiThings.Gthing\` and once the button is pressed it calls \`feedbackaddinator\`. As to why it wasn't named something more normal like \`addFeedback\` is a question for which we will never get an answer.

The mental decline of the author is extremely evident from the comments occasionally changing language.
\`\`\`python
#list box için sınıf isimlerinin çıkmasını sağlayan function
def printClassName(theLoopOfWhile):
    x=theLoopOfWhile
    cur.execute('SELECT classlevel FROM classinfo WHERE id='+ str(x))
    y = cur.fetchall()
    ...
\`\`\`
## Polymorphism
I was told  that polymorphism is a good thing to in code. I hadn't understood by then its importance but I had still decided to incorprate it anyway. I implemented it in the sorting strategy: The teacher could sort by grade, alphabetical name, by level (reading from the code, I think what I meant is seniority, not power levels) both ascending or descending.
So I had two classes:
\`\`\`python
class SortByLevel:
  def opensorted(): # does the sorting, I don't know why wasn't called sort()
    ...

class SortbyGrade:
  def opensorted():
    ...
\`\`\`
You might notice that I had forgor to add a parent class for these but thats fine. An then I'd just pass around these objects and simply call \`.opensorted()\`. Its not that bad if don't consider the fact that these bad boys also did database operations and made GUI elements pop-up (Dependency injection wasn't living on the same planet as me yet). While some people may call this piece of code "hot garbage", an 80$ book may call this code that I did the "Strategy Design Pattern". It's up to you to decide.

## Concluding
I will not mention the remaining roster of fundamental problems with this project as I want to keep this file short(certainly wasn't a habit back then I cana tell you that for free). I want to take a little bit of time reflecting. 


I am happy that I can look back at myself and say "hehe, that guy what an idiot". I hope that I can look back to myself in the feature and again see through all the stupid things I am probably doing, because If this isn't the case, that means I am still the very same idiot.


I am happy AI didn't exit when I was working on this. The end product would have probably been better but I wouldn't experience why some programming conventions exist (I remember getting a light bulb moment when I finally learned what polymorphism was and how useful it would have been for my app).
I remember how devastating it felt when I found a few bugs in my program (oh, I forgot to mention, this didn't have any tests) and how triumphant I felt when I solved them. This project is what made me love programming. So, while Teacher's Pet is practically a computer virus, it is a testament to how fun building something from scratch or overcoming challenges can be.

I want to give the final word to the version of myself from five years ago that probably had a very smug smile on their face when they wrote following piece of code. "aaah, this works"
\`\`\`python
    #aaah this works
    global o
    o=int(str(cur.fetchall()).replace("[","").replace("(","").replace("'","").replace(",","").replace(")","").replace(" ","").replace("]",""))
\`\`\`
`;export{t as n,n as t};