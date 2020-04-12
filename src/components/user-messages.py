import os
import sys
from flask import Flask,request
import json
from flask_cors import CORS

def read(file):
    newfile = open(file,'r',encoding='utf-8')
    userMessage = {}
    for line in newfile:
        if line.find('username=') != -1 and line.find('password=') != -1:
            username = line.split('username=')[1].split("password")[0].split("\"")[1]
            password = line.split('password=')[1].split("role")[0].split("\"")[1]
            userMessage.update(
                {
                    username:password
                }
            )
    return json.dumps(userMessage) #linux服务器必须返回json格式数据
    # return userMessage

def write(file, newuser):
    newuserName = newuser['name']
    newuserPasswd = newuser['passwd']
    newline = "  <user username=\"" + newuserName + "\" password=\"" + newuserPasswd + "\" roles=\"admin\"/>" + "\n"
    userMessages = []
    tomcat = open(file,'r',encoding='utf-8')
    # with open(file,"rt",encoding='utf-8') as f:
        # tomcat = str(f.readline())
    for line in tomcat:
        userMessages.append(line)
    userMessages.insert(-4,'\n')
    userMessages.insert(-4,newline)
    # print(userMessages)

    newtomcat = open(file,'w',encoding='utf-8')
    for line in userMessages:
        newtomcat.writelines(line)
    newtomcat.close()

def modify(file, newuser):
    userName = newuser['name']
    newPasswd = newuser['passwd']
    newline = "  <user username=\"" + userName + "\" password=\"" + newPasswd + "\" roles=\"admin\"/>" + "\n"
    userMessages = []
    tomcat = open(file,'r',encoding='utf-8')
    # with open(file,"rt",encoding='utf-8') as f:
        # tomcat = str(f.readline())
    for line in tomcat:
        if line.find(userName) != -1:
            userMessages.append(newline)
        else:
            userMessages.append(line)
    # print(userMessages)

    newtomcat = open(file,'w',encoding='utf-8')
    for line in userMessages:
        newtomcat.writelines(line)
    newtomcat.close()

app = Flask(__name__)
CORS(app, resource=r'/*')
@app.route('/url', methods=['GET','POST'])
def userMessages():
    if request.method == "GET":
        return read('tomcat-users.xml')
    elif request.method == "POST":
        modify('tomcat-users.xml',request.get_json())
        return "post success"
    else:
        return "request failure"

if __name__ == "__main__":
    app.run(host='0.0.0.0',port=8089)
    # if sys.argv[1] == "read":
    #     read('tomcat-users.xml')
    # elif sys.argv[1] == "write":
    #     # inputStr = '{"name":"wzj","passwd":"1234"}'
    #     inputStr = eval(sys.argv[2])
    #     write('tomcat-users.xml',inputStr)
    # else:
    #     print("Please input right message!")